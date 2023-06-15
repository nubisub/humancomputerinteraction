import { Inter } from "next/font/google";

export const metadata = {
    title: "Registrasi Statistisi - SI Jafung | Badan Pusat Statistik",
    description: "Registrasi Statistisi",
};

export default async function PrakomLayout({ children }) {
	return <section>{children}</section>;
}