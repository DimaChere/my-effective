"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Main", href: "/" },
    {
        name: "Search by tags✨",
        href: "/tagAfforisms",
    },
    { name: "Liked afforisms❤️", href: "/liked" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className={pathname == link.href ? "underline" : ""}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </>
    );
}
