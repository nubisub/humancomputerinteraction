"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export default function Sidebar() {
	return (
		<div className="md:block hidden fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center shadow bg-white text-gray-500 ">
			{/* Logo Sijafung BPS */}
			<Link href="/">
				<div className="text-xl">
					<div className="p-2.5 mt-2 flex items-center justify-center">
						<Image
							src={"/logoUtama/logoSijafung.png"}
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
					<div className="p-2.5 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
						<Image
							src={"/logoMenu/logoBeranda.svg"}
							width={25}
							height={25}
							alt={"logoBeranda.png"}
						/>
						<span className="text-[15px] ml-3 ">Beranda</span>
					</div>
				</Link>

				{/* Registrasi Akun */}
				<Disclosure className="flex gap-0">
					{({ open }) => (
						<>
							<Disclosure.Button className="p-2.5 flex justify-between items-center rounded px-4 gap-0 duration-300 cursor-pointer hover:bg-gray-200">
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
									} h-5 w-5 text-purple-500`}
								/>
							</Disclosure.Button>

							<Disclosure.Panel>
								<Link
									className="p-2.5 ml-4  flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 pl-6 mr-4"
									href="/registrasi/prakom"
								>
									<span className="text-[15px] ml-3 ">Calon Prakom</span>
								</Link>
								<Link
									className="p-2.5 ml-4  flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 pl-6 mr-4"
									href="/registrasi/statistisi"
								>
									<span className="text-[15px] ml-3 ">Calon Statistisi</span>
								</Link>
								<Link
									className="p-2.5 ml-4  flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 pl-6 mr-4"
									href="/registrasi/admin"
								>
									<span className="text-[15px] ml-3 ">Admin Instansi</span>
								</Link>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				
				{/* Peraturan */}
				<Link href="/peraturan">
					<div className="p-2.5 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
						<Image
							src={"/logoMenu/logoPeraturan.svg"}
							width={25}
							height={25}
							alt={"logoBeranda.png"}
						/>
						<span className="text-[15px] ml-3 ">Peraturan</span>
					</div>
				</Link>
				{/* Tentang */}
				<Link href="/tentang">
					<div className="p-2.5 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
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
