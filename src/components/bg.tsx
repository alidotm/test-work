import { FC } from "react";
import bgColorImage from "/bgColor.svg";
import bgImage from "/bgImage.webp";
import bgTransparentColorImage from "/bgTransparentColor.svg";

const Backgroud: FC = () => {
	return (
		<div className="select-none absolute top-0 left-0 right-0 pointer-events-none w-full h-full -z-10">
			<img
				src={bgImage}
				className="-z-20 2xl:h-auto h-[90%] w-full object-cover absolute top-0 left-0 right-0"
			/>
			<img
				src={bgTransparentColorImage}
				className="-z-20 2xl:h-auto h-[90%] w-full object-cover absolute top-0 left-0 right-0"
			/>
			<img
				src={bgColorImage}
				className="-z-30 w-full h-full object-cover absolute top-0 left-0 right-0"
			/>
		</div>
	);
};

export default Backgroud;
