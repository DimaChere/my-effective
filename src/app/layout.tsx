import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Afforismix",
    description: "Site for afforism searching",
    icons: {
        icon: "./favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} flex flex-col gap-7 min-h-[100vh]`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
