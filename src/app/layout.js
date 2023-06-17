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
			<head>
				<meta
					name="google-site-verification"
					content="vnO5vJ7xtkstbtohyNEjkJqfPzwrG7gXaHet2-dk25E"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
