import Main from "../../components/main";

export const metadata = {
	title: "Posts - SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function TentangLayout({ children }) {
	return (
		<>
			<Main>{children}</Main>
		</>
	);
}
