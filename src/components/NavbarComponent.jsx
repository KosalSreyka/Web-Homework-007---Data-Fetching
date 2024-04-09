"use client";
import React from "react";
import Link from "next/link";
export const NavbarComponent = () => {
  return (
    <div>
      <div>

        <nav className="fixed -top-9 z-10 block w-full max-w-full   rounded-none  lg:px-8 lg:py-4">
          <div className="flex items-center justify-between  text-white">
            <Link
              href="/"
            >
             <div className="w-32 h-17  text-white">
                <img src="../Legend-Cinema.png" />
             </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <li className="hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                    <Link href="#">Popular</Link>
                  </li>
                  <li className="hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                    <Link href="#">Romance</Link>
                  </li>
                  <li >
                   
                    <button
                      className="hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button"
                    >
                       <Link href="#">Animie</Link>
                    </button>
                  </li>
                
                  <li>
                    <div className="relative flex items-center  max-sm:inline-flex">
                      <input
                        type="text"
                        placeholder="Type to search ..."
                        className="border border-gray-200 rounded-md py-1 px-2"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
