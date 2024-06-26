"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image"

const links = [
    {
        id: 1,
        link: "home",
    },
    {
        id: 2,
        link: "gallery",
    },
    {
        id: 3,
        link: "circulars",
    },
    {
        id: 4,
        link: "contact",
    },
    {
        id:5,
        link:"staff"
    }
  
];
const hidelinks = [
    {
        id: 1,
        link: "home",
    },
    {
        id: 2,
        link: "gallery",
    },
    {
        id: 3,
        link: "circulars",
    },
    {
        id: 4,
        link: "contact",
    },
    {
        id:5,
        link:"staff"
    }
 
];

export default function Navbar() {
    const [nav, setNav] = useState(false);
    return (
        <div className="nvv navHeader flex justify-between items-center w-full h-20 px-4 text-white bg-white nav shadow-2xl">
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <Link href='/'>
                    <Image width={450} height={250}    src="/assets/logo.png" alt="logo"/>
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex mr-8">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
                    >
                        <Link href={link==="home" ? "/" :link}>{link}</Link>
                    </li>
                ))}
            </ul>
            
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer  pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white from-black to-gray-800 text-gray-500">
                    <div>
                <h1 className="text-5xl font-signature ml-2">
                    <Link href='/'>
                    <Image width={450} height={250}    src="/assets/logo.png" alt="logo"/>
                    </Link>
                </h1>
            </div>
                    {hidelinks.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer hover:text-black capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link==="home" ? "/" :link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}