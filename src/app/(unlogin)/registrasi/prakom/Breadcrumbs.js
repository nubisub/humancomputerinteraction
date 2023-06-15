import Link from "next/link";
export default function Breadcrumbs(props) {
	return (
		<nav
			className="flex bg-blue-50 text-blue-700 border border-blue-200 py-3 px-5 rounded-lg mb-6"
			aria-label="Breadcrumb"
		>
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<Link
						href="/"
						className="text-blue-700 hover:text-blue-900 inline-flex gap-x-1.5 items-center font-semibold"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<span>Home</span>
					</Link>
				</li>
				<li>
					<div class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>

						<Link
							href={props.props[1].href}
							className="text-blue-700 hover:text-blue-900 ml-1 md:ml-2 text-sm font-medium"
						>
							{props.props[0].name}
						</Link>
					</div>
				</li>
				<li aria-current="page">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
						<span className="text-blue-400 ml-1 md:ml-2 text-sm font-medium">
							{props.props[1].name}
						</span>
					</div>
				</li>
			</ol>
		</nav>
	);
}
