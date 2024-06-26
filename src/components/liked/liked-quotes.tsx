"use client";
import { useEffect, useState } from "react";
import { fetchLikedQuotes } from "@/lib/data";
import Quote from "@/components/quote";
import { QuoteById } from "@/lib/deffinitions";

export default function LikedQuotes() {
    const [quotes, setQuotes] = useState<QuoteById[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let likedQuotesIds: string[] = [];
            try {
                likedQuotesIds = JSON.parse(
                    localStorage.getItem("likedQuotes") || "[]"
                );
            } catch (error) {
                console.error("Error parsing JSON from localStorage", error);
            }
            fetchLikedQuotes(likedQuotesIds)
                .then((data) => {
                    setQuotes(data);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-[1080px]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                {quotes.map((quote) => {
                    return <Quote quote={quote} key={quote._id} />;
                })}
            </div>
        </div>
    );
}
