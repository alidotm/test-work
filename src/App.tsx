import { useState } from "react";
import Backgroud from "./components/bg";
import Header from "./components/header";
import Landing from "./components/landing";
import Loading from "./components/loading";
import Services from "./components/services";
import WhyUs from "./components/whyUs";

function App() {
	//loading state
	const [loading, setLoading] = useState<boolean>(true);

	window.addEventListener("load", () => {
		setLoading(false);
	});

	return (
		<div className="App">
			{/* loading */}
			{loading && <Loading />}

			{/* Background */}
			<Backgroud />

			{/* Header */}
			<Header />

			<main className="">
				{/* Landing */}
				<Landing />

				{/* services */}
				<Services />

				{/* Why us */}
				<WhyUs />
			</main>
		</div>
	);
}

export default App;
