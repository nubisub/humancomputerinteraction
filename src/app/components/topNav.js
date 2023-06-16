'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopNav() {

const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		const query = e.target.search.value;
		router.push(`/search?query=${query}`);
	};

	return (
		<div className="md:flex justify-between items-center my-2 md:mb-8 mb-4 z-50">
			{/* Searchbar */}
			<div className="">
				<form
					onSubmit={handleSubmit}
					className="relative flex items-center md:w-[800px] md:mx-0 mx-4 md:mt-0 mt-4  h-11 md:rounded-full rounded-3xl focus-within:shadow-lg bg-white overflow-hidden"
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
				<Link
					href={"/auth"}
					type="button"
					className="font-semibold px-8  text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none rounded-lg text-sm py-2.5 text-center inline-flex items-center  dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
				>
					Login
				</Link>
			</div>
		</div>
	);
}
