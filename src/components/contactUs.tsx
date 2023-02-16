import { FC } from "react";

const Contact: FC = () => {
	return (
		<div className="bg-[#333697] relative z-50 mx-auto flex justify-between items-center text-white rounded-xl py-12 px-16 w-full max-w-7xl">
			<div>
				<h4 className="font-medium text-4xl">Contact Us</h4>
				<p className="font-light max-w-xl mt-3">
					There are many variations of passages of Lorem Ipsum but the
					majority have suffered alteration.
				</p>
			</div>
			<div className="bg-white text-black p-2 rounded-full flex-1 max-w-sm flex justify-between pl-6">
				<input
					type="email"
					placeholder="Email here"
					className="focus:outline-none"
				/>
				<button className="bg-[#333697] text-white hover:scale-105 duration-300 ease-in-out transition-transform px-9 py-3 rounded-full">
					Send
				</button>
			</div>
		</div>
	);
};

export default Contact;
