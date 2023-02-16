import { FC } from "react";

const Portfolio: FC = () => {
	return (
		<div
			id="portfolio"
			className="my-36 px-4 sm:px-6 flex justify-center items-center flex-col"
		>
			<div className="max-w-screen-2xl mx-auto">
				<h2 className="font-medium text-3xl capitalize sm:text-5xl text-center max-w-screen-md">
					our portfolio
				</h2>
				<p className="max-w-3xl text-center text-sm sm:text-lg mt-3 text-black/60">
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem It is a long
					established fact that
				</p>
			</div>

			<div className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center grid ">
				<img src="/iphone1.png" alt="" />
				<img src="/iphone2.png" alt="" />
				<img src="/iphone3.png" alt="" />
				<img src="/iphone4.png" alt="" />
			</div>
		</div>
	);
};

export default Portfolio;
