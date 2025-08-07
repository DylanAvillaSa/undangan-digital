"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginAdmin = () => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formInput, setFormInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const email = "ismednovian@admin.id";
      const pass = "admin123";

      if (formInput.email === email && formInput.password === pass) {
        router.push("/dashboard-admin");
      } else {
        setStatus("Email / Password anda salah!");
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      setFormInput({ email: "", password: "" });
      setIsLoading(false);
    }
  };
  return (
    <section className='flex min-h-screen justify-center items-center'>
      <form
        className='flex w-[30%] flex-col gap-5 text-sm shadow-md p-8 rounded-md'
        onSubmit={handleSubmit}>
        <h1 className='font-bold text-xl'>Login Admin</h1>
        {status && <p className='text-rose-400 text-start'>{status}</p>}
        <input
          type='email'
          placeholder='Email address'
          name='email'
          value={formInput.email}
          onChange={handleChange}
          className='p-3 rounded border border-slate-200'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={formInput.password}
          onChange={handleChange}
          className='p-3 rounded border border-slate-200'
        />
        <button
          type='submit'
          className={`p-3 rounded bg-slate-900 text-white hover:bg-slate-800 cursor-pointer ${
            loading && "opacity-35"
          }`}>
          {loading ? "Menunggu..." : "Login"}
        </button>
      </form>
    </section>
  );
};

export default LoginAdmin;
