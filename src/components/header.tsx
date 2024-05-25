import Image from "next/image";
import NavLinks from "@/components/nav-links";
import Link from "next/link";

export default function Header() {
    return (
        <header className="max-w-[1080px] w-full mx-auto">
            <div className="navbar bg-base-100">
                <div className="flex-none hidden sm:block">
                    <Link className="btn btn-ghost text-xl" href="/">
                        <Image
                            alt="Logo"
                            src="/favicon.png"
                            width={30}
                            height={30}
                            className="w-auto h-auto"
                        />
                        <span className="hidden md:block">Afforismix</span>
                    </Link>
                </div>
                <nav className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLinks />
                    </ul>
                </nav>
            </div>
        </header>
    );
}
