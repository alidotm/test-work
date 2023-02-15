import { useState } from "react";
import Backgroud from "./components/bg";
import Header from "./components/header";
import Landing from "./components/landing";
import Loading from "./components/loading";
import Services from "./components/services";

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

			<main className="max-w-screen-2xl px-4 sm:px-6 mx-auto">
				{/* Landing */}
				<Landing />

				{/* services */}
				<Services />
			</main>
		</div>
	);
}

export default App;
