import LikedQuotes from "@/components/liked/liked-quotes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liked",
};

export default function page() {
    return (
        <main className="max-w-[1080px] px-7 flex flex-1 flex-col gap-7 items-center mx-auto">
            <LikedQuotes />
        </main>
    );
}
