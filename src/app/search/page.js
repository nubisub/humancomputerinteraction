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
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
			setLoading(false);
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
		if (preQuery === "") {
			e.preventDefault();
			return;
		}
		if (preQuery === query) {
			e.preventDefault();
			return;
		}
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
							{/* <Link
								href={"/auth"}
								type="button"
								className="font-semibold px-8  text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none rounded-lg text-sm py-2.5 text-center inline-flex items-center  dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
							>
								Login
							</Link> */}
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="inline-flex w-full justify-center rounded-full bg-white  p-1 px-2 gap-x-1 pl-3 text-sm font-medium text-black hover:drop-shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path
												fillRule="evenodd"
												d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
												clipRule="evenodd"
											/>
										</svg>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-8 h-8"
										>
											<path
												fillRule="evenodd"
												d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
												clipRule="evenodd"
											/>
										</svg>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="px-1 py-1 ">
											<Menu.Item>
												{({ active }) => (
													<Link
														href={"/auth"}
														className={`${
															active ? "bg-slate-100" : "text-gray-900"
														} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
													>
														Login
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link
														href={"/auth"}
														className={`${
															active ? "bg-slate-100" : "text-gray-900"
														} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
													>
														Help
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link
														href={"/tentang"}
														className={`${
															active ? "bg-slate-100" : "text-gray-900"
														} group flex w-full flex-col rounded-md px-4 py-2 text-sm`}
													>
														About
													</Link>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
					<Main>
						<h1 className="md:text-xl text-xl md:mx-0 mx-4 text-gray-700 font-semibold  md:ml-3 mb-1 mt-6 md:mt-4">
							Hasil Pencarian {`"${query}"`}
						</h1>
						{loading ? (
							<ol className="relative mb-6 min-h-[24rem]">
								<ol className="relative  md:ml-8 ml-8 mr-4 border-gray-200 dark:border-gray-700  mt-6">
									{
										// loop 5 times
										[...Array(3)].map((_, i) => (
											<li key={i} class="ml-6 md:mb-10 mb-6">
												<Skeleton height={25} />
												<Skeleton height={15} width={"16%"} />
												<Skeleton height={15} />
												<Skeleton height={15} />
											</li>
										))
										
									}
								</ol>
							</ol>
						) : !notFound ? (
							<ol className="relative mb-6 min-h-[24rem]">
								<ol className="relative border-l md:ml-8 ml-8 mr-4 border-gray-200 dark:border-gray-700  mt-6">
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
						) : (
							<div className="flex justify-center items-center h-96">
								<div className="flex flex-col justify-start gap-y-2 text-gray-800">
									<p className="text-gray-700 md:text-xl text-lg ">
										Hmmmmm...
									</p>
									<p className="text-gray-600 md:text-lg text-md ">
										Mohon maaf, kami tidak menemukan apapun tentang {" "} <span className="text-blue-700">"{query}"</span>
									</p>
									<p className="text-gray-600 md:text-md text-sm ">
										Cek kembali kata kunci pencarian anda atau coba kata kunci lainnya
									</p>

								</div>
							</div>
						)}
					</Main>
				</div>
				<Footer />
			</main>
		</>
	);
}
