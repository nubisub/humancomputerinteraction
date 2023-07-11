import Link from "next/link";
import Main from "./components/main";
import TopNav from "./components/topNav";
import MobileTopNav from "@/app/components/mobileTopNav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
const server = process.env.SERVER;

const getPosts = async () => {
	const res = await fetch(`${server}/api/news`);
	const data = await res.json();
	const posts = await data;
	return posts.posts;
};

const parseTime = (time) => {
	let date = new Date(time);
	return date.toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

export default async function Home() {
	const posts = await getPosts();
	return (
		<>
			<MobileTopNav />
			<Sidebar />

			<main className="md:absolute md:w-[calc(100vw-267px)] w-screen box-border md:pt-5 p-1 px-2 md:px-0 pt-0.5 left-[250px]">
				<div className="md:mx-20 md:mb-24 mb-4">
					<TopNav />
					<Main>
						<h3 className="md:text-3xl text-xl md:mx-0 mx-4 text-gray-700 font-semibold  md:ml-3 mb-4 mt-6">
							Sistem Informasi Jabatan Fungsional - BPS
						</h3>
						<hr className="md:ml-3 mx-3 border-slate-400"></hr>
						<h3 className="md:text-xl  mx-4 text-md text-gray-700 font-semibold  md:ml-3 md:my-8 m-3 mt-4">
							Berita Terkini
						</h3>

						<ol class="relative">
							<ol class="relative border-l md:ml-8 ml-8 mr-4 border-gray-200 dark:border-gray-700">
								{posts &&
									posts.map((post) => (
										<li key={post.name} class="ml-6 md:mb-10 mb-6">
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
												<span className="py-2">{post.frontMatter.title}</span>
											</Link>
											<time className="block mb-2 mt-1 md:text-sm text-xs font-medium leading-none text-gray-600">
												{parseTime(post.frontMatter.date)}
											</time>
											<p class="text-base md:block hidden font-normal text-gray-500">
												{post.frontMatter.summary} ....{" "}
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
