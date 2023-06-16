export default function Home() {
	return (
		<>
			<div className="flex flex-col  md:mt-0 mt-2">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden my-2 mx-2 mb-8">
							<div className="flex items-start mb-2 justify-between">
								<div className="text-2xl font-semibold md:block hidden"></div>
								<div className="flex items-center justify-center md:ml-0 ml-4">
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
											d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
										/>
									</svg>
									<input
										className="appearance-none block bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-xl  py-2 px-3 -ml-10 pl-12 transition-colors placeholder:text-sm"
										type="text"
										id="search"
										placeholder="Cari Peraturan Prakom"
									></input>
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
											Jabatan Fungsional Statistisi dan Angka Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
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
											Ketentuan Pelaksanaan Permenpan-RB (Jabatan Fungsional
											Statistisi dan Angka Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
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
											Petunjuk Teknis Penilaian Angka Kredit Jabatan Fungsional
											Statistisi
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											4
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Pengangkatan Jabatan Fungsional Statistisi
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											5
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Tim Penilai Angka Kredit Jabatan
											Fungsional Statistisi
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											6
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Pedoman Penyusunan Formasi Statistisi
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											7
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Tunjangan Jabatan Fungsional Statistisi
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											8
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Pelaksanaan Jabatan Fungsional Statistisi dan
											Angka Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											9
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
											>
												Download
											</button>
										</td>
									</tr>
									<tr className="border-b dark:border-neutral-500">
										<td className="whitespace-nowrap px-6 py-4 font-medium">
											10
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											Petunjuk Teknis Penilaian Pranata Komputer dan Angka
											Kreditnya
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-[#228be6] hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2  dark:hover:bg-[#1676ca] focus:outline-none dark:focus:ring-blue-800"
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
										className="relative z-10 inline-flex items-center bg-[#228be6] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
