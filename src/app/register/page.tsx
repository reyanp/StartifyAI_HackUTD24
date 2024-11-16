// app/register/page.tsx
'use client';

import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', form);
    // Redirect to dashboard after successful registration
    router.push('/dashboard');
  };

  return (
    <div style={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label>
            Are you a:
            <select name="userType" value={form.userType} onChange={handleChange}>
              <option value="business">Business User</option>
              <option value="individual">Individual Investor</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Name:<br />
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:<br />
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Age:<br />
            <input type="number" name="age" value={form.age} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:<br />
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:<br />
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  form: {
    display: 'grid',
    gridGap: '15px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
