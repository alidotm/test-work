import { FC } from "react";

const OurGoals: FC = () => {
	return (
		<div className="my-36 max-w-screen-2xl px-4 sm:px-6  mx-auto flex justify-center items-center flex-col">
			<h2 className="font-medium text-3xl capitalize leading-snug sm:leading-snug sm:text-5xl text-center max-w-screen-md">
				we completed 1200+ projects yearly successfully & counting
			</h2>
			<p className="max-w-3xl text-center text-sm leading-snug sm:leading-snug sm:text-lg mt-3 text-black/60">
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking at its layout.
				The point of using Lorem It is a long established fact that
			</p>

			<div className="grid sm:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-6 mt-14">
				<div className="flex items-center space-x-3 drop-shadow-2xl bg-white p-7 rounded-l-full">
					<img
						src="/tickBorder.svg"
						alt=""
						className="aspect-square w-12"
					/>
					<span className="text-schema-darkBlue flex flex-col">
						<span className="font-semibold text-3xl">100+</span>
						<span className="font-medium text-lg">
							Projects Completed
						</span>
					</span>
				</div>
				<div className="flex items-center space-x-3 bg-white p-7">
					<img
						src="/tickBox.svg"
						alt=""
						className="aspect-square w-12"
					/>
					<span className="text-schema-darkBlue flex flex-col">
						<span className="font-semibold text-3xl">100+</span>
						<span className="font-medium text-lg">
							Active Projects
						</span>
					</span>
				</div>
				<div className="flex items-center space-x-3 bg-white p-7">
					<img
						src="/tickBorder.svg"
						alt=""
						className="aspect-square w-12"
					/>
					<span className="text-schema-darkBlue flex flex-col">
						<span className="font-semibold text-3xl">90+</span>
						<span className="font-medium text-lg">
							Client Satisfied
						</span>
					</span>
				</div>
				<div className="flex items-center space-x-3 bg-white p-7">
					<img
						src="/tickBorder.svg"
						alt=""
						className="aspect-square w-12"
					/>
					<span className="text-schema-darkBlue flex flex-col">
						<span className="font-semibold text-3xl">56+</span>
						<span className="font-medium text-lg">
							Country Available
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default OurGoals;
