"use client";
import Link from "next/link";
import Main from "../components/main";
import MobileTopNav from "@/app/components/mobileTopNav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
const server = process.env.SERVER;
import { useEffect, useState } from "react";
import queryString from "query-string";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Router from "next/router";

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
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			const posts = await getPosts(query);
			setPosts(posts);
		};
		fetchData();
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
		e.preventDefault();
		setQuery(preQuery);
		// router.push(`/search?query=${preQuery}`);
		// add history to browser
		router.push(`/search?query=${preQuery}`, undefined, { shallow: true });
	};

	return (
		<>
			<MobileTopNav />
			<Sidebar />

			<main className="md:absolute md:w-[calc(100vw-267px)] w-screen box-border md:pt-5 p-1 px-2 md:px-0 pt-0.5 left-[250px]">
				<div className="md:mx-20 md:mb-24 mb-4">
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
						{/* <div>{slug} sdf</div> */}
						<ol class="relative">
							<ol class="relative border-l md:ml-8 ml-8 mr-4 border-gray-200 dark:border-gray-700 mt-6">
								{posts &&
									posts.map((post) => (
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
					</Main>
				</div>
				<Footer />
			</main>
		</>
	);
}
