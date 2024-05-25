export interface Authors {
    // The number of results included in this response.
    count: number;
    // The total number of results matching this request.
    totalCount: number;
    // The current page number
    page: number;
    // The total number of pages matching this request
    totalPages: number;
    // The 1-based index of the last result included in this response. This shows the
    // current pagination offset.
    lastItemIndex: number | null;
    // The array of authors
    results: Array<{
        // A unique id for this author
        _id: string;
        // A brief, one paragraph bio of the author. Source: wiki API
        bio: string;
        // A one-line description of the author. Typically it is the person's primary
        // occupation or what they are know for.
        description: string;
        // The link to the author's wikipedia page or official website
        link: string;
        // The authors full name
        name: string;
        // A slug is a URL-friendly ID derived from the authors name. It can be used as
        slug: string;
        // The number of quotes by this author
        quoteCount: string;
    }>;
}

export interface Tags {
    _id: string;
    name: string;
    slug: string;
    quoteCount: number;
    dateAdded: string;
    dateModified: string;
}

export interface Quotes {
    // The number of quotes returned in this response
    count: number;
    // The total number of quotes matching this query
    totalCount: number;
    // The current page number
    page: number;
    // The total number of pages matching this request
    totalPages: number;
    // The 1-based index of the last result included in the current response.
    lastItemIndex: number;
    // The array of quotes
    results: Array<{
        _id: string;
        // The quotation text
        content: string;
        // The full name of the author
        author: string;
        // The `slug` of the quote author
        authorSlug: string;
        // The length of quote (number of characters)
        length: number;
        // An array of tag names for this quote
        tags: string[];
    }>;
}

export interface QuoteResult {
    _id: string;
    // The quotation text
    content: string;
    // The full name of the author
    author: string;
    // The `slug` of the quote author
    authorSlug: string;
    // The length of quote (number of characters)
    length: number;
    // An array of tag names for this quote
    tags: string[];
}

export interface QuoteById {
    _id: string;
    // The quotation text
    content: string;
    // The full name of the author
    author: string;
    // The length of quote (number of characters)
    length: number;
    // An array of tag names for this quote
    tags: string[];
}
