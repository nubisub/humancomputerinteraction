const fs = require("fs");
const globby = require("globby");
const matter = require("gray-matter");
const prettier = require("prettier");
const { env } = require("process");
const siteMetadata = "https://sijafung-bps.vercel.app/";

async function generateSitemap() {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
	const pages = await globby([
		"./src/app/**/page.js",
		"./src/data/**/*.mdx",
		"!./src/app/api",
		"!./src/app/auth",
		"!./src/app/login",
		"!./src/app/lib",
		"!./src/app/search",
		"!./src/app/(unlogin)/post/[slug]/page.js",
	]);
	const pagesSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map((page) => {
				const path = page
					.replace("./src/data/news", "post")
					.replace(".mdx", "")
					.replace("./src/app/", "")
					.replace("(unlogin)/", "")
					.replace("page.js", "");

				const route = path === "/index" ? "" : path;
				return `
            <url>
                <loc>${siteMetadata}${route}</loc>
            </url>
        `;
			})
			.join("")}
    </urlset>
    `;
	const formatted = prettier.format(pagesSitemap, {
        ...prettierConfig,
		parser: "html",
	});
	fs.writeFileSync("public/sitemap.xml", formatted);
}
generateSitemap();