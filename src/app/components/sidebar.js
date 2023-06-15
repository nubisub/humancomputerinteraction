"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
	const linkStyle =
		"p-2.5 flex items-center rounded px-4 duration-300 cursor-pointer ";
	const disclosureStyle = linkStyle + "justify-between";
	const currentRoute = usePathname();
	// styles for active and non-active links
	const nonActiveStyle = linkStyle + " text-gray hover:bg-gray-200";
	const activeStyle = linkStyle + " text-semibold text-white bg-[#228be6]";

	const childStyle =
		"p-2.5 ml-2 pl-2  flex items-center rounded px-4 duration-300 cursor-pointer";

	const nonActiveStyleChild = childStyle + " text-gray hover:bg-gray-200";
	const activeStyleChild =
		childStyle + " text-semibold text-white bg-[#228be6]";

	const nonActiveStyleDisclosure =
		disclosureStyle + " text-gray hover:bg-gray-200";
	const activeStyleDisclosure =
		disclosureStyle + " text-semibold text-white bg-[#228be6] ";

	return (
		<div className="md:block hidden fixed top-0 bottom-0 lg:left-0 p-2 px-3 w-[250px] overflow-y-auto text-center shadow bg-white text-gray-500 ">
			{/* Logo Sijafung BPS */}
			<Link href="/">
				<div className="text-xl">
					<div className="p-2.5 mt-2 flex items-center justify-center">
						<Image
							src={"/logoUtama/logoSijafungv2.png"}
							width={140}
							height={140}
							alt={"logoSijafung.png"}
						/>
					</div>
				</div>
			</Link>
			{/* Menu */}
			<div className="mt-8 gap-y-2 flex flex-col">
				{/* Beranda */}
				<Link href="/">
					<div className={currentRoute === "/" ? activeStyle : nonActiveStyle}>
						<Image
							src={"/logoMenu/logoBeranda.svg"}
							width={25}
							height={25}
							alt={"logoBeranda.png"}
						/>
						<span className="text-[15px] ml-3 text-inherit">Beranda</span>
					</div>
				</Link>

				{/* Registrasi Akun */}
				<Disclosure defaultOpen={
					currentRoute === "/registrasi/prakom" ||  currentRoute === "/registrasi/statistisi" || currentRoute === "/registrasi/admin" ? true : false
				}
					
					className="flex gap-0">
					{({ open }) => (
						<>
							<Disclosure.Button
								className={
									currentRoute === "/registrasi/prakom"
										? activeStyleDisclosure
										: currentRoute === "/registrasi/statistisi"
										? activeStyleDisclosure
										: currentRoute === "/registrasi/admin"
										? activeStyleDisclosure
										: nonActiveStyleDisclosure
								}
							>
								<div className="flex items-center">
									<Image
										src={"/logoMenu/logoRegistrasi.svg"}
										width={25}
										height={25}
										alt={"logoBeranda.png"}
									/>
									<span className="text-[15px] ml-3 ">Registrasi Akun</span>
								</div>
								<ChevronRightIcon
									className={`${
										open ? "rotate-90 transform" : ""
									} h-5 w-5`}
								/>
							</Disclosure.Button>

							<Disclosure.Panel
								className={"border-l ml-7 border-slate-400 border-opacity-50 "}
							>
								<Link
									className={
										currentRoute === "/registrasi/prakom"
											? activeStyleChild
											: nonActiveStyleChild
									}
									href="/registrasi/prakom"
								>
									<span className="text-[15px] ml-3 ">Calon Prakom</span>
								</Link>
								<Link
									className={
										currentRoute === "/registrasi/statistisi"
											? activeStyleChild
											: nonActiveStyleChild
									}
									href="/registrasi/statistisi"
								>
									<span className="text-[15px] ml-3 ">Calon Statistisi</span>
								</Link>
								<Link
									className={
										currentRoute === "/registrasi/admin"
											? activeStyleChild
											: nonActiveStyleChild
									}
									href="/registrasi/admin"
								>
									<span className="text-[15px] ml-3 ">Admin Instansi</span>
								</Link>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				{/* Peraturan*/}
				<Disclosure
					defaultOpen={
						currentRoute === "/peraturan/pranata-komputer" ||
						currentRoute === "/peraturan/statistisi"
							? true
							: false
					}
					
				className="flex gap-0">
					{({ open }) => (
						<>
							<Disclosure.Button
								className={
									currentRoute === "/peraturan/pranata-komputer"
										? activeStyleDisclosure
										: currentRoute === "/peraturan/statistisi"
										? activeStyleDisclosure
										: nonActiveStyleDisclosure
								}
							>
								<div className="flex items-center">
									<Image
										src={"/logoMenu/logoPeraturan.svg"}
										width={25}
										height={25}
										alt={"logoBeranda.png"}
									/>
									<span className="text-[15px] ml-3 ">Peraturan</span>
								</div>
								<ChevronRightIcon
									className={`${
										open ? "rotate-90 transform" : ""
									} h-5 w-5`}
								/>
							</Disclosure.Button>

							<Disclosure.Panel
								className={"border-l ml-7 border-slate-400 border-opacity-50 "}
							>
								<Link
									className={
										currentRoute === "/peraturan/pranata-komputer"
											? activeStyleChild
											: nonActiveStyleChild
									}
									href="/peraturan/pranata-komputer"
								>
									<span className="text-[15px] ml-3 ">Pranata Komputer</span>
								</Link>
								<Link
									className={
										currentRoute === "/peraturan/statistisi"
											? activeStyleChild
											: nonActiveStyleChild
									}
									href="/peraturan/statistisi"
								>
									<span className="text-[15px] ml-3 ">Statistisi</span>
								</Link>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* Tentang */}
				<Link href="/tentang">
					<div
						className={
							currentRoute === "/tentang" ? activeStyle : nonActiveStyle
						}
					>
						<Image
							src={"/logoMenu/logoTentang.svg"}
							width={25}
							height={25}
							alt={"logoBeranda.png"}
						/>
						<span className="text-[15px] ml-3 ">Tentang</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
