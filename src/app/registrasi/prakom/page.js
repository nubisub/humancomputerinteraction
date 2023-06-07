"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Link from "next/link";
const pendidikan = [
	"-",
	"SD",
	"SMP",
	"SMA",
	"D1",
	"D2",
	"D3",
	"S1",
	"S2",
	"S3",
];
const pangkat = [
	"Juru Muda (I/A)",
	"Juru Muda Tingkat I (I/B)",
	"Juru (I/C)",
	"Juru Tingkat I (I/D)",
	"Pengatur Muda (II/A)",
	"Pengatur Muda Tingkat I (II/B)",
	"Pengatur (II/C)",
	"Pengatur Tingkat I (II/D)",
	"Penata Muda (III/A)",
	"Penata Muda Tingkat I (III/B)",
	"Penata (III/C)",
	"Penata Tingkat I (III/D)",
	"Pembina (IV/A)",
	"Pembina Tingkat I (IV/B)",
	"Pembina Utama Muda (IV/C)",
	"Pembina Utama Madya (IV/D)",
	"Pembina Utama (IV/E)",
];
const jabatan = [
	"Pranata Komputer Muda",
	"Pranata Komputer Muda Tingkat I",
	"Pranata Komputer Madya",
	"Pranata Komputer Madya Tingkat I",
	"Pranata Komputer Utama",
	"Pranata Komputer Utama Tingkat I",
];
const instansi = [
	"Badan Pusat Statistik",
	"Badan Pengawasan Keuangan dan Pembangunan",
	"Badan Pemeriksa Keuangan",
	"Badan Pusat Statistik",
	"Badan Tenaga Nuklir Nasional",
	"Badan Pengkajian dan Penerapan Teknologi",
	"Badan Meteorologi, Klimatologi, dan Geofisika",
	"Badan Informasi Geospasial",
	"Badan Siber dan Sandi Negara",
	"Badan Intelijen Negara",
	"Badan Nasional Penanggulangan Bencana",
	"Badan Kepegawaian Negara",
	"Badan Pengawas Obat dan Makanan",
	"Badan Pengawas Tenaga Nuklir",
	"Badan Pengawas Pemilu",
	"Badan Pengawas Pemilihan Umum",
	"Badan Pengawas Perdagangan Berjangka Komoditi",
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
		<main className="absolute w-[calc(100vw-267px)] box-border p-10 px-20 left-[250px]">
			<h1 className="text-3xl my-3 text-white">
				Permintaan Akun Calon Pranata Komputer
			</h1>
			<nav
				className="flex bg-blue-50 text-blue-700 border border-blue-200 py-3 px-5 rounded-lg mb-6"
				aria-label="Breadcrumb"
			>
				<ol class="inline-flex items-center space-x-1 md:space-x-3">
					<li class="inline-flex items-center">
						<Link
							href="/"
							className="text-blue-700 hover:text-blue-900 inline-flex items-center font-semibold"
						>
							<svg
								class="w-5 h-5 mr-2.5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
							</svg>
							Home
						</Link>
					</li>
					<li>
						<div class="flex items-center">
							<svg
								className="w-6 h-6 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<Link
								href="/registrasi/prakom"
								className="text-blue-700 hover:text-blue-900 ml-1 md:ml-2 text-sm font-medium"
							>
								Registrasi
							</Link>
						</div>
					</li>
					<li aria-current="page">
						<div className="flex items-center">
							<svg
								class="w-6 h-6 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span className="text-blue-400 ml-1 md:ml-2 text-sm font-medium">
								Pranata Komputer
							</span>
						</div>
					</li>
				</ol>
			</nav>
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
									<div className="py-2">
										<h3 className="px-3 font-semibold text-lg">Data Diri</h3>
										<div className="md:flex flex-col mb-6 gap-y-1 py-2">
											{/* NIP */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm" for="nip">
													Nomor Induk Pegawai
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="nip"
													type="text"
													placeholder="Masukkan Nomor Induk Pegawai 18 Digit Tanpa Spasi"
												></input>
											</div>
											{/* Nama */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm"
													for="grid-first-name"
												>
													Nama Lengkap
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="grid-first-name"
													type="text"
													placeholder="Masukkan Nama Lengkap (Tanpa Gelar)"
												></input>
											</div>
											{/* Gelar Depan */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="gelar-depan"
												>
													Gelar Depan
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="gelar-depan"
													type="text"
													placeholder="Masukkan Gelar Depan"
												></input>
											</div>
											{/* Gelar Belakang */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="gelar-belakang"
												>
													Gelar Belakang
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="gelar-belakang"
													type="text"
													placeholder="Masukkan Gelar Belakang"
												></input>
											</div>
											{/* Jenis Kelamin */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="jenis-kelamin"
												>
													Jenis Kelamin
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="jenis-kelamin"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													<option value="laki-laki">Laki-laki</option>
													<option value="perempuan">Perempuan</option>
												</select>
											</div>
											{/* Tempat Lahir */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="tempat-lahir"
												>
													Tempat Lahir
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="tempat-lahir"
													type="text"
													placeholder="Masukkan Tempat Lahir (Kota/Kabupaten)"
												></input>
											</div>
											{/* Tanggal Lahir */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="tanggal-lahir"
												>
													Tanggal Lahir
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="tanggal-lahir"
													type="date"
													placeholder="Masukkan Tanggal Lahir"
												></input>
											</div>
											{/* Alamat */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="alamat">
													Alamat
												</label>
												<textarea
													className="appearance-none resize-y min-h-[70px] block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="alamat"
													type="text"
													placeholder="Masukkan Alamat"
												></textarea>
											</div>
											{/* Email */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="email">
													Email
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="tempat-lahir"
													type="text"
													placeholder="Masukkan Alamat Email"
												></input>
											</div>
											{/* Tingkat Pendidikan */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="tingkat-pendidikan"
												>
													Tingkat Pendidikan Terakhir
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="tingkat-pendidikan"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													{pendidikan.map((pendidikan) => (
														<option key={pendidikan} value={pendidikan}>
															{pendidikan}
														</option>
													))}
												</select>
											</div>
											{/* Jurusan Pendidikan */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="jurusan-pendidikan"
												>
													Jurusan Pendidikan Terakhir
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="jurusan-pendidikan"
													type="text"
													placeholder="Masukkan Jurusan Pendidikan Terakhir"
												></input>
											</div>
											{/* Nomor Kartu Pegawai */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="nomor-kartu"
												>
													Nomor Kartu Pegawai
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="nomor-kartu"
													type="text"
													placeholder="Masukkan Nomor Kartu Pegawai"
												></input>
											</div>
											{/* Pangkat/Golongan */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="pangkat">
													Pangkat/Golongan
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="pangkat"
													type="text"
													placeholder="Masukkan Pangkat/Golongan"
												>
													{pangkat.map((pangkat) => (
														<option key={pangkat} value={pangkat}>
															{pangkat}
														</option>
													))}
												</select>
											</div>
											{/* TMT Golongan */}

											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="tanggal-lahir"
												>
													TMT Golongan
												</label>
												<input
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="tanggal-lahir"
													type="date"
													placeholder="TMT Golongan"
												></input>
											</div>
											{/* Masa Kerja */}

											<div className="w-full block">
												<span className="px-3 text-sm mb-2">Masa Kerja</span>
												<div className="flex">
													<div className="w-full block px-3">
														<label className="block mb-1 text-sm " for="tahun">
															Tahun
														</label>
														<input
															required
															className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
															id="tahun"
															type="text"
															placeholder="Masukkan Tahun Masa Kerja"
														></input>
													</div>
													<div className="w-full block px-3">
														<label className="block mb-1 text-sm" for="bulan">
															Bulan
														</label>
														<input
															required
															className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
															id="bulan"
															type="text"
															placeholder="Masukkan Bulan Masa Kerja"
														></input>
													</div>
												</div>
											</div>
											{/* Jabata Yang Diajukan */}
											<div className="w-full block px-3">
												<label
													className="block mb-1 text-sm "
													for="tingkat-pendidikan"
												>
													Jabatan Yang Diajukan
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="tingkat-pendidikan"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													{jabatan.map((jabatan) => (
														<option key={jabatan} value={jabatan}>
															{jabatan}
														</option>
													))}
												</select>
											</div>
											{/* No SK PNS/KP Terakhir */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm" for="nomor-sk">
													No SK PNS/KP Terakhir
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="nomor-sk"
													type="text"
													placeholder="Masukkan No SK PNS/KP Terakhir"
												></input>
											</div>
											{/* File SK PNS/KP Terakhir (PDF)*/}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm" for="file">
													File SK PNS/KP Terakhir (PDF)
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="file"
													type="file"
													placeholder="Masukkan File SK PNS/KP Terakhir"
												></input>
											</div>
										</div>
									</div>
									<div className="py-2">
										<h3 className="px-3 font-semibold text-lg">
											Data Unit Kerja
										</h3>
										<div className="md:flex flex-col mb-6 gap-y-1 py-2">
											{/* Instansi */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="instansi">
													Instansi
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="instansi"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													{instansi.map((instansi) => (
														<option key={instansi} value={instansi}>
															{instansi}
														</option>
													))}
												</select>
											</div>
											{/* Provinsi */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="instansi">
													Provinsi
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="instansi"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													{instansi.map((instansi) => (
														<option key={instansi} value={instansi}>
															{instansi}
														</option>
													))}
												</select>
											</div>
											{/* Kabupten */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm " for="instansi">
													Kabupaten/Kota
												</label>
												<select
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
													id="instansi"
													type="text"
													placeholder="Masukkan Jenis Kelamin"
												>
													{instansi.map((instansi) => (
														<option key={instansi} value={instansi}>
															{instansi}
														</option>
													))}
												</select>
											</div>
											{/* Unit Kerja */}
											<div className="w-full block px-3">
												<label className="block mb-1 text-sm" for="unit-kerja">
													Unit Kerja
												</label>
												<input
													required
													className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
													id="unit kerja"
													type="text"
													placeholder="Masukkan Unit Kerja"
												></input>
											</div>
										</div>
										{/* submit button */}
										<div className="flex justify-center">
											<button
												onClick={openModal}
												className="bg-sky-600 hover:bg-sky-700 text-white font-semibold w-full mx-3 py-2 px-4 rounded-md"
												type="submit"
											>
												Kirim
											</button>
											<Transition appear show={isOpen} as={Fragment}>
												<Dialog
													as="div"
													className="relative z-10"
													onClose={closeModal}
												>
													<Transition.Child
														as={Fragment}
														enter="ease-out duration-300"
														enterFrom="opacity-0"
														enterTo="opacity-100"
														leave="ease-in duration-200"
														leaveFrom="opacity-100"
														leaveTo="opacity-0"
													>
														<div className="fixed inset-0 bg-black bg-opacity-25" />
													</Transition.Child>

													<div className="fixed inset-0 overflow-y-auto">
														<div className="flex min-h-full items-center justify-center p-4 text-center">
															<Transition.Child
																as={Fragment}
																enter="ease-out duration-300"
																enterFrom="opacity-0 scale-95"
																enterTo="opacity-100 scale-100"
																leave="ease-in duration-200"
																leaveFrom="opacity-100 scale-100"
																leaveTo="opacity-0 scale-95"
															>
																<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
																	<Dialog.Title
																		as="h3"
																		className="text-lg font-medium leading-6 text-gray-900"
																	>
																		Submit Data
																	</Dialog.Title>
																	<div className="mt-2">
																		<p className="text-sm text-gray-500">
																			Apakah anda yakin ingin mengirim data ini?
																		</p>
																	</div>

																	<div className="mt-4">
																		<button
																			type="button"
																			className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
																			onClick={closeModal}
																		>
																			Yes
																		</button>
																	</div>
																</Dialog.Panel>
															</Transition.Child>
														</div>
													</div>
												</Dialog>
											</Transition>
										</div>
									</div>
								</div>
							</Tab.Panel>
						</Tab.Panels>
						<Tab.Panel>
							<div className="py-2">
								<div className="py-2">
									<h3 className="px-3 font-semibold text-lg">
										Data Diri Dan Pekerjaan
									</h3>
									<div className="md:flex flex-col mb-6 gap-y-1 py-2">
										{/* NIP */}
										<div className="w-full block px-3">
											<label className="block mb-1 text-sm" for="nip">
												Nomor Induk Pegawai
											</label>
											<input
												className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
												id="nip"
												type="text"
												placeholder="Masukkan Nomor Induk Pegawai 18 Digit Tanpa Spasi"
											></input>
										</div>
										{/* Nama */}
										<div className="w-full block px-3">
											<label
												className="block mb-1 text-sm"
												for="grid-first-name"
											>
												Nama Lengkap
											</label>
											<input
												className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
												id="grid-first-name"
												type="text"
												placeholder="Masukkan Nama Lengkap (Tanpa Gelar)"
											></input>
										</div>

										{/* Jabata Yang Diajukan */}
										<div className="w-full block px-3">
											<label
												className="block mb-1 text-sm "
												for="tingkat-pendidikan"
											>
												Jabatan Yang Diajukan
											</label>
											<select
												className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
												id="tingkat-pendidikan"
												type="text"
												placeholder="Masukkan Jenis Kelamin"
											>
												{jabatan.map((jabatan) => (
													<option key={jabatan} value={jabatan}>
														{jabatan}
													</option>
												))}
											</select>
										</div>
										{/* Jabata Yang Diajukan */}
										<div className="w-full block px-3">
											<label
												className="block mb-1 text-sm "
												for="tingkat-pendidikan"
											>
												Jabatan Yang Diajukan
											</label>
											<select
												className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
												id="tingkat-pendidikan"
												type="text"
												placeholder="Masukkan Jenis Kelamin"
											>
												{jabatan.map((jabatan) => (
													<option key={jabatan} value={jabatan}>
														{jabatan}
													</option>
												))}
											</select>
										</div>
										{/* Email */}
										<div className="w-full block px-3">
											<label className="block mb-1 text-sm " for="email">
												Email
											</label>
											<input
												required
												className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
												id="tempat-lahir"
												type="text"
												placeholder="Masukkan Alamat Email"
											></input>
										</div>
										<div className="flex justify-center">
											<button
												onClick={openModal}
												className="bg-sky-600 hover:bg-sky-700 text-white font-semibold w-full mx-3 py-2 px-4 rounded-md"
												type="submit"
											>
												Kirim
											</button>
											<Transition appear show={isOpen} as={Fragment}>
												<Dialog
													as="div"
													className="relative z-10"
													onClose={closeModal}
												>
													<Transition.Child
														as={Fragment}
														enter="ease-out duration-300"
														enterFrom="opacity-0"
														enterTo="opacity-100"
														leave="ease-in duration-200"
														leaveFrom="opacity-100"
														leaveTo="opacity-0"
													>
														<div className="fixed inset-0 bg-black bg-opacity-25" />
													</Transition.Child>

													<div className="fixed inset-0 overflow-y-auto">
														<div className="flex min-h-full items-center justify-center p-4 text-center">
															<Transition.Child
																as={Fragment}
																enter="ease-out duration-300"
																enterFrom="opacity-0 scale-95"
																enterTo="opacity-100 scale-100"
																leave="ease-in duration-200"
																leaveFrom="opacity-100 scale-100"
																leaveTo="opacity-0 scale-95"
															>
																<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
																	<Dialog.Title
																		as="h3"
																		className="text-lg font-medium leading-6 text-gray-900"
																	>
																		Submit Data
																	</Dialog.Title>
																	<div className="mt-2">
																		<p className="text-sm text-gray-500">
																			Apakah anda yakin ingin mengirim data ini?
																		</p>
																	</div>

																	<div className="mt-4">
																		<button
																			type="button"
																			className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
																			onClick={closeModal}
																		>
																			Yes
																		</button>
																	</div>
																</Dialog.Panel>
															</Transition.Child>
														</div>
													</div>
												</Dialog>
											</Transition>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
					</Tab.Group>
				</div>
			</div>
		</main>
	);
}
