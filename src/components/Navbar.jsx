"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const { data: session, status } = useSession();
  console.log(session);
  // console.log(session.user.image);

  const handleLogOut = () => {
    signOut();
    toast.success("Log Out Successfully");
  };

  return (
    <div className="bg-base-100 shadow-sm sticky z-1 top-0">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-xl hidden md:block">
            <Image
              className="w-16 h-auto"
              alt="logo"
              width={60}
              height={60}
              src={"/assets/logo.svg"}
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:block lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href=""> Blog</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {status == "authenticated" ? (
            <>
              <div>
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
              <li onClick={handleLogOut} className="btn ">
                Log Out
              </li>
            </>
          ) : (
            <>
              <Link className="btn " href={"/register"}>
                Register
              </Link>
              <Link className="btn " href={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
