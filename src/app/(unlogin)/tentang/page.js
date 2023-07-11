"use client";
import { Tab } from "@headlessui/react";
import Prakom from "./prakom";
import Statistisi from "./statistisi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Home() {
	return (
		<>
			<div className="w-full mx-auto px-2 py-4 sm:px-0 md:mt-0 mt-2">
				<Tab.Group>
					<Tab.List className="flex max-w-xl mx-4 md:mx-auto space-x-1 rounded-xl bg-blue-900/20 p-1">
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
							Pranata Komputer
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
							Statistisi
						</Tab>
					</Tab.List>
					<Tab.Panels className="mt-2">
						<Tab.Panel className="bg-white rounded-xl">
							<div className="py-2">
								<Prakom />
							</div>
						</Tab.Panel>
						<Tab.Panel>
							<div className="py-2">
								<Statistisi />
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</>
	);
}
