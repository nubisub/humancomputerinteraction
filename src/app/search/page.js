"use client";
import Link from "next/link";
import Main from "../components/main";
import MobileTopNav from "@/app/components/mobileTopNav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
const server = process.env.SERVER;
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const getPosts = async (query) => {
	const res = await fetch(`${server}/api/search/${query}`);
	const data = await res.json();

	const posts = await data;
	return posts;
};

const parseTime = (time) => {
	let date = new Date(time);
	return date.toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

export default function Home() {
	const searchParams = useSearchParams();
	const search = searchParams.get("query");
	const [posts, setPosts] = useState([]);
	const [query, setQuery] = useState(search);
	const [preQuery, setPreQuery] = useState(query);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			setNotFound(false);
			const posts = await getPosts(query);
			if (posts.error) {
				setNotFound(true);
				setLoading(false);
				setPosts([]);
				return;
			}
			setPosts(posts);
		};
		fetchData();
		setLoading(false);
	}, [query]);

	// refresh page when back button is clicked
	useEffect(() => {
		window.onpopstate = () => {
			const search = searchParams.get("query");
		};
	}, []);

	useEffect(() => {
		const search = searchParams.get("query");
		setQuery(search);
		setPreQuery(search);
	}, [searchParams]);

	const searchHandler = (e) => {
		setLoading(true);
		e.preventDefault();
		setQuery(preQuery);
		router.push(`/search?query=${preQuery}`, undefined, { shallow: true });
	};

	return (
		<>
			<MobileTopNav />
			<Sidebar />

			<main className="md:absolute md:w-[calc(100vw-267px)] w-screen box-border md:pt-5 p-1 px-2 md:px-0 pt-0.5 left-[250px]">
				<div className="md:mx-20 md:mb-24 mb-4 ">
					<div className="md:flex justify-between items-center my-2 md:mb-8 z-50">
						{/* Searchbar */}
						<div className="">
							<form className="relative flex items-center md:w-[800px] md:mx-0 mx-4 md:mt-0 mt-4  h-11 md:rounded-full rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
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
									defaultValue={query}
									value={preQuery}
									className="peer h-full w-full outline-none text-sm text-gray-700 pr-8"
									type="text"
									id="search"
									placeholder="Cari Sesuatu ..."
									onChange={(e) => setPreQuery(e.target.value)}
								/>
								<button
									type="submit"
									onClick={(e) => {
										searchHandler(e);
									}}
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
					<Main>
						<h1 className="md:text-xl text-xl md:mx-0 mx-4 text-gray-700 font-semibold  md:ml-3 mb-1 mt-6 md:mt-4">
							Hasil Pencarian {`"${query}"`}
						</h1>
						{loading ? (
							<div className="flex justify-center items-center h-96">
								<div role="status">
									<svg
										aria-hidden="true"
										class="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									<span class="sr-only">Loading...</span>
								</div>
							</div>
						) : (
							<ol class="relative h-fit min-h-96 ">
								<ol class="relative border-l md:ml-8 ml-8 mr-4 border-gray-200 dark:border-gray-700  mt-6">
									{posts.map((post) => (
										<li key={post.title} class="ml-6 md:mb-10 mb-6">
											<span class="absolute mt-1 flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
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
											<Link
												href={`/post/${post.slug}`}
												className="mb-8 md:text-xl font-semibold hover:text-[#228be6]"
											>
												<span className="py-2">{post.title}</span>
											</Link>
											<time className="block mb-2 mt-1 md:text-sm text-xs font-medium leading-none text-gray-600">
												{parseTime(post.date)}
											</time>
											<p class="text-base md:block hidden font-normal text-gray-500">
												{post.summary} ....{" "}
												<span className="text-blue-700 hover:text-blue-400">
													<Link href={`/post/${post.slug}`}>
														Baca Selengkapnya
													</Link>
												</span>
											</p>
										</li>
									))}
								</ol>
							</ol>
						)}
						{notFound ? (
							<div className="flex justify-center items-center h-96">
								<div className="flex flex-col items-center text-gray-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-24 h-24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
										/>
									</svg>
									<p className="text-gray-400 text-center md:text-lg text-md mt-4">
										Hasil pencarian tidak kami temukan, coba dengan kata kunci
										lain
									</p>
								</div>
							</div>
						) : null}
					</Main>
				</div>
				<Footer />
			</main>
		</>
	);
}
