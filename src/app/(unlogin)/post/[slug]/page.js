import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata({ params }) {
	let post = await getPost(params.slug);
	return {
		title: post.frontMatter.title + " - SI Jafung | Badan Pusat Statistik",
	};
}
const server = process.env.SERVER;

const getPost = async (params) => {
	const res = await fetch(`${server}/api/news/${params}`);
	return res.json();
};
const parseTime = (time) => {
	let date = new Date(time);
	return date.toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};
const readingTime = (arg) => {
	const content = String(ParseContent(arg));
	const wordsPerMinute = 200;
	const noOfWords = content.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};
const ParseContent = (content) => {
	return <MDXRemote source={content} />;
};

export default async function Page({ params }) {
	let post = await getPost(params.slug);
	let content = post.mdxSource;

	return (
		<>
			<article className="prose min-w-full py-3 pb-6 md:px-4 px-2">
				<MDXRemote source={content} />
				<div className="flex items-center gap-2 my-1 py-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-5 h-5"
					>
						<path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
						<path
							fill-rule="evenodd"
							d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
							clip-rule="evenodd"
						/>
					</svg>
					<time
						className="font-medium text-sm"
						dateTime={post.frontMatter.date}
					>
						{parseTime(post.frontMatter.date)}
					</time>
				</div>
				<h1 className="my-2 text-lg md:text-4xl md:leading-tight leading-snug">
					{post.frontMatter.title}
				</h1>
				<div className="mt-4 py-2 flex items-center justify-between">
					<div>
						<Link className="no-underline" href={"https://github.com/nubisub"}>
							<div className="mb-1 flex items-center space-x-2 ">
								<Image
									src="/admin.png"
									width="25"
									height="25"
									alt="avatar"
									className="rounded-full m-0"
								/>
								<span className="text-gray-700 text-sm font-medium">admin</span>
							</div>
						</Link>
					</div>
					<div className="flex items-center space-x-2 ">
						<div className="text-gray-500 text-sm ">
							{readingTime(content)} min read
						</div>
					</div>
				</div>
				<MDXRemote source={post.content} />
			</article>
		</>
	);
}
export async function generateStaticParams() {
	const res = await fetch(`${server}/api/news`);
	const posts = await res.json();
	return posts.posts.map((post) => ({ slug: post.slug }));
}
