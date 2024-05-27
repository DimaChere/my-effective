import Pagination from "@/components/pagination";
import Quotes from "@/components/quotes";
import Search from "@/components/tagSearch/search";
import UsedTags from "@/components/tagSearch/used-tags";
import { fetchQuotesPages } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search",
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        tags?: string;
        page?: string;
    };
}) {
    const tags = searchParams?.tags || "";
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchQuotesPages(tags);
    return (
        <main className="max-w-[1080px] px-7 flex flex-1 flex-col gap-7 items-center mx-auto">
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                    <Search />
                    <UsedTags tags={tags} />
                </div>
            </div>
            <Quotes tags={tags} currentPage={currentPage} />
            <Pagination totalPages={totalPages} />
        </main>
    );
}
