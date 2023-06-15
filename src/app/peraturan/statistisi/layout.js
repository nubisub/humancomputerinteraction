import Main from "../../components/main";

export const metadata = {
	title: "Peraturan Statistisi - SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function PeraturanLayout({ children }) {
	return (
		<>
			<h1 className="md:text-3xl text-2xl md:mx-0 mx-2 font-semibold md:my-3 my-4 mb-1 text-white">
				Peraturan
			</h1>
			<h2 className="text-md   md:mx-0 mx-2 md:mb-8 mb-3 text-white">
				Peraturan Jabatan Fungsional Statistisi
			</h2>
			<Main>{children}</Main>
		</>
	);
}
