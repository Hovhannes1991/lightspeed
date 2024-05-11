export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    originalImageUrl: string;
}

export interface IProductsResponse {
    items: IProduct[];
}

export interface ICategory {
    id: number;
    name: string;
    imageUrl: string;
}

export interface ICategoriesResponse {
    items: ICategory[];
}


