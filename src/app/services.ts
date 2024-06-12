export interface Services {
    id:number;
    name:string;
    description:string;
    nameEn:string;
    descriptionEN:string;
}
export interface Slide {
    imgSrc: string;
    imgAlt: string;
}
export interface Proeqtireba {
    pcont11:string;
    pcontli:string[];
    pcont11EN:string;
    pcontliEN:string[];

    hoverList:string[];
    hoverListEN:string[];
}
export interface Partniorebi {
    id:number;
    name:string;
    image:string;
}

export interface News {
    id: number;
  title: string;
  title2: string;
  title3: string;
  content: string;
  content2: string;
  content3: string;
  titleEN:string;
  titleEN2:string;
  titleEN3:string;
  contentEN:string;
  contentEN2:string;
  contentEN3:string;
  image:string;

}
export interface Mshenebloba {
    pcont11:string;
    pcontli:string[];
    pcont11EN:string;
    pcontliEN:string[];
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
    title_GEO:string,
    title_EN:string,

    company_info_GEO:string,
    company_info_EN:string,

    company_info_1_GEO:string,
    company_info_1_EN:string,


    description:any,
}

export interface project{
    id:number,
    title:string,
    titleEn:string,

    category:string,
    categoryEn:string,

    text:string,
    textEn:string,

    image:string[],
    video:string,
}
