import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata({ params }) {
	return {
		title: params.slug + " | SI Jafung BPS",
	};
}
const server = process.env.SERVER;

const getPost = async (params) => {
	const res = await fetch(
		`${server}/api/news/${params}`
	);
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
	const  content = String(ParseContent(arg));
	const wordsPerMinute = 200;
	const noOfWords = content.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};
const ParseContent = (content) => {
	return <MDXRemote source={content} />
};




export default async function Page({ params }) {
	let post = await getPost(params.slug);
	let content = post.mdxSource;

	return (
		<>
			<article className="prose min-w-full py-3">
				<MDXRemote source={content} />
				<time className="font-medium text-sm" dateTime={post.frontMatter.date}>
					{parseTime(post.frontMatter.date)}
				</time>
				<h1 className="my-2 leading-tight ">{post.frontMatter.title}</h1>
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
