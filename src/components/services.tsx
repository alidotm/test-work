import { FC } from "react";

const Services: FC = () => {
	return (
		<div className="my-36 max-w-screen-2xl px-4 sm:px-6 mx-auto flex justify-center items-center flex-col">
			<h2 className="font-medium text-3xl sm:text-5xl text-center max-w-screen-md">
				We provide various kind of service for you
			</h2>
			<p className="max-w-3xl text-center text-sm sm:text-lg mt-3 text-black/60">
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking at its layout.
				The point of using Lorem It is a long established fact that
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-14 mt-20 place-content-center">
				<div className="rounded-3xl drop-shadow-2xl flex justify-center items-center flex-col bg-white p-5">
					<img
						src="/smartphone.png"
						alt=""
						className="aspect-square w-36"
					/>
					<h5 className="font-semibold text-2xl text-center my-2">
						Unique App Ui
					</h5>
					<p className="text-black/60">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout.{" "}
					</p>
				</div>
				<div className="rounded-3xl drop-shadow-2xl flex justify-center items-center flex-col bg-white p-5">
					<img
						src="/dashboard.png"
						alt=""
						className="aspect-square w-36"
					/>
					<h5 className="font-semibold text-2xl text-center my-2">
						Exclient Dashboard
					</h5>
					<p className="text-black/60">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout.{" "}
					</p>
				</div>
				<div className="rounded-3xl drop-shadow-2xl flex justify-center items-center flex-col bg-white p-5">
					<img
						src="/layout.png"
						alt=""
						className="aspect-square w-36"
					/>
					<h5 className="font-semibold text-2xl text-center my-2">
						By Construction
					</h5>
					<p className="text-black/60">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
