"use client"
import { useScrollPosition } from "@/hooks/useScroll";
import React from "react";

const navMenu = [
  {
    name: "Nosotros",
    url: "#",
  },
  {
    name: "Chatarra",
    url: "#",
  },
  {
    name: "Hierro",
    url: "#",
  },
  {
    name: "Novedades",
    url: "#",
  },
  {
    name: "Sucursales",
    url: "#",
  },
  {
    name: "Contacto",
    url: "#",
  },
];

export default function Header() {

  const scroll = useScrollPosition();
  
  return (
    <nav className={`transition-colors duration-500  bg-cover bg-center fixed w-full top-0 ${scroll?"bg-white":""}`}>
      <div className="flex justify-between p-7">
        <div>
          <a href="#">
            <img
            className="color-white"
              src={`${scroll?"https://www.censima.com.ar/img/logo_menu_scroll.svg":"https://www.censima.com.ar/img/logo_header.svg"}`}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul className="divide-x-2 divide-green-600">
            {navMenu.map((item, index) => (
              <li key={index} className="inline-block">
                <a
                  className={`px-5  inline-block  hover:bg-green-600  py-1 transition-all duration-500  ${scroll?"text-green-500 hover:bg-green-600 hover:text-white ":"text-white hover:text-gray-300"} `}
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// hover:scale-150