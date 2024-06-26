import Quotes from "@/components/quotes";
import Pagination from "@/components/pagination";
import { fetchQuotesPages } from "@/lib/data";

export default async function Home({
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
            <Quotes tags={tags} currentPage={currentPage} />
            <Pagination totalPages={totalPages} />
        </main>
    );
}
