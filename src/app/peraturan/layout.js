import Main from "../components/main";


export const metadata = {
    title: "Peraturan - SI Jafung | Badan Pusat Statistik",
    description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function PeraturanLayout({ children }) {
	return (
		<>
			<h1 className="text-3xl my-3 text-white">Peraturan</h1>
			<Main>{children}</Main>
		</>
	);
}
