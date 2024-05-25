"use client";
import { useState, useEffect } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function LikeButton({ quoteId }: { quoteId: string }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likedQuotes: string[] =
            JSON.parse(localStorage.getItem("likedQuotes") || "") || [];

        if (likedQuotes.includes(quoteId)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [quoteId]);

    const handleLike = () => {
        const likedQuotes =
            JSON.parse(localStorage.getItem("likedQuotes") || "") || [];
        if (liked) {
            const updatedLikes = likedQuotes.filter(
                (id: string) => id !== quoteId
            );
            localStorage.setItem("likedQuotes", JSON.stringify(updatedLikes));
            setLiked(false);
        } else {
            likedQuotes.push(quoteId);
            localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
            setLiked(true);
        }
    };

    return (
        <button onClick={handleLike} className="w-10 md:w-6">
            {liked ? (
                <HeartIcon className="fill-red-500" />
            ) : (
                <HeartIconOutline />
            )}
        </button>
    );
}
