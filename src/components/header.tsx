import { FC } from "react";
import logoSvg from "/logo.svg";

//TODO:highlight what area we are in

const Header: FC = () => {
	return (
		<header className="fixed w-full z-50 max-w-screen-2xl px-4 sm:px-6 top-0 left-0 right-0 mx-auto h-20 flex items-center justify-between">
			<a
				href="/"
				className="flex items-center space-x-1 text-xl font-bold"
			>
				<img src={logoSvg} className="h-7 w-7" />
				<span className="text-schema-darkBlue">Apps</span>
				<span>Market</span>
			</a>

			<ul className="hidden lg:flex items-center space-x-3">
				<li className="navLinks border-b-4 border-schema-darkBlue">
					Home
				</li>
				<li className="navLinks">Services</li>
				<li className="navLinks">Why Us</li>
				<li className="navLinks">Our Goals</li>
				<li className="navLinks">Our Portfolio</li>
				<li className="navLinks">Our Client</li>
				<li className="bg-white rounded-full px-5 py-2 hover:bg-gray-300 duration-300 ease-in-out cursor-pointer">
					Contact Us
				</li>
			</ul>
		</header>
	);
};

export default Header;
