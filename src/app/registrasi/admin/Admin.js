`use client`
import { Dialog, Transition, Tab} from "@headlessui/react";
import { Fragment, useState } from "react";
import {  useEffect } from "react";

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

const server = process.env.SERVER;

const getProvinsi = async () => {	
	const res = await fetch(`${server}/api/regions`);
	const data = await res.json();
	return data;
};
const getKabupaten = async (id) => {
	const res = await fetch(`${server}/api/regions/${id}`);
	const data = await res.json();
	return data[0].kota;
};


export default function Admin() {
	const [regions, setRegions] = useState([]);	
	const [provinsi, setProvinsi] = useState('');
	const [kabupaten, setKabupaten] = useState([]);

	useEffect(() => {
		const prov = getProvinsi();
		prov.then((data) => {
			setRegions(data);
		});
	}, []);

	const fetchKabupaten = (id) => {
		console.log(id);
		const kab = getKabupaten(id);
		kab.then((data) => {
			setKabupaten(data);
			console.log(data);
		});
	};

    let [isOpen, setIsOpen] = useState(false);

		function closeModal() {
			setIsOpen(false);
		}

		function openModal() {
			setIsOpen(true);
		}
	return (
		<div className="py-2">
			<h3 className="px-3 font-semibold text-lg">Data Diri Dan Pekerjaan</h3>
			<form className="md:flex flex-col mb-6 gap-y-1 py-2">
				{/* NIP */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm" for="nip">
						Nomor Induk Pegawai
					</label>
					<input
						required
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
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="grid-first-name"
						type="text"
						placeholder="Masukkan Nama Lengkap (Tanpa Gelar)"
					></input>
				</div>
				{/* Alamat Kantor */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm" for="alamat-kantor">
						Alamat Kantor
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="alamat-kantor"
						type="text"
						placeholder="Masukkan Alamat Kantor"
					></input>
				</div>
				{/* Email Kantor */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="email-kantor">
						Email Kantor
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="email-kantor"
						type="email"
						placeholder="Masukkan Alamat Email Kantor"
					></input>
				</div>
				{/* Email */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="email-pribadi">
						Email Pribadi
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="email-pribadi"
						type="email"
						placeholder="Masukkan Alamat Email Pribadi"
					></input>
				</div>

				{/* No HP */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="no-hp">
						Nomor HP Pribadi
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="no-hp"
						type="text"
						placeholder="Masukkan Nomor HP Pribadi"
					></input>
				</div>

				{/* No HP */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="no-st">
						Nomor Surat Tugas
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="no-st"
						type="text"
						placeholder="Masukkan Nomor Surat Tugas"
					></input>
				</div>
				{/* File SK PNS/KP Terakhir (PDF)*/}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm" for="file">
						Surat Tugas (PDF)
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
						id="file"
						type="file"
						placeholder="Masukkan File Surat Tugas Dalam Format PDF"
					></input>
				</div>

				<h3 className="px-3 font-semibold text-lg mt-4">Data Unit Kerja</h3>
				<div className="md:flex flex-col mb-6 gap-y-1 py-2">
					{/* Instansi */}
					<div className="w-full block px-3">
						<label className="block mb-1 text-sm " for="instansi">
							Instansi
						</label>
						<select
							required
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
							required
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="prov"
							type="text"
							placeholder="Masukkan Jenis Kelamin"
							onChange={(e) => fetchKabupaten(e.target.value)}
						>
							<option disabled selected value={"-"}>
								Pilih Provinsi
							</option>
							{regions.map((region) => (
								<option key={region} value={region}>
									{region}
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
							required
							className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
							id="kab"
							type="text"
							placeholder="Masukkan Jenis Kelamin"
						>
							<option disabled selected value={"-"}>
								Pilih Kabupaten
							</option>
							{kabupaten.map((kabupaten) => (
								<option key={kabupaten} value={kabupaten}>
									{kabupaten}
								</option>
							))}
						</select>
					</div>
					{/* Unit Kerja */}
					<div className="w-full block px-3">
						<label className="block mb-1 text-sm" for="unit-kerja">
							Unit Kerja Eselon 2
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

				<div className="flex justify-center">
					<button
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
										<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-8 text-left align-middle shadow-xl transition-all">
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

											<div className="mt-4 flex gap-3">
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}
												>
													Submit
												</button>
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}
												>
													Cancel
												</button>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</div>
			</form>
		</div>
	);
}
