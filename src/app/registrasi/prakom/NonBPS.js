import { Dialog, Transition, Tab } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
async function getData() {
	const res = await fetch("/api/regions");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

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
export default function NonBPS() {
	const [regions, setRegions] = useState([]);
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [kabupaten, setKabupaten] = useState([]);
	useEffect(() => {
		getData().then((data) => setRegions(data));
		console.log(regions);
	}, []);
	useEffect(() => {
		console.log(selectedRegion);
		if (selectedRegion) {
			setKabupaten(selectedRegion.kabupaten);
		}
	}, [selectedRegion]);

	// const coba = await getProjects();
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
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
						<label className="block mb-1 text-sm" for="grid-first-name">
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
						<label className="block mb-1 text-sm " for="gelar-depan">
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
						<label className="block mb-1 text-sm " for="gelar-belakang">
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
						<label className="block mb-1 text-sm " for="jenis-kelamin">
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
						<label className="block mb-1 text-sm " for="tempat-lahir">
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
						<label className="block mb-1 text-sm " for="tanggal-lahir">
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
						<label className="block mb-1 text-sm " for="tingkat-pendidikan">
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
						<label className="block mb-1 text-sm " for="jurusan-pendidikan">
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
						<label className="block mb-1 text-sm " for="nomor-kartu">
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
						<label className="block mb-1 text-sm " for="tmt">
							TMT Golongan
						</label>
						<input
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="tmt"
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
						<label className="block mb-1 text-sm " for="jabatan-aju">
							Jabatan Yang Diajukan
						</label>
						<select
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="jabatan-aju"
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
				<h3 className="px-3 font-semibold text-lg">Data Unit Kerja</h3>
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
						<label className="block mb-1 text-sm " for="prov">
							Provinsi
						</label>
						<select
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="prov"
							type="text"
							placeholder="Masukkan Jenis Kelamin"
							onSelect={(e) => setSelectedRegion(e.target.value)}
						>
							{regions &&
								regions.map((region) => (
									<option key={region.provinsi} value={region.provinsi}>
										{region.provinsi}
									</option>
								))}
						</select>
					</div>
					{/* Kabupten */}
					<div className="w-full block px-3">
						<label className="block mb-1 text-sm " for="kab">
							Kabupaten/Kota
						</label>
						<select
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="kab"
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
							id="unit-kerja"
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
						<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
		</>
	);
}
