import { QuoteById, QuoteResult } from "@/lib/deffinitions";
import LikeButton from "@/components/like-button";

export default function Quote({ quote }: { quote: QuoteResult | QuoteById }) {
    return (
        <div className="relative flex flex-col justify-between border border-1 rounded-md px-5 pt-2 pb-5 gap-2 gradient">
            <q className="">{quote.content}</q>
            <div className="flex flex-wrap gap-3">
                {quote.tags.map((tag) => (
                    <div key={tag} className="badge badge-neutral">
                        {tag}
                    </div>
                ))}
            </div>
            <p className="text-xs absolute bottom-1 right-2">{quote.author}</p>
            <LikeButton quoteId={quote._id} />
        </div>
    );
}
