import { FC } from "react";

const Feedback: FC = () => {
	return (
		<div className="my-36 max-w-screen-xl px-4 sm:px-6 mx-auto flex justify-center items-start flex-col">
			<div className="flex justify-between flex-col md:flex-row w-full">
				<div>
					<h2 className="font-medium capitalize text-3xl sm:text-5xl text-left max-w-screen-md">
						our clients feedback
					</h2>
					<p className="max-w-3xl text-left text-sm sm:text-lg mt-3 text-black/60">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem It is a
						long established fact that
					</p>
				</div>
				<button className="bg-gray-100  mt-10 md:mt-0 hover:bg-gray-200 duration-300 ease-in-out rounded-2xl px-6 h-14 space-x-2 font-medium">
					<span>Read More</span>
					<span>→</span>
				</button>
			</div>

			<div className="bg-[#EFEFFE] w-full flex md:flex-row mt-14 flex-col">
				<img
					src="/person.png"
					alt=""
					className="h-96 w-auto object-cover"
				/>
				<div className="p-20 flex flex-col justify-center">
					<p className="text-lg font-light">
						"Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo modi tem."
					</p>
					<p className="font-semibold ">riad isalm</p>
					<p className="text-sm">
						product manager.{" "}
						<span className="text-schema-darkBlue font-medium">
							@pixbay
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
