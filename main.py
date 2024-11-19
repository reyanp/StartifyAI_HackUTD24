import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from bs4 import BeautifulSoup

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = ""  # Replace with your OpenAI key

# FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


# Pydantic model for request and response
class QueryRequest(BaseModel):
    query: str

# Initialize ChromaDB
def init_chromadb(persist_directory="chromadb_store"):
    return Chroma(persist_directory=persist_directory, embedding_function=OpenAIEmbeddings())

# Parse HTML file manually
def parse_html(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")
    return soup.get_text(separator="\n", strip=True)

# Chunk text for embedding
def chunk_text(text, chunk_size=1000, chunk_overlap=200):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\n", " ", ""]
    )
    return text_splitter.split_text(text)

# Store chunks in ChromaDB
def store_in_chromadb(chunks, persist_directory="chromadb_store"):
    embeddings = OpenAIEmbeddings(model="text-embedding-ada-002")
    vectordb = Chroma.from_texts(chunks, embeddings, persist_directory=persist_directory)
    vectordb.persist()

# Query ChromaDB
def query_chromadb(query, persist_directory="chromadb_store"):
    vectordb = init_chromadb(persist_directory)
    retriever = vectordb.as_retriever()
    llm = ChatOpenAI(model="gpt-4", temperature=0)
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
    return qa_chain.run(query)

# API Endpoints
@app.post("/query")
async def query(request: QueryRequest):
    try:
        response = query_chromadb(request.query)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "API is running. Use /query to interact with the assistant."}


# Main process (optional initialization of the database)
if __name__ == "__main__":
    html_file_path = "scraped_data.html"
    print("Parsing HTML...")
    html_text = parse_html(html_file_path)
    chunks = chunk_text(html_text)
    print("Storing chunks in ChromaDB...")
    store_in_chromadb(chunks)
@app.get("/")
async def root():
    return {"message": "Server is running"}
