import { Inter } from "next/font/google";

export const metadata = {
    title: "Registrasi Admin Instansi - SI Jafung | Badan Pusat Statistik",
    description: "Registrasi Admin Instansi",
};

export default async function PrakomLayout({ children }) {
	return <section>{children}</section>;
}