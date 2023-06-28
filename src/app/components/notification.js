"use client";
import { useState, useEffect } from "react";

export default function Notification() {
	const [isMenuOpen, setIsMenuOpen] = useState();

    useEffect(() => {
        const isMenuOpen = localStorage.getItem("isMenuOpen");
        if (isMenuOpen === "false") {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
        const time = localStorage.getItem("time");
        if (Date.now() > time) {
            setIsMenuOpen(true);
        }

    }, []);

    const handleShow = () => {
        setIsMenuOpen(false);
        // save to local storage for 10 second
        localStorage.setItem("isMenuOpen", false);
        let time = Date.now() + 3600000;
        localStorage.setItem("time", time);
    }


	return isMenuOpen ? (
		<div className="ml-[250px] bg-[#2E51ED] h-9 md:flex hidden justify-center items-center text-white text-sm font-semibold shadow-sm">
			Bagi JF Statistisi yang menilaikan DUPAK di BPS Pusat, harap mengisi link
			berikut ini: &nbsp;
			<a className="underline" href="https://s.bps.go.id/lapordupakstatistisi">
				https://s.bps.go.id/lapordupakstatistisi
			</a>
			<button

				className="mx-2
                absolute
                right-0 
                "
				onClick={handleShow}
			>   
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-5 h-5      "
				>
					<path
						fillRule="evenodd"
						d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	) : (
		<div></div>
	);
}
