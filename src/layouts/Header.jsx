"use client";

import { Button, Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <Navbar rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          Yoga Rizky Putra
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <HashLink smooth to={"/#sosmed"}>
          <Button className="hidden lg:block bg-blue-500 rounded-full">
            My Contact
          </Button>
        </HashLink>
        {/* <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <HashLink smooth to="/#home">
            <p>Home</p>
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="/#about">
            Tentang Saya
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="/#portofolio">
            Projek Saya
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="/#sosmed">
            Sosial Media
          </HashLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
