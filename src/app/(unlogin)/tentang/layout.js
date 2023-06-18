import Main from "../../components/main";
import Akun from "../../components/akun";

export const metadata = {
	title: "Tentang - SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function TentangLayout({ pageProps, children }) {
	return (
		<>
			<div className="flex justify-between">
				<h1 className="md:text-3xl text-2xl md:mx-0 mx-2 font-semibold md:my-3 my-4 mb-1 text-white">
					Tentang
				</h1>
				<Akun />
			</div>

			<h2 className="text-md   md:mx-0 mx-2 md:mb-8 mb-3 text-white">
				Tentang Jabatan Fungsional
			</h2>
			<Main>{children}</Main>
		</>
	);
}
