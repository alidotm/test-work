import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="bg-[#EBEBF8] -z-10 -translate-y-16">
			<div className="py-36 max-w-screen-xl mx-auto px-4 sm:px-6 gap-14 md:gap-0 md:flex-row flex flex-col justify-between">
				<a href="/" className="font-bold text-3xl">
					Apps Market
				</a>

				<div>
					<p className="font-medium text-lg mb-4">Links</p>
					<ul className="space-y-1">
						<li className="footerLink">Home</li>
						<li className="footerLink">Pricing</li>
						<li className="footerLink">Download</li>
						<li className="footerLink">About</li>
						<li className="footerLink">Support</li>
					</ul>
				</div>
				<div>
					<p className="font-medium text-lg mb-4">Support</p>
					<ul className="space-y-1">
						<li className="footerLink">FAQ</li>
						<li className="footerLink">How it</li>
						<li className="footerLink">Contact</li>
						<li className="footerLink">Reporting</li>
						<li className="footerLink">Dummy</li>
					</ul>
				</div>
				<div>
					<p className="font-medium text-lg mb-4">Contact</p>
					<ul className="space-y-1">
						<li className="text-black/50 text-xl">+12334234234</li>
						<li className="text-black/50 text-xl">
							TestEmail@email.com
						</li>
						<li className="text-black/50 text-xl">Your City</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
