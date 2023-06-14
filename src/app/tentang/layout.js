import Main from "../components/main";


export const metadata = {
    title: "Tentang - SI Jafung | Badan Pusat Statistik",
    description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function TentangLayout({ children }) {
	return (
		<>
			<h1 className="text-3xl my-3 text-white">Tentang</h1>
			<Main>{children}</Main>
		</>
	);
}
