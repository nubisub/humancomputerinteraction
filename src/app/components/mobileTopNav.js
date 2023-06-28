"use client";

import { useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function MobileTopNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="md:hidden shadow-md flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-8 text-lg text-gray-700 bg-white">
			<div>
				<Link href="#">
					<Image
						src={"/logoUtama/logoSijafungv2.png"}
						width={100}
						height={100}
						alt={"logoSijafung.png"}
					/>
				</Link>
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={
					isMenuOpen
						? "hidden w-6 h-6 cursor-pointer"
						: "w-6 h-6 cursor-pointer"
				}
				onClick={handleClick}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={
					isMenuOpen
						? "w-6 h-6 cursor-pointer"
						: "hidden w-6 h-6 cursor-pointer"
				}
				onClick={handleClick}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>

			<div
				className={
					isMenuOpen
						? "w-full md:flex md:items-center md:w-auto transition-opacity duration-900 ease-in-out opacity-100"
						: "hidden w-full md:flex md:items-center md:w-auto"
				}
				id="menu"
			>
				<ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
					<li>
						<Link onClick={handleClick} className="md:p-4 py-2 block " href="/">
							Beranda
						</Link>
					</li>
					<Disclosure className="flex gap-0 ">
						{({ open }) => (
							<>
								<Disclosure.Button className="md:p-4 py-2  w-full flex items-center">
									Registrasi Akun
									<ChevronRightIcon
										className={`${
											open ? "rotate-90 transform ml-1" : ""
										} h-5 w-5  ml-1`}
									/>
								</Disclosure.Button>

								<Disclosure.Panel>
									<Link
										onClick={handleClick}
										className="p-2.5 flex items-center rounded px-2 duration-300   cursor-pointer mr-4"
										href="/registrasi/prakom"
									>
										<span className="text-[15px] ml-3 ">Calon Prakom</span>
									</Link>
									<Link
										onClick={handleClick}
										className="p-2.5 flex items-center rounded px-2 duration-300   cursor-pointer mr-4"
										href="/registrasi/statistisi"
									>
										<span className="text-[15px] ml-3 ">Calon Statistisi</span>
									</Link>
									<Link
										onClick={handleClick}
										className="p-2.5 flex items-center rounded px-2 duration-300   cursor-pointer mr-4"
										href="/registrasi/admin"
									>
										<span className="text-[15px] ml-3 ">Admin Instansi</span>
									</Link>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure className="flex gap-0">
						{({ open }) => (
							<>
								<Disclosure.Button className="md:p-4 py-2 w-full  flex items-center">
									Peraturan
									<ChevronRightIcon
										className={`${
											open ? "rotate-90 transform ml-1" : ""
										} h-5 w-5  ml-1`}
									/>
								</Disclosure.Button>

								<Disclosure.Panel>
									<Link
										onClick={handleClick}
										className="p-2.5 flex items-center rounded px-2 duration-300   cursor-pointer mr-4"
										href="/peraturan/pranata-komputer"
									>
										<span className="text-[15px] ml-3 ">Pranata Komputer</span>
									</Link>
									<Link
										onClick={handleClick}
										className="p-2.5 flex items-center rounded px-2 duration-300   cursor-pointer mr-4"
										href="/peraturan/statistisi"
									>
										<span className="text-[15px] ml-3 ">Statistisi</span>
									</Link>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<li>
						<Link
							onClick={handleClick}
							className="md:p-4 py-2 block"
							href="/tentang"
						>
							Tentang
						</Link>
					</li>
					<li>
						<Link
							onClick={handleClick}
							className="md:p-4 py-2 block"
							href="/auth"
						>
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
