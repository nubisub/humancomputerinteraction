import { Dialog, Transition, Tab} from "@headlessui/react";
import { Fragment, useState } from "react";

const jabatan = [
	"Pranata Komputer Muda",
	"Pranata Komputer Muda Tingkat I",
	"Pranata Komputer Madya",
	"Pranata Komputer Madya Tingkat I",
	"Pranata Komputer Utama",
	"Pranata Komputer Utama Tingkat I",
];

export default function BPS() {
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
			<form className="md:flex flex-col gap-y-1 py-2">
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

				{/* Jabata Yang Diajukan */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="tingkat-pendidikan">
						Jabatan Fungsional
					</label>
					<select
						disabled
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
						id="tingkat-pendidikan"
						type="text"
						placeholder="Masukkan Jenis Kelamin"
					>
						<option value="Pranata Komputer">Pranata Komputer</option>
					</select>
				</div>
				{/* Jabata Yang Diajukan */}
				<div className="w-full block px-3">
					<label className="block mb-1 text-sm " for="tingkat-pendidikan">
						Jenjang Jabatan Fungsional
					</label>
					<select
						required
						className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm text-sm"
						id="tingkat-pendidikan"
						type="text"
						placeholder="Masukkan Jenis Kelamin"
					>
						<option selected disabled  value="">
							Pilih Jenjang Jabatan Fungsional
						</option>
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
						type="email"
						placeholder="Masukkan Alamat Email"
					></input>
				</div>
				<div className="flex justify-center">
					<button
						// onClick={openModal}
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
			</form>
		</div>
	);
}
