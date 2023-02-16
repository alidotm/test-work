import { FC, useEffect, useState } from "react";
import logoSvg from "/logo.svg";
import classNames from "classnames";

//TODO:highlight what area we are in

const Header: FC = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);

	const setScrollToTrue = () => {
		if (window.scrollY > 15) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", setScrollToTrue);

		return () => {
			window.removeEventListener("scroll", setScrollToTrue);
		};
	});

	return (
		<div
			className={classNames(
				scrolled ? "bg-white" : "bg-transparent",
				"fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ease-in-out"
			)}
		>
			<header
				className={classNames(
					"max-w-screen-2xl px-4 sm:px-6 mx-auto h-20 flex items-center justify-between"
				)}
			>
				<a
					href="/"
					className="flex items-center space-x-1 text-xl font-bold"
				>
					<img src={logoSvg} className="h-7 w-7" />
					<span className="text-schema-darkBlue">Apps</span>
					<span>Market</span>
				</a>

				<ul className="hidden lg:flex items-center space-x-3">
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#landing">Home</a>
					</li>
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#services">Services</a>
					</li>
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#whyus">Why Us</a>
					</li>
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#goals">Our Goals</a>
					</li>
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#portfolio">Our Portfolio</a>
					</li>
					<li
						className={classNames(
							scrolled ? "text-black" : "text-white",
							"navLinks"
						)}
					>
						<a href="#feedback">Our Client</a>
					</li>
					<li
						className={classNames(
							scrolled
								? "bg-black text-white hover:bg-gray-700 "
								: "bg-white text-black hover:bg-gray-300 ",
							"rounded-full px-5 py-2 duration-300 ease-in-out cursor-pointer"
						)}
					>
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Header;
