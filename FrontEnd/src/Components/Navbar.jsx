/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Transactions', href: '/transactions' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subtituteClass = `flex h-9 items-center justify-between ${
    mobileMenuOpen ? 'hidden' : 'block'
  }`;

  return (
    <div className="sticky top-0 z-50 bg-white p-5">
      <div className="px-6 lg:px-8">
        <nav className={subtituteClass} aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8" src={logo} />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-center ">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="font-semibold text-gray-900 hover:text-gray-900 "
                >
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-end">
            <Link
              to="/login"
              className="inline-block rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </Link>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="z-100 fixed inset-0 mt-8 overflow-y-auto bg-white px-6 py-6 md:hidden"
          >
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <img className="h-8" src={logo} />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="-my-6 mt-6 flow-root divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <ul>
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Log in
                </Link>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
