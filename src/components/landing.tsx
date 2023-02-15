import { FC } from "react";
import downloadIcon from "/download.svg";
import rightArrowIcon from "/arrow.svg";
import iphoneMiddle from "/iphoneMiddle.png";
import iphoneLeft from "/iphoneLeft.png";
import iphoneRight from "/iphoneRight.png";

const Landing: FC = () => {
	return (
		<div className="text-white  pt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen">
			<div className="mt-36">
				<h1 className="text-5xl md:text-6xl font-semibold">
					We Create Applications With Excellent Technology.
				</h1>
				<p className="mt-6 max-w-xl">
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to
					using 'Content here, content here', making it look like
					readable English.
				</p>
				<div className="flex items-center space-x-8 mt-8">
					<button className="bg-white shadow-xl hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black px-7 py-5 flex items-center space-x-1 rounded-2xl font-medium">
						<span>Download Now</span>
						<img src={downloadIcon} alt="" className="w-4 h-4" />
					</button>

					<button className="flex text-white hover:text-gray-300 ease-in-out duration-300 transition-colors items-center space-x-1">
						<span>Explore More</span>
						<img
							src={rightArrowIcon}
							alt=""
							className="h-6 w-auto"
						/>
					</button>
				</div>
			</div>
			<div className="mt-10 lg:flex justify-between items-start hidden">
				<div className="flex items-center h-fit justify-between w-full">
					<img
						src={iphoneLeft}
						alt=""
						className="h-auto scale-[85%]"
					/>
					<img
						src={iphoneMiddle}
						alt=""
						className="h-auto scale-[85%]"
					/>
					<img
						src={iphoneRight}
						alt=""
						className="h-auto scale-[85%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
