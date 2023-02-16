import { useState } from "react";
import Backgroud from "./components/bg";
import Contact from "./components/contactUs";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import Loading from "./components/loading";
import OurGoals from "./components/ourGoals";
import Portfolio from "./components/portfolio";
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
			{loading && <Loading loading={loading} />}

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

				{/* Our goals */}
				<OurGoals />

				{/* Portolio */}
				<Portfolio />

				{/* Feedback */}
				<Feedback />

				{/* Contact us */}
				<Contact />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
