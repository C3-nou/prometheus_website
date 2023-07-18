"use client";
import Image from "next/image";
import config from "./config.json"
import { Navbar, Avatar, Dropdown } from "flowbite-react";

function Header() {
  return (
    <Navbar
    fluid
    className="bg-black-prom"
  >
    <Navbar.Brand href="https://flowbite-react.com">
    <Image
              src={config.image.src}
              alt={config.image.alt}
              width={180}
              height={37}
              priority
            />
    </Navbar.Brand>
    <div className="flex">
    {/* <Dropdown
          inline
          label={"En"}
        >
          <Dropdown.Item>
            {config.languages.en}
          </Dropdown.Item>
          <Dropdown.Item>
            {config.languages.es}
          </Dropdown.Item>
          <Dropdown.Item>
            {config.languages.pt}
          </Dropdown.Item>
        </Dropdown> */}
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" className="text-white hover:bg-gray-middle">
        {config.options.start}
      </Navbar.Link>
      <Navbar.Link href="#" className="text-white hover:bg-gray-middle">
        {config.options.services}
      </Navbar.Link>
      <Navbar.Link href="#" className="text-white hover:bg-gray-middle">
        {config.options.pricing}
      </Navbar.Link>
      <Navbar.Link href="#" className="text-white hover:bg-gray-middle">
        {config.options.partners}
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;