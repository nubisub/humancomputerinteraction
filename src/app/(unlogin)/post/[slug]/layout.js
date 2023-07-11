import Main from "../../../components/main";
import TopNav from "@/app/components/topNav";

export const metadata = {
	title: "Posts - SI Jafung | Badan Pusat Statistik",
	description: "Sistem Informasi Jabatan Fungsional | Badan Pusat Statistik",
};

export default function TentangLayout({ children }) {
	return (
		<>
			<div className="hidden md:block">
				<TopNav />
			</div>
			<Main>{children}</Main>
		</>
	);
}
