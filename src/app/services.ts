export interface Services {
    id:number;
    name:string;
    photo:string;
    description:string;
    link:string;
}
export interface Slide {
    imgSrc: string;
    imgAlt: string;
}
export interface Proeqtireba {
    pcont11:string;
    pcontli:string[];
}
export interface Partniorebi {
    id:number;
    name:string;
    image:string;
}

export interface News {
    id: number;
  title: string;
  content: string;
  image:string;
}
export interface Mshenebloba {
    pcont11:string;
    pcontli:string[];
}
export interface Gundi {
    id:number,
    name:string,
    surname:string,
    position:string,
    img:string,
}
export interface Country {
    id:number,
    name:string,
    code:string,
    img:string,
}

export interface AboutCompany {
    id:number,
    satauri:string,
    sataurisTxt:string,

    qveda:string,
    qveda1:string,
    qveda2:string,
    qveda3:string,

    sec1Pic1:string,
    sec1Pic2:string,
    sec1Pic3:string,

    sec2Pic1:string,
    sec2Pic2:string,
    sec2Pic3:string,
}
