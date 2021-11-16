import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {  MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navigation = [
  { name: 'Search', href: '/', current: false, loggedIn: [true, false] },
  { name: 'About', href: '/about', current: false, loggedIn: [true, false] },
  { name: 'Our Team', href: '/team', current: false, loggedIn: [true, false] },
  { name: 'Sign Up', href: '/signup', current: false, loggedIn: [false] },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  // checks if a user is logged in to conditional render links
  useEffect(() => {
    (async function () {
      const userLoggedIn = props.user ? true : false;
      setLoggedIn(userLoggedIn);
    })();
  }, [props.user]);

  return (
    <Disclosure as="nav" className="bg-primary shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-montserrat-semibold text-white ">
            <div className="relative flex justify-end h-16 mr-10">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mr-2">
                <div className="flex-shrink-0 flex items-center mr-14">
                  <Link to="/">
                    <p className="logo ">Connect.US</p>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.filter(item => item.loggedIn.includes(loggedIn)).map((item, idx) => (
                        <a key={idx}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-primary text-white items-center' :  'border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                </div>
              </div>

              {loggedIn ? (
                <div className="absolute  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative ">
                    {({ open }) => (
                      <>
                        <div>
                        <Menu.Button className="bg-gray-50 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                            className="h-8 w-8 bg-blue-100 rounded-full ring ring-blue-100"
                            src="../images/DefaultUserImage.png"
                            alt="Login"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className=" origin-top-right absolute mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/profile"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/"
                                  onClick={props.handleLogout}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <a href="/login">
                  <button  className="bg-gray-50 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Login</span>
                      <img
                        className="h-8 w-8 bg-blue-100 rounded-full ring ring-blue-100"
                        src="../images/DefaultUserImage.png"
                        alt="Login"
                      />
                    </button>
                  
                  </a>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="/"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Search
              </a>
              <a
                href="/about"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>
              <a
                href="/team"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Our Team
              </a>
              <a
                href="/profile"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Profile
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
