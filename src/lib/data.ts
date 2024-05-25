import { QuoteById, Quotes, Tags } from "@/lib/deffinitions";

const api = "https://api.quotable.io";
let tags: Tags[] = [];
export async function fetchTags() {
    if (tags.length) {
        return tags;
    }
    const link = api + "/tags";
    const res = await fetch(link);
    const data: Tags[] = await res.json();
    return data;
}

export async function tagController(tag: string) {
    if (tags.length) {
        return tags.filter((t) => !t.slug.indexOf(tag));
    } else {
        tags = await fetchTags();
        return tagController(tag);
    }
}

export async function getQuotes() {
    const link = api + "/quotes";
    const res = await fetch(link);
    const data: Quotes = await res.json();
    return data;
}

export async function fetchFilteredQuotes(tags: string, currentPage: number) {
    try {
        const pageLine =
            currentPage > 1 ? `/quotes?page=${currentPage}` : "/quotes";
        const tagLine =
            (pageLine == "/quotes" ? "?tags=" : "&tags=") + tags.toLowerCase();
        const link = api + pageLine + tagLine;

        const res = await fetch(link);
        const data: Quotes = await res.json();
        return data;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Не удалость получить данные.");
    }
}

export async function fetchQuotesPages(query: string) {
    try {
        const link = api + (query == "" ? "/quotes" : "/quotes?tags=" + query);
        const res = await fetch(link);
        const data: Quotes = await res.json();
        return data.totalPages;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Не удалость получить данные.");
    }
}

export async function fetchLikedQuotes(quotesIds: string[]) {
    try {
        let result: QuoteById[] = [];
        for (let quoteId of quotesIds) {
            const link = api + "/quotes/" + quoteId;
            const res = await fetch(link);
            const data: QuoteById = await res.json();
            result.push(data);
        }
        return result;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Не удалость получить данные.");
    }
}
