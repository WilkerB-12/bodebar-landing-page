import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import bodebarlogo from '../public/bodebarlogo.svg';
import Carrito from '../public/Carrito.svg';
import Logoff from '../public/Logoff.svg';

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto h-40">
          <div className="w-1/3">
            <Link href="/" className="flex items-center w-1/3">
              <Image
                src={bodebarlogo}
                className="mr-3 h-6 sm:h-9"
                alt="Bodebar Logo"
              />
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <form className="hidden xl:block lg:w-1/3">
            <div className="container h-14">
              <input
                className="flex justify-center min-h-full w-full"
                type="text"
                placeholder=""
              />
            </div>
          </form>
          {/* Debo quitar el hidden para que aparezca el menu */}
          <div
            className="hidden w-full md:block md:w-auto lg:w-1/3"
            id="navbar-default"
          >
            <ul className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/products"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <p className="font-bold font-navbar">PRODUCTOS</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <p className="font-bold font-navbar">MONEDA</p>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent h-6 w-6"
                >
                  <Image src={Carrito} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent h-6 w-6"
                >
                  <Image src={Logoff} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="md:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            className="bg-navigation-red border border-gray-300 text-white sm:text-sm focus:ring-stone-500 block w-full p-2.5 dark:placeholder-gray-500 dark:text-white"
          >
            <option>WHISKY</option>
            <option>RON</option>
            <option>VINOS</option>
            <option>DESTILADOS</option>
            <option>LICORES</option>
            <option>OTROS</option>
            <option>OFERTAS</option>
          </select>
        </div>
        <ul className="hidden md:flex flex-wrap px-10 text-sm justify-between font-medium text-center bg-navigation-red text-white h-16">
          <li className="mr-2">
            <a href="#" className="inline-block p-4 hover:text-gray-400">
              WHISKY
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 hover:text-gray-400">
              RON
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 hover:text-gray-400">
              VINOS
            </a>
          </li>
          <li>
            <a className="inline-block p-4 hover:text-gray-400">DESTILADOS</a>
          </li>
          <li>
            <a className="inline-block p-4 hover:text-gray-400">LICORES</a>
          </li>
          <li>
            <a className="inline-block p-4 hover:text-gray-400">OTROS</a>
          </li>
          <li>
            <a className="inline-block p-4 hover:text-gray-400">OFERTAS</a>
          </li>
        </ul>
      </div>
    </>
  );
}
