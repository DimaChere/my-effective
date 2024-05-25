"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function UsedTags({ tags }: { tags: string }) {
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();

    const removeTagFromURL = (tag: string) => {
        const params = new URLSearchParams(searchParams);
        let existingTags = params.get("tags")
            ? params.get("tags")?.split(",")
            : [];

        if (existingTags) {
            existingTags = existingTags.filter((t) => t !== tag);
            console.log(`params: ${existingTags}`);
            params.set("tags", existingTags.join(","));
            params.set("page", "1");
            replace(`${pathname}?${params.toString()}`);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {tags &&
                tags.split(",").map((tag) => (
                    <div
                        key={tag}
                        className="btn btn-ghost px-2 py-1 h-auto min-h-1"
                        onClick={() => removeTagFromURL(tag)}
                    >
                        <XMarkIcon className="h-4" />
                        {tag}
                    </div>
                ))}
        </div>
    );
}
