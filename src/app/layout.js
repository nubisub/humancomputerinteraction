import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function RootLayout({ children }) {



	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <MobileTopNav /> */}
				<Sidebar />
				<main className="md:absolute md:w-[calc(100vw-267px)] w-screen box-border md:px-20 pt-5 left-[250px]">
					<>{children}</>
				</main>
			</body>
		</html>
	);
}
