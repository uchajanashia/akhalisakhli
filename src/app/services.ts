export interface Services {
    id:number;
    name:string;
    description:string;
    nameEn:string;
    descriptionEN:string;

    priority:number;
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
    id:string,
    title: string,
    titleEn: string,
    shortText: string,
    shortTextEn:string,
    text: string,
    textEn: string,
    image: string,
    priority:number,


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

    nameEn:string,
    surnameEn:string,
    positionEn:string,
    priority:number,
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
    priority:number,
}
export interface MisionValueVision{
    MissionName:string,
    MissionDescription:string,
    VisionName:string,
    VisionDescription:string,
    ValueName:string,
    Name3:string,
    Description3:string,
    Name2:string,
    Description2:string,
    Name1:string,
    Description1:string,

    MissionNameEn:string,
    MissionDescriptionEn:string,
    VisionNameEn:string,
    VisionDescriptionEn:string,
    ValueNameEn:string,
    Name3En:string,
    Description3En:string,
    Name2En:string,
    Description2En:string,
    Name1En:string,
    Description1En:string,

    priority:number,

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
    priority:number,
}

export interface iService{
    id: any;
    title: string;
    text: string;
    listservice: string[];
    titleEn: string;
    textEn: string;
    listserviceEn: string[];
    
}