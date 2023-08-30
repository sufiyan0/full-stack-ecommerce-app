"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Logo.webp";
import menu from "../../../public/menu.svg";
import close from "../../../public/close.svg";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const { isSignedIn } = useAuth();
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center object-cover">
          <Image
            src={logo}
            width={150}
            className="object-cover"
            alt="Panaverse Logo"
          />
          {/* <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">Panaverse</span> */}
        </Link>
        <div className="flex md:order-2">
          <Link href={"/cart"}>
            <button
              type="button"
              className=" hidden md:block  focus:ring-4 focus:outline-none text-black bg-slate-200  font-medium rounded-full text-3xl p-2 text-center mr-3 md:mr-0 "
            >
              <AiOutlineShoppingCart />
            </button>
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex bg-slate-700 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <Image
              src={toggle ? close : menu}
              alt="meny"
              className="sm:h-[28px] w-[28px] object-center"
              onClick={() => setToggle((prev) => !prev)}
            />
          </button>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } items-center justify-between  md:flex  w-full  md:w-auto md:order-1" `}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 w-full rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/Women"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                href="/Man"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Man
              </Link>
            </li>
            <li>
              <Link
                href="/Kids"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                href="/AllProducts"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                All Products
              </Link>
            </li>
            <li>
              <button
                type="button"
                className=" md:hidden flex items-center justify-center focus:ring-4 focus:outline-none text-black bg-slate-200  font-medium rounded-full text-3xl p-2 text-center mr-3 md:mr-0 "
              >
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li className=" ">
              <div className="">
                {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button className="bg-black text-white py-2 px-5 font-semibold rounded-md">
                      Sign In
                    </button>
                  </SignInButton>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
