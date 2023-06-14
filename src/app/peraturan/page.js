export default function Home() {
	return (
		<>
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden my-4 mb-8">
							<div className="flex items-start justify-between">
								<div className="text-xl font-semibold">
									Peraturan Pranata Komputer
								</div>
								<div className="relative flex items-center w-1/3 border-2 shadow-sm mb-3 h-10 rounded-xl  bg-white overflow-hidden items-center">
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
										placeholder="Cari Peraturan"
									/>
								</div>
							</div>
							<table className="min-w-full text-left text-sm font-light">
								<thead className="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" className="px-6 py-4">
											No
										</th>
										<th scope="col" className="px-6 py-4">
											Judul
										</th>
										<th scope="col" className="px-6 py-4">
											Aksi
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											1
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Jabatan Fungsional Pranata Komputer dan Angka Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											2
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Pelaksanaan Jabatan Fungsional Pranata Komputer
											dan Angka Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											3
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											3
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											3
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											3
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											3
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
							<div>
								<p className="text-sm text-gray-700">
									Showing <span className="font-medium">1</span> to{" "}
									<span className="font-medium">10</span> of{" "}
									<span className="font-medium">97</span> results
								</p>
							</div>
							<div>
								<nav
									className="isolate inline-flex -space-x-px rounded-md shadow-sm"
									aria-label="Pagination"
								>
									<a
										href="#"
										className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span className="sr-only">Previous</span>
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
												d="M15.75 19.5L8.25 12l7.5-7.5"
											/>
										</svg>
									</a>
									{/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
									<a
										href="#"
										aria-current="page"
										className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										1
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										2
									</a>
									<a
										href="#"
										className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
									>
										3
									</a>
									<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
										...
									</span>
									<a
										href="#"
										className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
									>
										8
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										9
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										10
									</a>
									<a
										href="#"
										className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span className="sr-only">Next</span>
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
												d="M8.25 4.5l7.5 7.5-7.5 7.5"
											/>
										</svg>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
