import Link from "next/link";

const links = [
    { name: "Main", href: "/" },
    {
        name: "Search by tags",
        href: "/tagAfforisms",
    },
    { name: "Liked afforisms", href: "/liked" },
    { name: "All tags", href: "/allTags" },
];

export default function Footer() {
    return (
        <footer className="w-full max-w-[1080px] flex flex-col md:flex-row justify-around mx-auto h-36 my-12 px-28">
            {links.map((link) => (
                <Link key={link.name} href={link.href} className="underline">
                    {link.name}
                </Link>
            ))}
        </footer>
    );
}
