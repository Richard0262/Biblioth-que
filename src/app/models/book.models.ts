export interface Book {
    id: string;
    title:string;
    authors:string[];
    thumbnail:string;
    description:string;
    status: 'to-read' | 'reading' | 'finished';
    pageCount?: number;
}