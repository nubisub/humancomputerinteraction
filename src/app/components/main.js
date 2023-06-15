export default function Main({ children }) {
	return (
		<>
			<div className="flex flex-col bg-white md:px-16 md:py-8 py-0 px-4 rounded-lg my-4 shadow-lg">
				{children}
			</div>
		</>
	);
}
