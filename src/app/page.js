"use client";

import Image from "next/image";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { EditIcon } from "@heroicons/react/outline";
import { DuplicateIcon } from "@heroicons/react/outline";

export default function Home() {
	return (
		<main className="absolute min-w-[calc(100vw-250px)] min-h-screen left-[250px]">
			<div className="flex justify-between items-center border-b border-gray-50 border-opacity-20 p-12 py-4">
				{/* Searchbar */}
				<div className="">
					<div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
						<div className="grid place-items-center h-full w-12 ml-2 text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>

						<input
							className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
							type="text"
							id="search"
							placeholder="Cari Sesuatu ..."
						/>
					</div>
				</div>

				{/* Akun dan Notifikasi */}
				<div className="flex gap-x-4">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute overflow-y-scroll max-h-[400px] right-0 mt-2 min-w-[450px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div>
									<div className="flex justify-between items-center p-4">
										<span className="text-sm">
											You have <b>13</b> notifications.
										</span>
									</div>
									<Menu.Item className="p-4 border-b">
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												<h2 className="font-semibold">John Snow</h2>
												<span className="text-gray-500 text-left">
													Membuat artikel yang berjudul Hasil Uji Kompetensi
													Jabatan Fungsional Statistisi dan Pranata Komputer
													periode Juni 2022
												</span>
											</button>
										)}
									</Menu.Item>
									<Menu.Item className="p-4 border-b">
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												<h2 className="font-semibold">John Snow</h2>
												<span className="text-gray-500 text-left">
													Membuat artikel yang berjudul Hasil Uji Kompetensi
													Jabatan Fungsional Statistisi dan Pranata Komputer
													periode Juni 2022
												</span>
											</button>
										)}
									</Menu.Item>
									<Menu.Item className="p-4 border-b">
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												<h2 className="font-semibold">John Snow</h2>
												<span className="text-gray-500 text-left">
													Membuat artikel yang berjudul Hasil Uji Kompetensi
													Jabatan Fungsional Statistisi dan Pranata Komputer
													periode Juni 2022
												</span>
											</button>
										)}
									</Menu.Item>
									<Menu.Item className="p-4 border-b">
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												<h2 className="font-semibold">John Snow</h2>
												<span className="text-gray-500 text-left">
													Membuat artikel yang berjudul Hasil Uji Kompetensi
													Jabatan Fungsional Statistisi dan Pranata Komputer
													periode Juni 2022
												</span>
											</button>
										)}
									</Menu.Item>
								</div>
								<div className="px-1 py-1"></div>
							</Menu.Items>
						</Transition>
					</Menu>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-5 h-5"
								>
									<path
										fill-rule="evenodd"
										d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
										clip-rule="evenodd"
									/>
								</svg>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												My Profile
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												Setting
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												Activity
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-slate-100" : "text-gray-900"
												} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
											>
												Logout
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
			<div className="p-10 w-full">
				<p className="text-wrap">
					The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				</p>
				<p className="text-wrap">
					The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				</p>
				<p className="text-wrap">
					The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				</p>
				<p className="text-wrap">
					The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				</p>
				<p className="text-wrap">
					The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				</p>
			</div>
		</main>
	);
}
