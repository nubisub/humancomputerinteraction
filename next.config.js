/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	// webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };
		return config;
	},
	reactStrictMode: true,
	// distDir: "dist",
	// output: 'export',
	env: {
		SERVER: process.env.SERVER,
	},
};


const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
