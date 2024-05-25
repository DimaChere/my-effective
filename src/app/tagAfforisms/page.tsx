import Pagination from "@/components/pagination";
import Quotes from "@/components/quotes";
import Search from "@/components/tagSearch/search";
import UsedTags from "@/components/tagSearch/used-tags";
import { fetchQuotesPages } from "@/lib/data";

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
            <form className="w-full flex flex-col items-center" method="GET">
                <div className="flex gap-2">
                    <Search />
                    <UsedTags tags={tags} />
                </div>
            </form>
            <Quotes tags={tags} currentPage={currentPage} />
            <Pagination totalPages={totalPages} />
        </main>
    );
}
