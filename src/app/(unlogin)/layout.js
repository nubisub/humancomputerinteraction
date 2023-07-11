import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import MobileTopNav from "../components/mobileTopNav";

export default function RootLayout({ children }) {
	return (
		<>
			<MobileTopNav />
			<Sidebar />
			<main className="md:absolute md:mt-0 mt-[56px] md:w-[calc(100vw-267px)] w-screen box-border md:pt-5 p-1 px-2 md:px-0 pt-0.5 left-[250px]">
				<div className="md:mx-20 md:mb-24 mb-4">{children}</div>
				<Footer />
			</main>
		</>
	);
}
