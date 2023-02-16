import { FC } from "react";
import { BarLoader } from "react-spinners";

const Loading: FC<{ loading: boolean }> = ({ loading }) => {
	return (
		<div className="fixed flex justify-center items-center flex-col space-y-3 bg-white z-[9999] top-0 left-0 right-0 bottom-0 w-screen h-screen">
			<p className="font-bold text-2xl">Loading..</p>
			<BarLoader
				color="black"
				loading={loading}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loading;
