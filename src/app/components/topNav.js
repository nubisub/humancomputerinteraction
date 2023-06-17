"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

export default function TopNav() {
	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		const query = e.target.search.value;
		if (query === "") return;
		router.push(`/search?query=${query}`);
	};

	return (
		<div className="md:flex justify-between items-center my-2 md:mb-8 mb-4 z-50">
			{/* Searchbar */}
			<div className="md:w-3/4 w-full">
				<form
					onSubmit={handleSubmit}
					className="relative flex items-center md:mx-0 mx-4 md:mt-0 mt-4  h-11 md:rounded-full rounded-3xl focus-within:shadow-lg bg-white overflow-hidden"
				>
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
						className="peer h-full w-full outline-none text-sm text-gray-700 pr-8"
						type="text"
						id="search"
						placeholder="Cari Sesuatu ..."
					/>
					<button
						type="submit"
						className="grid place-items-center hover:bg-blue-700 h-full w-16 cursor-pointer bg-blue-600 shadow-md text-white"
					>
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
					</button>
				</form>
			</div>

			{/* Akun dan Notifikasi */}
			<div className="md:flex hidden gap-x-4 items-center justify-center">
				{/* <Link
					href={"/auth"}
					type="button"
					className="font-semibold px-8  text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none rounded-lg text-sm py-2.5 text-center inline-flex items-center  dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
				>
					Login
				</Link> */}

				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-full bg-white  p-1 px-2 gap-x-1 pl-3 text-sm font-medium text-black hover:drop-shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
									clipRule="evenodd"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-8 h-8"
							>
								<path
									fillRule="evenodd"
									d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
									clipRule="evenodd"
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
										<Link
										href={"/auth"}
											className={`${
												active ? "bg-slate-100" : "text-gray-900"
											} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
										>
											Login
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
										href={"/auth"}
											className={`${
												active ? "bg-slate-100" : "text-gray-900"
											} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
										>
											Help
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
										href={"/tentang"}
											className={`${
												active ? "bg-slate-100" : "text-gray-900"
											} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
										>
											About
										</Link>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
}
