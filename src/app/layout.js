import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });
import MobileTopNav from "./components/mobileTopNav";

export const metadata = {
	title: "SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MobileTopNav />
				<Sidebar />
				<main className="md:absolute md:w-[calc(100vw-267px)] w-screen box-border md:pt-5 p-1 px-2 pt-0.5 left-[250px]">
					<div className="md:mx-20 md:mb-24 mb-4">{children}</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
