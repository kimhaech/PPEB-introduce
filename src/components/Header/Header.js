import React from 'react';
import { ReactComponent as Logo } from '../../static/svg/logo.svg';

function Header() {
    return (
        <header className="text-gray-700 body-font border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    href="/"
                >
                    <Logo className="w-10 h-10" />
                    {/* <span className="ml-3 text-xl">PnP</span> */}
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">ABOUT</a>
                    <a className="mr-5 hover:text-gray-900">ACTIVITY</a>
                    <a className="mr-5 hover:text-gray-900">MEMBERS</a>
                    <a className="mr-5 hover:text-gray-900">RECRUIT</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
