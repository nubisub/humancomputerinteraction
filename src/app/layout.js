import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });
import MobileTopNav from "./components/mobileTopNav";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";
import Notification from "./components/notification";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import AuthProvider from "./components/AuthProvider";

export const metadata = {
	title: "SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta
					property="twitter:image"
					content="https://sijafung-bps.vercel.app/og.png"
				></meta>
				<meta property="twitter:card" content="summary"></meta>
				<meta
					property="twitter:title"
					content="SI Jafung | Badan Pusat Statistik"
				></meta>
				<meta
					property="twitter:description"
					content="Sistem Informasi Jabatan Fungsional Badan Pusat Statistik"
				></meta>
				<meta
					name="google-site-verification"
					content="vnO5vJ7xtkstbtohyNEjkJqfPzwrG7gXaHet2-dk25E"
				/>
				<meta
					property="og:image"
					content="https://sijafung-bps.vercel.app/og.png"
				></meta>
				<meta
					property="og:title"
					content="SI Jafung | Badan Pusat Statistik"
				></meta>
				<meta
					property="og:description"
					content="Sistem Informasi Jabatan Fungsional Badan Pusat Statistik"
				/>

				<meta
					property="og:image"
					content="https://sijafung-bps.vercel.app/og.png"
				></meta>
				<meta
					property="og:title"
					content="SI Jafung | Badan Pusat Statistik"
				></meta>
				<meta
					property="og:description"
					content="Sistem Informasi Jabatan Fungsional Badan Pusat Statistik"
				/>
				<meta
					property="og:url"
					content="https://sijafung-bps.vercel.app/"
				></meta>
			</head>
			<body className={inter.className}>
				<NextTopLoader showSpinner={false} color="#2299DD" />
				<Notification />
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
