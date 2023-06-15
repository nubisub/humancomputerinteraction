import { Inter } from "next/font/google";

export const metadata = {
    title: "Registrasi Pranata Komputer - SI Jafung | Badan Pusat Statistik",
    description: "Registrasi Pranata Komputer",
};

export default async function PrakomLayout({ children }) {
	return <section>{children}</section>;
}