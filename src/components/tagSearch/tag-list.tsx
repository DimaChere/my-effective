"use client";
import { useEffect, useState } from "react";
import { tagController } from "@/lib/data";
import { Tags } from "@/lib/deffinitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TagList({ tag }: { tag: string }) {
    const [tagList, setTagList] = useState<Tags[]>([]);
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    useEffect(() => {
        const fetchTags = async () => {
            const tags = await tagController(tag.toLowerCase());
            setTagList(tags);
        };

        fetchTags();
    }, [tag]);

    const addTagToURL = (newTag: string) => {
        const params = new URLSearchParams(searchParams);

        const existingTags = params.get("tags")
            ? params.get("tags")?.split(",")
            : [];

        if (existingTags && !existingTags.includes(newTag)) {
            existingTags.push(newTag);
            params.set("tags", existingTags.join(","));

            console.log(`params: ${params}`);

            replace(`${pathname}?${params.toString()}`);
        }
    };

    return (
        <div className="flex w-72 flex-wrap gap-2">
            {tagList.slice(0, 6).map((tag) => (
                <div key={tag._id} onClick={() => addTagToURL(tag.slug)}>
                    <div className="btn btn-primary px-2 py-1 h-auto min-h-1 select-none">
                        {tag.name}
                    </div>
                </div>
            ))}
        </div>
    );
}
