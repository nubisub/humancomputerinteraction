"use client";
import Link from "next/link";
import TopNav from "./topNav";
export default function Home() {
	return (
		<main className="absolute w-[calc(100vw-267px)] box-border py-2 px-20 left-[250px]">
			<TopNav />
			<div className="flex flex-col bg-white px-16 py-8 rounded-lg my-4 shadow-lg">
				<h3 class="text-2xl text-gray-700 font-bold  ml-3">
					Selamat Datang, Admin
				</h3>
				<h4 class="text-lg text-gray-700  mb-8 ml-3">
					Sistem Informasi Jabatan Fungsional
				</h4>

				<ol class="relative border-l border-gray-200 dark:border-gray-700">
					<li class="mb-10 ml-6">
						<span class="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
								/>
							</svg>
						</span>
						<h3 class="flex items-center mb-1 text-lg font-semibold">
							Berita Terkini
							<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
								Latest
							</span>
						</h3>
						<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							Released on January 13th, 2022
						</time>
						<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							Sistem Informasi Jabatan Fungsional Sistem Informasi Jabatan
							Fungsional Sistem Informasi Jabatan Fungsional Sistem Informasi
							Jabatan Fungsional
						</p>
						
					</li>
					<li class="ml-6 mb-10">
						<span class="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
								/>
							</svg>
						</span>
						<h3 class="mb-1 text-lg font-semibold ">
							Usulan DUPAK Pasca Gangguan Aplikasi
						</h3>
						<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							Released on December 2nd, 2021
						</time>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Sehubungan dengan gangguan pada aplikasi SIjafung, Pejabat
							Fungsional Statistisi yang ingin mengusulkan kegiatan periode
							Januari - Desember 2021 masih diperbolehkan sampai ....{" "}
							<span className="text-blue-700">
								<Link href={"/"}>Baca Selengkapnya</Link>
							</span>
						</p>
					</li>
					<li class="ml-6 mb-10">
						<span class="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
								/>
							</svg>
						</span>
						<h3 class="mb-1 text-lg font-semibold ">
							Usulan DUPAK Pasca Gangguan Aplikasi
						</h3>
						<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							Released on December 2nd, 2021
						</time>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Sehubungan dengan gangguan pada aplikasi SIjafung, Pejabat
							Fungsional Statistisi yang ingin mengusulkan kegiatan periode
							Januari - Desember 2021 masih diperbolehkan sampai ....{" "}
							<span className="text-blue-700">
								<Link href={"/"}>Baca Selengkapnya</Link>
							</span>
						</p>
					</li>
					<li class="ml-6 mb-10">
						<span class="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
								/>
							</svg>
						</span>
						<h3 class="mb-1 text-lg font-semibold ">
							Usulan DUPAK Pasca Gangguan Aplikasi
						</h3>
						<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							Released on December 2nd, 2021
						</time>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Sehubungan dengan gangguan pada aplikasi SIjafung, Pejabat
							Fungsional Statistisi yang ingin mengusulkan kegiatan periode
							Januari - Desember 2021 masih diperbolehkan sampai ....{" "}
							<span className="text-blue-700">
								<Link href={"/"}>Baca Selengkapnya</Link>
							</span>
						</p>
					</li>
				</ol>
			</div>
		</main>
	);
}
