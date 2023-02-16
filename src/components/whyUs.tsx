import { FC } from "react";

const WhyUs: FC = () => {
	return (
		<div
			id="whyus"
			className="my-36 flex justify-center w-full items-center flex-col"
		>
			<div className="max-w-screen-2xl px-4 sm:px-6 mx-auto">
				{" "}
				<h2 className="font-medium text-3xl sm:text-5xl text-center max-w-screen-md">
					Why Us
				</h2>
				<p className="max-w-3xl text-center text-sm sm:text-lg mt-3 text-black/60">
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-36 w-full">
				<img
					src="/whyUsLeft.png"
					className="w-full hidden lg:block aspect-auto"
					alt=""
				/>

				<div className="flex justify-center flex-col max-w-2xl items-center mx-auto lg:mx-0 lg:items-start space-y-6 pr-4 sm:pr-6 pl-4 lg:pl-0">
					<h4 className="font-semibold text-3xl sm:text-4xl text-center lg:text-left pt-20 lg:pt-0">
						Built The App That Everyone Love.
					</h4>
					<p className="text-black/60 text-center lg:text-left">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content
						here', making it look
					</p>
					<p className="text-black/60 text-center lg:text-left">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of{" "}
					</p>
					<button className="space-x-1 bg-schema-darkBlue bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 ease-in-out font-medium rounded-2xl border-schema-darkBlue border-2 w-36 py-3">
						<span>Get More</span>
						<span>→</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
