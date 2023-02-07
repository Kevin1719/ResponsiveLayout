export type Links = {
    name: string;
    submenu: boolean;
    path: string;
    sublinks: sublink[]
}[];

export type sublink = {
    Head: string;
    sublink: {name: string; link: string}[];
};