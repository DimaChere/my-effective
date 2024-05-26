"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Main", smallName: "Main", href: "/" },
    {
        name: "Search by tags✨",
        smallName: "Search✨",
        href: "/tagAfforisms",
    },
    { name: "Liked afforisms❤️", smallName: "Liked❤️", href: "/liked" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className={
                            pathname == link.href
                                ? "underline hidden md:block"
                                : "hidden md:block"
                        }
                    >
                        {link.name}
                    </Link>
                    <Link
                        href={link.href}
                        className={
                            pathname == link.href
                                ? "underline block md:hidden"
                                : "block md:hidden"
                        }
                    >
                        {link.smallName}
                    </Link>
                </li>
            ))}
        </>
    );
}
