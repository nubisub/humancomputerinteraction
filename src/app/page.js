"use client";
import Link from "next/link";
import Main from "./components/main";
import TopNav from "./components/topNav";
import { useEffect, useState } from "react";
const server = process.env.SERVER;

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch(`${server}/api/news`);
			const data = await res.json();
			setPosts(data.posts);
		};
		getPosts();
	}, []);
	return (
		<>
			<TopNav />
			<Main>
				<h3 class="text-3xl text-gray-700 font-semibold  ml-3 mb-4 mt-4">
					Sistem Informasi Jabatan Fungsional - BPS
				</h3>
				<hr className="ml-3 border-slate-400"></hr>
				<h3 class="text-xl text-gray-700 font-semibold  ml-3 my-8 mt-4">
					Berita Terkini
				</h3>

				<ol class="relative">
					<ol class="relative border-l ml-8 border-gray-200 dark:border-gray-700">
						{posts &&
							posts.map((post) => (
								<li key={post.name} class="ml-6 mb-10">
									<span class="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
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
												d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
											/>
										</svg>
									</span>
									<Link
										href={`/post/${post.slug}`}
										class="mb-1 text-lg font-semibold hover:text-blue-700"
									>
										{post.frontMatter.title}
									</Link>
									<time class="block mb-2 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
										Ditayangkan Pada {post.frontMatter.date}
									</time>
									<p class="text-base font-normal text-gray-500 dark:text-gray-400">
										{post.frontMatter.summary} ....{" "}
										<span className="text-blue-700">
											<Link href={`/post/${post.slug}`}>Baca Selengkapnya</Link>
										</span>
									</p>
								</li>
							))}
					</ol>
				</ol>
			</Main>
		</>
	);
}
