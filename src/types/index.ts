export interface Source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface Start {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface DrawNews {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface DrawSources {
    sources: Source[];
    status: string;
}
