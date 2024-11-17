'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    userType: 'individual',
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // Add a fade-in animation class on page load
    document.body.classList.add('animate-fadeIn');
    return () => {
      document.body.classList.remove('animate-fadeIn');
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex items-center justify-center px-4 font-poppins">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full animate-slideUp">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2" htmlFor="userType">
              What best describes you?
            </label>
            <select
              name="userType"
              id="userType"
              value={form.userType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="business">Business User</option>
              <option value="individual">Individual Investor</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="age">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={form.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
