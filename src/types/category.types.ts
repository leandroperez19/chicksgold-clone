export interface Category {
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
    games: Game[];
}

export interface Game {
    id: string;
    name: string;
    shortName?: string;
    slug: string;
    icon: {
        url: string;
    };
    isTrending?: boolean;
}
