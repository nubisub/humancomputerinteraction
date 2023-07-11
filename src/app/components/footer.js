import Link from "next/link";
const getYear = () => {
	return new Date().getFullYear();
};

export default function Footer() {
	return (
		<footer className="bg-white shadow-sm w-full md:absolute md:block hidden md:bottom-0 mt-8 ">
			<div className="w-full mx-auto max-w-screen-xl p-4 px-6 md:flex md:items-center md:justify-between ">
				<span className="text-sm text-gray-600 sm:text-center">
					© {getYear()}{" "}
					<Link href="/" className="hover:underline">
						Kelompok 1™
					</Link>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
					<li>
						App Version: v1.1.1 Developed with &#128149; by Kelompok 1 IMK SETIS
					</li>
				</ul>
			</div>
		</footer>
	);
}
