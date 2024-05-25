import { fetchFilteredQuotes } from "@/lib/data";
import LikeButton from "./like-button";
import Quote from "./quote";

export default async function Quotes({
    tags,
    currentPage,
}: {
    tags: string;
    currentPage: number;
}) {
    const quotes = await fetchFilteredQuotes(tags, currentPage);
    // console.log(quotes);
    return (
        <div className="max-w-[1080px]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                {quotes.results.map((quote) => {
                    return <Quote quote={quote} key={quote._id} />;
                })}
            </div>
        </div>
    );
}
