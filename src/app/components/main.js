export default function Main({ children }) {
	return (
		<>
			<div className="flex flex-col bg-white md:px-16 px-10 py-8 rounded-lg my-4 shadow-lg">
				{children}
			</div>
		</>
	);
}
