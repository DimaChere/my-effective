import { fetchTags } from "@/lib/data";
import { Tags } from "@/lib/deffinitions";

export default async function Page() {
    const tags: Tags[] = await fetchTags();
    return (
        <main className="mt-7 px-10 max-w-[1080px] mx-auto flex flex-1 flex-wrap gap-4">
            {tags.map((tag) => (
                <div
                    key={tag._id}
                    className="btn btn-neutral px-2 py-1 h-auto min-h-1 select-none"
                >
                    {tag.name}
                </div>
            ))}
        </main>
    );
}
