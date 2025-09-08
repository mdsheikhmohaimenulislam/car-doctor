"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function LoginForm() {
//   const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn("credentials", { email, password ,callbackUrl:"/"});
    //   route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button
        type="submit"
        className="w-full h-12 bg-orange-500 text-white font-bold"
      >
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}
