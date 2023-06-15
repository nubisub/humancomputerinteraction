"use client";
import { useState } from "react";
import Admin from "./Admin";
import Main from "@/app/components/main";

const navigation = [
	{ name: "Registrasi", href: "/", current: true },
	{ name: "Pranata Komputer", href: "/registrasi/prakom", current: true },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Home() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<h1 className="md:text-3xl text-2xl md:mx-0 mx-2 font-semibold md:my-3 my-4 mb-1 text-white">
				Registrasi Akun
			</h1>
			<h2 className="text-md   md:mx-0 mx-2 md:mb-8 mb-3 text-white">
				Permintaan Akun Admin Instansi
			</h2>
			{/* <Breadcrumbs props={navigation} /> */}
			<Main>
				<div className="w-full mx-auto px-0 md:mt-0 mt-2 py-4 sm:px-0">
					<Admin />
				</div>
			</Main>
		</>
	);
}
