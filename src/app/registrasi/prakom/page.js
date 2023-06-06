"use client";

import Image from "next/image";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { EditIcon } from "@heroicons/react/outline";
import { DuplicateIcon } from "@heroicons/react/outline";

export default function Home() {
	return (
		<main className="absolute min-w-[calc(100vw-250px)] min-h-screen left-[250px] ">
			<h1 className="text-3xl font-bold">Prakom</h1>
		</main>
	);
}
