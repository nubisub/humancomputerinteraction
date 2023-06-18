import Image from "next/image";
import Link from "next/link";
const getYear = () => {
	return new Date().getFullYear();
};

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-row">
			<div className="md:w-1/2 w-full flex items-center">
				<div className="flex w-full flex-col h-full justify-start md:justify-between">
					<div>
						{/* make circle */}
						<div className="flex items-center mx-10 mt-8">
							<Link href={"/"}>
								<Image
									src="/logoSijafungHitam.png"
									alt="Picture of the author"
									width={120}
									height={120}
								/>
							</Link>
							{/* <div className="w-3 h-3 rounded-full bg-black"></div>
							<Link href={"/"} className="text-xl font-semibold ml-2">
								SiJafung
							</Link> */}
						</div>
					</div>
					<div className="flex flex-col md:w-3/4 md:px-24 md:my-0 my-8 px-8 mx-auto">
						<div className="flex gap-3 flex-col my-4">
							<h1 className="md:text-4xl text-2xl text-center md:text-left font-semibold">
								Selamat Datang
							</h1>
							<h2 className="text-gray-500 text-center md:text-left ">
								Selamat datang di Sistem Informasi Jabatan Fungsional Badan
								Pusat Statistik{" "}
							</h2>
						</div>
						<div>
							<form className="md:flex flex-col mb-6 gap-y-1 py-2">
								{/* Username */}
								<div className="w-full block">
									<label className="block mb-1 text-sm font-medium" for="nip">
										Username
									</label>
									<input
										required
										className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
										id="nip"
										type="text"
										placeholder="Masukkan Username"
									></input>
								</div>
								{/* Pass */}
								<div className="w-full block">
									<label
										className="block mb-1 text-sm font-medium"
										for="grid-first-name"
									>
										Password
									</label>
									<input
										required
										className="appearance-none block w-full bg-gray-50 bg-opacity-60 border border-neutral-400  focus:outline-sky-600 focus:outline-1 rounded-md py-2 px-3 mb-3 transition-colors placeholder:text-sm"
										id="grid-first-name"
										type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
									></input>
								</div>
								<div className="w-full flex justify-between mb-4">
									<div className="flex items-center gap-2">
										<input
											id="ingat"
											type="checkbox"
											className="form-checkbox h-4 w-4 text-[#228be6] border-[#228be6] rounded-lg"
										></input>
										<label for="ingat" className="text-sm text-gray-500">
											Ingat Saya
										</label>
									</div>
									<Link
										href={"/"}
										className="text-sm font-medium text-sky-600 hover:text-sky-700"
									>
										Lupa Password?
									</Link>
								</div>

								<button
									className="bg-[#228be6] hover:bg-[#177dd6] text-white font-semibold w-full 	py-2 px-4 rounded-md mb-2"
									type="submit"
								>
									Sign In
								</button>
								<Link
									href={"https://sso.bps.go.id/"}
									className=" text-black hover:bg-gray-400 hover:text-white border-gray-400 text-center border-opacity-40 border-2 font-medium text-sm w-full py-2 px-4 rounded-md flex justify-center items-center gap-2"
									type="submit"
								>
									<Image
										alt="logo BPS"
										src="/logoBPS.svg"
										width={24}
										height={24}
									/>
									Masuk Dengan SSO BPS
								</Link>
								<div className="mt-4">
									<p className="text-center text-sm text-gray-500">
										Belum punya akun?{" "}
										<Link
											href={"/"}
											className="text-sm font-medium text-sky-600 hover:text-sky-700"
										>
											Daftar
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
					<footer class="bg-white border-gray-300 w-full border-opacity-30 border-t-2 shadow-sm md:block hidden md:bottom-0 ">
						<div class="w-full mx-auto max-w-screen-xl p-2 px-6 md:flex md:items-center md:justify-between ">
							<span class="text-xs text-gray-600 sm:text-center">
								© {getYear()}{" "}
								<Link href="/" class="hover:underline">
									Kelompok 1™
								</Link>
								. All Rights Reserved.
							</span>
							<ul class="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-500 sm:mt-0">
								<li>
									App Version: v1.1.1 Developed with &#128149; by Kelompok 1 IMK
									SETIS
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>
			<div className="w-1/2 md:flex hidden justify-center items-center flex-col bg-no-repeat bg-center bg-[#f3f4f8] bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/58/Eo_circle_blue_blank.svg')] bg-[length:500px_300px]">
				<div className="h-1/2 flex items-center w-full"></div>
				<div className="h-1/2 flex items-center backdrop-blur-xl w-full"></div>
			</div>
		</div>
	);
}
