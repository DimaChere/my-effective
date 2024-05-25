import { fetchTags } from "@/lib/data";
import { Tags } from "@/lib/deffinitions";
import Link from "next/link";

export default async function Page() {
    const tags: Tags[] = await fetchTags();
    return (
        <main className="mt-7 px-10 max-w-[1080px] mx-auto flex flex-1 flex-wrap gap-4">
            {tags.map((tag) => (
                <Link
                    key={tag._id}
                    className="btn btn-neutral px-2 py-1 h-auto min-h-1 select-none"
                    href={`/tagAfforisms?tags=${tag.slug}`}
                >
                    {tag.name}
                </Link>
            ))}
        </main>
    );
}
