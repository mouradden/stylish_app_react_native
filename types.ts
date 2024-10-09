export interface splashType {
    id: number;
    title: string;
    picture: string;
    description: string; 
}
export interface CategoryType {
    id: number;
    title: string;
    picture: string;
}

export interface OfferCard {
    id: string;                          // Unique identifier for the card
    title: string;                       // Title of the offer
    image: any;                          // Image source, 'any' is used here because require() returns a module
    description: string[];               // Array of description strings
}