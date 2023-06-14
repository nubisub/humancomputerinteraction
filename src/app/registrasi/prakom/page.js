"use client";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import BPS from "./BPS";
import NonBPS from "./NonBPS";
import Breadcrumbs from "./Breadcrumbs";

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
			<h1 className="text-3xl my-3 text-white">
				Permintaan Akun Calon Pranata Komputer
			</h1>
			<Breadcrumbs props={navigation} />
			<div className="flex flex-col bg-white px-16 py-8 rounded-lg my-4 shadow-lg">
				<div className="w-full mx-auto px-2 py-4 sm:px-0">
					<Tab.Group>
						<Tab.List className="flex max-w-xl mx-auto space-x-1 rounded-xl bg-blue-900/20 p-1">
							<Tab
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white shadow font-semibold ring-2 ring-opacity-60 ring-offset-2 ring-offset-blue-400"
											: "text-blue-100 hover:bg-white/[0.2] hover:text-gray-900"
									)
								}
							>
								Registrasi Calon Prakom Non-BPS
							</Tab>

							<Tab
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white shadow font-semibold ring-2 ring-opacity-60 ring-offset-2 ring-offset-blue-400"
											: "text-blue-100 hover:bg-white/[0.2] hover:text-gray-900"
									)
								}
							>
								Registrasi Calon Prakom BPS
							</Tab>
						</Tab.List>
						<Tab.Panels className="mt-2">
							<Tab.Panel className="bg-white rounded-xl">
								<div className="py-2">
									<NonBPS />
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="py-2">
									<BPS />
								</div>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</>
	);
}
