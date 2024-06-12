import { Injectable } from '@angular/core';
import { Services, project } from './services';
import { Partniorebi } from './services';
import { Gundi } from './services';
import { Country } from './services';
import { AboutCompany } from './services';
import { Proeqtireba } from './services';
import { Mshenebloba } from './services';
import { News } from './services';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceListService {


  protected partniorebiList: Partniorebi[] = [
    {
      id: 1,
      name: 'Bank Of Georgia',
      image: '../../assets/pics/partniorebi/Bank-of-Georgia white.png',
    },
    {
      id: 2,
      name: 'Bricorama',
      image: '../../assets/pics/partniorebi/bricorama.png',
    },
    {
      id: 3,
      name: 'Demisi',
      image: '../../assets/pics/partniorebi/Demasi.png',
    },
    {
      id: 4,
      name: 'Geometal',
      image: '../../assets/pics/partniorebi/geometal.png',
    },
    {
      id: 5,
      name: 'Gorgia',
      image: '../../assets/pics/partniorebi/gorgia-logo.png',
    },
    {
      id: 6,
      name: 'Ideal',
      image: '../../assets/pics/partniorebi/Ideal.png',
    },
    {
      id: 7,
      name: 'Jaoken',
      image: '../../assets/pics/partniorebi/jaokeni.png',
    },
    {
      id: 8,
      name: 'Knauf',
      image: '../../assets/pics/partniorebi/Knauf_logo.png',
    },
    {
      id: 9,
      name: 'Maxterm',
      image: '../../assets/pics/partniorebi/maxtermi.png',
    },
    {
      id: 10,
      name: 'TBC',
      image: '../../assets/pics/partniorebi/TBC white.png',
    },
    {
      id: 11,
      name: 'Termoindustry',
      image: '../../assets/pics/partniorebi/termoindustria copy.png',
    },
    {
      id: 12,
      name: 'x2white',
      image: '../../assets/pics/partniorebi/x2white.png',
    },
  ];
  protected gundiList: Gundi[] = [
    {
      id: 1,
      name: 'ილია',
      surname: 'ტყეშელაშვილი',
      position: 'დამფუძნებელი',
      img: 'assets/pics/group/ilia.jpg',
    },
    {
      id: 2,
      name: 'სოფიო',
      surname: 'ჩიტრეკაშვილი',
      position: 'დირექტორი',
      img: 'assets/pics/group/sofio.jpg',
    },
    {
      id: 3,
      name: 'თეკლა',
      surname: 'საცერაძე',
      position: 'პროექტების მენეჯერი',
      img: 'assets/pics/group/tekla.jpg',
    },
    {
      id: 4,
      name: 'ივანე',
      surname: 'ბლიაძე',
      position: 'მშენებელი',
      img: 'assets/pics/group/ivane.jpg',
    },
    {
      id: 5,
      name: 'გურამ',
      surname: 'დევიძე',
      position: 'არქიტექტორი',
      img: 'assets/pics/group/guram.jpg',
    },
  ];
  protected gundiListEn: Gundi[] = [
    {
      id: 1,
      name: 'Ilia',
      surname: 'Tkeshelashvili',
      position: 'The founder',
      img: 'assets/pics/group/ilia.jpg',
    },
    {
      id: 2,
      name: 'Sofia',
      surname: 'Chitrekashvili',
      position: 'The director',
      img: 'assets/pics/group/sofio.jpg',
    },
    {
      id: 3,
      name: 'Tekla',
      surname: 'Satseradze',
      position: 'Project manager',
      img: 'assets/pics/group/tekla.jpg',
    },
    {
      id: 4,
      name: 'Ivane',
      surname: 'Bliadze',
      position: 'Builder',
      img: 'assets/pics/group/ivane.jpg',
    },
    {
      id: 5,
      name: 'Guram',
      surname: 'Devidze',
      position: 'An architect',
      img: 'assets/pics/group/guram.jpg',
    },
  ];

  protected aboutCompanyList: AboutCompany[] = [
    {
      id: 1,
      title_GEO: 'ჩვენს შესახებ',
      title_EN: 'About Our Company',
      company_info_GEO: 'ჩვენ შესახებ მეტი ინფორმაცია',
      company_info_EN: 'Learn more about our company',
      company_info_1_GEO: 'დამატებითი ინფორმაცია კომპანიის შესახებ',
      company_info_1_EN: 'Additional company information',
      description: ''
    },
  ];
  protected MXFList: AboutCompany[] = [
    {
      id: 1,
      title_GEO: 'ჩვენს შესახებ',
      title_EN: 'About Our Company',
      company_info_GEO: 'ჩვენ შესახებ მეტი ინფორმაცია',
      company_info_EN: 'Learn more about our company',
      company_info_1_GEO: 'დამატებითი ინფორმაცია კომპანიის შესახებ',
      company_info_1_EN: 'Additional company information',
      description: ''
    },
  ];

  protected proeqtirebaTxt: Proeqtireba[] = [
    {
      pcont11:
        'პროექტირებას ტერიტორიის დეტალური ანალიზით ვიწყებთ, ვამუშავებთ წინასაპროექტო  კონცეფციას, ვათანხმებთ  დამკვეთთან ესკიზს, ვამზადებთ ყველა  საჭირო საპროექტო დოკუმენტაციას  და  მუნუციპალიტეტიდან  ვიღებთ  მშენებლობის ნებართვას.პროექტირების პროცესის ეტაპებია:',
      pcontli: [
        'წინასაპროექტო კონცეფციის შექმნა;',
        'ტოპოგრაფიული რუკის მომზადება;',
        'მწვანე ნარგავების ხარისხობრივი შეფასება და საექსპერტო დასკვნის მომზადება (საჭიროების შემთხვევაში);',
        'საინჟინრო-გეოლოგიური ანგარიშის და საექსპერტო დასკვნის მომზადება;',
        'მიწის ნაკვეთის სამშენებლოდ გამოყენების პირობების დადგენა (გაპი);',
        'პროექტის ესკიზის შეთანხმება დამკვეთთან;',
        'საგზაო მოძრაობის ორგანიზების სქემის შეთანხმება;',
        'ენერგოეფექტურობის დეკალარაციის მომზადება;',
        'არქიტექტურული პროექტის მომზადება:',
        'კონსტრუქციური პროექტის მომზადება;',
        'კონსტრუქციური პროექტის საექსპერტო შეფასება;',
        'მშენებლობის ორგანიზების პროექტის მომზადება (მოპი);',
        'დამტკიცებული პროექტის ხარჯთაღრიცხვის გაწერა;',
        'პროექტის შეთანხმება შესაბამის მუნიციპალიტებთან და მშენებლობის ნებართვის აღება.',
      ],
      pcont11EN:
        'Creating project\nWe start designing with a detailed analysis of the territory, develop a pre-design concept, agree on a sketch with the customer, prepare all the necessary project documentation and obtain a building permit from the municipality.\n\nThe stages of the design process are:',
      pcontliEN: [
        'Creating a concept;',
        'Preparation of a topographic map;',
        'Qualitative evaluation of green plantings and preparation of expert opinion (if necessary);',
        'Preparation of engineering-geological report and expert report;',
        'Determination of the conditions for the use of the land plot for construction (gap);',
        'Project sketch agreement with the customer;',
        'Agreement on the traffic organization scheme;',
        'Preparation of energy efficiency declaration;',
        'Preparation of an architectural project:',
        'Construction project preparation;',
        'Expert evaluation of the construction project;',
        'Preparation of construction organization project (mop);',
        'Issuing the cost estimate of the approved project;',
        'Project agreement with the relevant municipalities and obtaining a building permit.',
      ],

      hoverList: [
        'ტერიტორიის ანალიზი;',
        'წინასაპროექტო კონცეფციის მომზადება;',
        'გენერალური გეგმის ზონირება და შენობის განთავსების იდენტიფიცირება;',
        'კოეფიციენტებისა და დამკვეთის მოთხოვნების მიხედვით შენობის ზონირების გაკეთება;',
        'სტილისა და გამოყენებული მასალის მიხედვით წინასაპროექტო ფასადების შექმნა;',
        'საპროექტო დავალების მიხედვით დეტალური გეგმარების შექმნა;',
        'ავეჯის განლაგების გეგმის მომზადება;',
        'ფასადზე გამოყენებული მასალების სპეციფიკაცია;',
        'კარ-ფანჯრებისა და მოაჯირების სპეციფიკაცია;',
        'ღობის, ჭიშკრისა და ავტოსადგომის პროექტირება;',
        'რენდერებისა და ფოტომონტაჟების მომზადება;',
        'ტექნიკურ-ეკონომიკური მაჩვენებლებისა და განმარტებითი ბარათის გაწერა;',
        'არქიტექურული ალბომის შეკვრა და www.tas.ge –ზე ატვირთვა.',
      ],

      hoverListEN: [
        'Territory analysis;',
        'Preparation of pre-project concept;',
        'General plan zoning and building location identification;',
        "Zoning the building according to the coefficients and customer's requirements;",
        'Creation of pre-project facades according to the style and material used;',
        'Creation of detailed planning according to project task;',
        'Preparation of furniture arrangement plan;',
        'Specification of materials used on the facade;',
        'Specification of doors, windows and railings;',
        'Designing fence, gate and parking lot;',
        'Preparation of renderings and photomontages;',
        'Issuance of technical and economic indicators and explanatory card;',
        'Binding of the architectural album and uploading it to www.tas.ge.',
      ],
    },
  ];

  protected msheneblobaList: Mshenebloba[] = [
    {
      pcont11:
        'მშენებლობის პროცესის სწორი და თანმიმდევრული კოორდინაციით მიიღწევა პროექტის წარმატება. სამშენებლო სამუშაოების ეტაპებია:',
      pcontli: [
        'პროექტის მენეჯერის შერჩევა;',
        'მშენებელთა ჯგუფის დამტკიცება;',
        'მშენებლობის ორგანიზების სქემის მომზადება;',
        'კალენდარული გეგმა-გრაფიკის მომზადება;',
        'ხარჯთაღრიცხვის დამტკიცება;',
        'ობიექტის სამშენებლო ტექნიკით უზრუნველყოფა;',
        'მასალის შესყიდვების და მიწოდების უზრუნველყოფა;',
        'ხარისხის პერიოდული მონიტორინგი;',
        'ვადების სისტემატიური კონტროლი;',
        'უსაფრთხოების კონტროლი;',
        'სამშენებლო მოედნის დაცვის უზრუნველყოფა;',
        'დასრულებული მშენებლობის დამკვეთისთვის ჩაბარება.',
      ],
      pcont11EN:
        'Correct and consistent coordination of the construction process will ensure the success of the project.The stages of construction works are:',
      pcontliEN: [
        'Selection of the project manager;',
        'Approval of the group of builders;',
        'Preparation of construction organization scheme;',
        'Preparation of calendar plan-schedule;',
        'Approval of the cost estimate;',
        'Providing the facility with construction equipment;',
        'Ensuring procurement and delivery of material;',
        'Periodic quality monitoring;',
        'Systematic control of deadlines;',
        'Security control;',
        'Ensuring protection of the construction site;',
        'Handing over the completed construction to the customer.',
      ],
    },
  ];
  protected interieriList: Mshenebloba[] = [
    {
      pcont11:
        'თქვენი ხედვის გასაცოცხლებლად გთავაზობთ დეტალურ კონსულტაციას, სივრცის დაგეგმვას და 3D ვიზუალიზაციას. ინტერიერის დიზაინის შექმნის ეტაპებია:',
      pcontli: [
        'წინასაპროექტო სტილისტური კონცეფციის შექმნა;',
        'სივრცის ფუნქციური გეგმის მომზადება;',
        'ავეჯის განლაგების გეგმის მომზადება;',
        'შიდა სივრცის აღქმა ვირტუალური რეალობის სათვალით (VR);',
        'ჩაშენებული ავეჯის ტექნიკური ნახაზების მომზადება;',
        'სამზარეულოს პროექტის შექმნა;',
        'ჭერისა და განათების  გეგმის მომზადება;',
        'შიდა ელექტროობის გეგმის მომზადება;',
        'კედლების განშლა ტექსტურებისა (ფერის კოდები) და მათი ფართების მითითებით;',
        'იატაკზე გამოყენებული მასალების განლაგების შემუშავება;',
        'კერამიკული ფილების წყობის გეგმებისა და განშლების შექმნა;',
        'რადიატორებისა და კონდიციონერების განაწილება;',
        'მასალების შერჩევა დამკვეთის ბიუჯეტის გათვალისწინებით;',
        'ფარდების, ჟალუზების და საკიდების შერჩევა;',
        'დეკორატიული ელემენტებისა და მცენარეების შერჩევა;',
        '3D ვიზუალიზაცია.',
      ],
      pcont11EN:
        'We offer detailed consultation, space planning and 3D visualization to bring your vision to life. The stages of creating an interior design are:',
      pcontliEN: [
        'Creating a pre-project stylistic concept;',
        'Preparation of the functional plan of the space;',
        'Preparation of furniture arrangement plan;',
        'Perception of internal space with virtual reality glasses (VR);',
        'Preparation of technical drawings of built-in furniture;',
        'Creating a kitchen project;',
        'Preparation of ceiling and lighting plan;',
        'Preparation of internal electricity plan;',
        'Decomposition of walls by specifying textures (color codes) and their areas;',
        'Development of layout of materials used on the floor;',
        'Creation of ceramic tile stacking plans and layouts;',
        'Distribution of radiators and air conditioners;',
        "Selection of materials considering the customer's budget;",
        'Selection of curtains, blinds and hangers;',
        'Selection of decorative elements and plants;',
        '3D visualization.',
      ],
    },
  ];
  protected remontiList: Mshenebloba[] = [
    {
      pcont11:
        'რემონტი გადამწყვეტ როლს თამაშობს ინტერიერის დიზაინის კონცეფციის რეალობად გარდაქმნაში.პირველი ეტაპია არსებული სივრცის საფუძვლიანი შეფასება, რის შედეგადაც ვადგენთ დეტალურ გეგმას და მთელი პროცესის განმავლობაში ვახორციელებთ  მიმდინარე სამუშაოების  ხარისხის კონტროლს.სარემონტო მომსახურების ეტაპებია:',
      pcontli: [
        'ინტერიერის დიზაინის პროექტის მომზადება;',
        'პროექტის მენეჯერის დანიშვნა;',
        'ხელოსნების  ჯგუფის დამტკიცება;',
        'კალენდარული გეგმა-გრაფიკის მომზადება;',
        'ხარჯთაღრიცხვის მომზადება;',
        'მასალის შესყიდვების და მიწოდების უზრუნველყოფა;',
        'ხარისხის პერიოდული მონიტორინგი;',
        'ვადების სისტემატიური კონტროლი;',
        'დასრულებული რემონტის დამკვეთისთვის ჩაბარება.'
      ],
      pcont11EN:
        'Renovation plays a crucial role in the concept of interior design to bring to reality. The first stage is a thorough assessment of the existing space, as a result We draw up a detailed plan and during the entire process we control the quality of ongoing works.',
      pcontliEN: [
        'Preparation of interior design project;',
        'Appointment of project manager;',
        'Approval of a group of craftsmen;',
        'Preparation of calendar plan-schedule;',
        'Preparation of cost estimates;',
        'Ensuring procurement and delivery of material;',
        'Periodic quality monitoring;',
        'Systematic control of deadlines;',
        'Handing over the completed repairs to the customer.',
      ],
    },
  ];
  protected landshaftiList: Mshenebloba[] = [
    {
      pcont11:
        'ლანდშაფტის დიზაინი მოიცავს გარე სივრცეების დაგეგმვას, დიზაინსა და მართვას. ლანდშაფტის დიზაინის მთავარი მიზანია შექმნას ესთეტიურად სასიამოვნო, ფუნქციონალური და მდგრადი გარემო.ლანდშაფტის დიზაინის შექმნის ეტაპებია:',
      pcontli: [
        'ტერიტორიის ანალიზი;',
        'ბაღის სტილისტიკის დადგენა;',
        'ინფრასტრუქტურის შერჩევა;',
        'ზონირების მოწყობა;',
        'წყლის სიტემების მოწესრიგება;',
        'დეკორატიული ნაწილისა და ხე-მცენარეების შერჩევა;',
        'განათების დაგეგმვა;',
        'ღობის მოპირკეთება და ვერტიკალური გამწვანების პროექტირება.',
      ],
      pcont11EN:
        'Landscape design involves the planning, design and management of outdoor spaces. The main goal of landscape design is to create an aesthetically pleasing, functional and sustainable environment.',
      pcontliEN: [
        'Territory analysis;',
        'Determining the style of the garden;',
        'Infrastructure selection;',
        'Arrangement of zoning;',
        'Arrangement of water systems;',
        'Selection of decorative parts and trees;',
        'Lighting planning;',
        'Covering the fence and projecting vertical greenery.',
      ],
    },
  ];

  protected news: News[] = [

  {
    title: '„ახალი სახლი“   სამშენებლო მასალებისა და ინტერიერის 28-ე საერთაშორისო გამოფენა „Caucasus Build 2024“ -ში მონაწილეობს',
    title2: ' ',
    title3: '  ',
    content: 'გამოფენების ცენტრ ექსპოჯორჯიას ორგანიზებით, 2024 წლის 26-27-28 აპრილს სამშენებლო მასალებისა და ინტერიერის 28-ე საერთაშორისო გამოფენა ჩატარდება.<p></p><br>„ახალი სახლი“ გამოფენაზე მოსულ სტუმრებს  მე-5 პავილიონში უმასპინძლებს. კომპანიის სტენდთან დამთვალიერებლებს  შესაძლებლობა ექნებათ გაეცნონ კომპანიის სერვისებს,  VR სათვალის საშუალებით დაათვალიერონ ჩვენს მიერ ექსკლუზიურად შესრულებული სახლების პროექტები და ვირტუალურად აღიქვან დიზაინისა და არქიტექტურის ელემენტები.<p></p><br>ამასთან, გამოფენაზე მოსული სტუმრებისთვის,  „ახალი სახლი“ განსაკუთრებულ შეთავაზებებსაც  ამზდებს და  თითოეულ სასურველ სერვისზე 10 %-იანი ფასდაკლებით მოემსახურება. ',
    content2: 'გამოფენების ცენტრ ექსპოჯორჯიას ორგანიზებით, 2024 წლის 26-27-28 აპრილს სამშენებლო მასალებისა და ინტერიერის 28-ე საერთაშორისო გამოფენა ჩატარდება.<br>„ახალი სახლი“ გამოფენაზე მოსულ სტუმრებს  მე-5 პავილიონში უმასპინძლებს.', 
    content3: '',
    titleEN: 'New House participates in the 28th International Caucasus Build 2024 exhibition of building materials and interiors',
    titleEN2: ' ',
    titleEN3: ' ',
    contentEN: 'The Exhibition Center Expojorja will host the 28th International Exhibition of Construction Materials and Interior on April 26-27-28.Visitors to the companys stand will be able to get acquainted with the companys services, view the projects of our exclusively homes through VR glasses and perceive virtually design and architecture elements.I will serve with a discount.',
    contentEN2: 'The Exhibition Center Expojorja will host the 28th International Exhibition of Construction Materials and Interior on April 26-27-28.',
    contentEN3: ' ',
    image: 'assets/news/anonsi16.9.jpg',
    id: 1
  },


    
  ];



  //news
  getNews(): Observable<News[]> {
    return of(this.news);
  }
  getNewsId(id: number): News | undefined {
    return this.news.find((sitem) => sitem.id === id);
  }
  //landshafti
  getAllLandshafti(): Mshenebloba[] {
    return this.landshaftiList;
  }
  //remonti
  getAllRemonti(): Mshenebloba[] {
    return this.remontiList;
  }
  //interieri
  getAllInterieri(): Mshenebloba[] {
    return this.interieriList;
  }
  //mshenebloba
  getAllMshenebloba(): Mshenebloba[] {
    return this.msheneblobaList;
  }
  //proeqtireba
  getAllProeqtireba(): Proeqtireba[] {
    return this.proeqtirebaTxt;
  }
  //aboutCompanyList
  getAllAboutCompany(): AboutCompany[] {
    return this.aboutCompanyList;
  }
  getAboutCompanyId(id: number): AboutCompany | undefined {
    return this.aboutCompanyList.find((sitem) => sitem.id === id);
  }

  

  //mxf
  getAllMXF(): AboutCompany[] {
    return this.MXFList;
  }
  //gundi
  getAllGroup(): Gundi[] {
    return this.gundiList;
  }
  getGroupID(id: number): Gundi | undefined {
    return this.gundiList.find((sitem) => sitem.id === id);
  }
  //gundien
  getAllGroupEn(): Gundi[] {
    return this.gundiListEn;
  }

  //partniorebi
  getAllPartniorebi(): Partniorebi[] {
    return this.partniorebiList;
  }
  getPartniorebiID(id: number): Partniorebi | undefined {
    return this.partniorebiList.find((sitem) => sitem.id === id);
  }

  //servisi


  constructor() {}
  //private http: HttpClient
  //users
  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('');
  // }
}
