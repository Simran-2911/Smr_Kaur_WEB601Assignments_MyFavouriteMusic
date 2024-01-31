export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    type?: string;
    imgURL?: string;
    body: string;
    tags?: string[];
}