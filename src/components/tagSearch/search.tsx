"use client";

import { fetchTags, tagController } from "@/lib/data";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import TagList from "@/components/tagSearch/tag-list";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
    const [tag, setTag] = useState("");

    const handleSearch = useDebouncedCallback((tag: string) => {
        console.log(`Searching... ${tag}`);
        setTag(tag);
    }, 300);

    return (
        <div className="flex flex-col gap-5">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </label>
            <TagList tag={tag} />
        </div>
    );
}
