import Link from "next/link";
import Main from "./components/main";
import TopNav from "./components/topNav";
const server = process.env.SERVER;

const getPosts = async () => {
	const res = await fetch(`${server}/api/news`, { next: { revalidate: 7200 } });
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
										className="mb-8 text-xl font-semibold hover:text-blue-700"
									>
										<span className="py-2">{post.frontMatter.title}</span>
									</Link>
									<time className="block mb-2 mt-1 text-sm font-medium leading-none text-gray-600">
										{parseTime(post.frontMatter.date)}
									</time>
									<p class="text-base font-normal text-gray-500">
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
