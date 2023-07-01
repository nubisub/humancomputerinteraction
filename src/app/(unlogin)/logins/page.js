
'use client'
import { signIn } from "next-auth/react";
const server = process.env.SERVER;

const getProviders = async () => {
	const res = await fetch(`${server}/api/auth/providers`);
	return res.json();
};

export default async function SignIn() {
	const providers = await getProviders();
	return (
		<>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						onClick={() => signIn(provider.id)}
					>
						Sign in with {provider.name}
					</button>
				</div>
			))}
		</>
	);
}
