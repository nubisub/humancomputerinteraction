"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Notification from "./notification";

export default function MobileTopNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [isNotifOpen, setIsNotifOpen] = useState();

	useEffect(() => {
		const isNotifOpen = localStorage.getItem("isMenuOpen");
		if (isNotifOpen === "false") {
			setIsNotifOpen(false);
		} else {
			setIsNotifOpen(true);
		}
		const time = localStorage.getItem("time");
		if (Date.now() > time) {
			setIsNotifOpen(true);
		}
	}, []);

	const handleShow = () => {
		setIsNotifOpen(false);
		// save to local storage for 10 second
		localStorage.setItem("isMenuOpen", false);
		let time = Date.now() + 3600000;
		localStorage.setItem("time", time);
	};

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			{/* {isNotifOpen ? (
				<div className="bg-[#2E51ED] md:hidden fixed top-0 justify-center items-center text-white text-sm font-semibold shadow-sm">
					<div className="p-4 py-2">
						Bagi JF Statistisi yang menilaikan DUPAK di BPS Pusat, harap mengisi
						link berikut ini: &nbsp;
						<a
							className="underline"
							href="https://s.bps.go.id/lapordupakstatistisi"
						>
							https://s.bps.go.id/lapordupakstatistisi
						</a>
					</div>

					<button
						id="close-notification"
						aria-label="close notification"
						className="mx-3
                absolute
                right-0 
                "
						onClick={handleShow}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			) : (
				<div></div>
			)} */}
			<nav className="md:hidden shadow-md fixed mb-36 flex-wrap overflow-hidden z-50 items-center top-0 w-full md:py-0 text-lg text-gray-700 bg-white">
				<div className="flex justify-between items-center p-4">
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
				</div>

				<div
					className={
						isMenuOpen
							? "w-full overflow-y-scroll h-0 transition-all ease-out duration-200 md:flex md:items-center md:w-auto h-52"
							: "w-full overf h-0 transition-all ease-out duration-160 md:flex md:items-center md:w-auto"
					}
					id="menu"
				>
					<ul className="pl-4 text-sm font-medium text-gray-700 md:flex md:justify-between md:pt-0 mb-2">
						<li>
							<Link
								onClick={handleClick}
								className="md:p-4 py-2 block hover:bg-slate-100 bg-opacity-20 rounded px-2 duration-300  cursor-pointer mr-4"
								href="/"
							>
								Beranda
							</Link>
						</li>
						<Disclosure className="flex gap-0 pr-8">
							{({ open }) => (
								<>
									<Disclosure.Button className="md:p-4 py-2  w-full flex items-center  hover:bg-slate-100 bg-opacity-20 rounded px-2 duration-300">
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
											className="p-2.5 flex items-center rounded px-2 duration-300  hover:bg-slate-100 cursor-pointer mr-4"
											href="/registrasi/prakom"
										>
											<span className="ml-3 ">Calon Prakom</span>
										</Link>
										<Link
											onClick={handleClick}
											className="p-2.5 flex items-center rounded px-2 duration-300 hover:bg-slate-100   cursor-pointer mr-4"
											href="/registrasi/statistisi"
										>
											<span className="ml-3 ">Calon Statistisi</span>
										</Link>
										<Link
											onClick={handleClick}
											className="p-2.5 flex items-center rounded px-2 duration-300 hover:bg-slate-100   cursor-pointer mr-4"
											href="/registrasi/admin"
										>
											<span className="ml-3 ">Admin Instansi</span>
										</Link>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="flex gap-0 mr-8">
							{({ open }) => (
								<>
									<Disclosure.Button className="md:p-4 py-2 mr-8 w-full  flex items-center  hover:bg-slate-100 bg-opacity-20 rounded px-2 duration-300 cursor-pointer ">
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
											className="p-2.5 flex items-center rounded px-2 duration-300  hover:bg-slate-100 bg-opacity-20  cursor-pointer mr-4"
											href="/peraturan/pranata-komputer"
										>
											<span className="ml-3 ">Pranata Komputer</span>
										</Link>
										<Link
											onClick={handleClick}
											className="p-2.5 flex items-center rounded px-2 duration-300  hover:bg-slate-100 cursor-pointer mr-4"
											href="/peraturan/statistisi"
										>
											<span className="ml-3 ">Statistisi</span>
										</Link>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<li>
							<Link
								onClick={handleClick}
								className="md:p-4 py-2 block  hover:bg-slate-100 bg-opacity-20 rounded px-2 duration-300 cursor-pointer mr-4"
								href="/tentang"
							>
								Tentang
							</Link>
						</li>
						<li>
							<Link
								onClick={handleClick}
								className="md:p-4 py-2 block  hover:bg-slate-100 bg-opacity-20 rounded px-2 duration-300 cursor-pointer mr-4"
								href="/auth"
							>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
