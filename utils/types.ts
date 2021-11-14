import { RichTextBlock, Link as PrismicLink } from "prismic-reactjs";

interface PrismicImage {
    dimensions?: { width: number, height: number };
    alt?: string | null;
    copyright?: string | boolean | null;
    url?: string;
}

interface Reason {
    header: RichTextBlock[];
    body: RichTextBlock[];
    summary: string;
    image: PrismicImage;
}

interface NewsPiece {
    date: string;
    article_title: RichTextBlock[];
    link_to_article: PrismicLink;
}

export type {
    PrismicImage,
    PrismicLink,
    Reason,
    NewsPiece,
}