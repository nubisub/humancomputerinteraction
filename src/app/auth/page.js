import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex bg-[#e7f5ff] min-h-screen flex-col items-center justify-center">
			<h2 className={"text-2xl font-bold"}>Selamat Datang!</h2>
			<div className="mx-auto bg-white shadow-xl px-16 py-6 rounded-xl my-8">
				<div className="text-center text-gray-600 py-4">Masuk Melalui</div>
				<div className="flex  justify-center mb-10">
					<Link
						href={"https://sso.bps.go.id/"}
						className="flex gap-x-2 items-center bg-white shadow-md border border-gray-100 rounded px-4 py-2 mr-2"
					>
						<Image src="/logoBPS.svg" alt="BPS Logo" width={25} height={25} />
						<div className="text-sky-600 font-medium">SSO BPS</div>
					</Link>
				</div>
				<div className="pt-2 pb-8">
					<div className="text-center text-gray-600 mb-6">Atau</div>
					<div className="mx-auto">
						<div className="flex items-center bg-white rounded shadow-md mb-4">
							<span className="px-3">
								<svg
									className="fill-current text-gray-500 w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
								</svg>
							</span>
							<input
								className="w-[270px] h-12 focus:outline-none border-gray-100 border"
								type="username"
								name="username"
								placeholder="Username"
							></input>
						</div>
						<div className="flex items-center bg-white rounded shadow-md mb-4">
							<span className="px-3">
								<svg
									className="fill-current text-gray-500 w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
								</svg>
							</span>
							<input
								className="w-full h-12 focus:outline-none"
								type="password"
								name="password"
								placeholder="Password"
							></input>
						</div>
						<button className="bg-[#228BE6] block mx-auto text-white text-sm  rounded shadow-md px-6 py-2.5 mt-8">
							Sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
