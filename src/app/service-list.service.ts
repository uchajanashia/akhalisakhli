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
  protected serviceList: Services[] = [
    {
      id: 1,
      name: 'პროექტირება',
      photo: 'assets/pics/web/proeqtireba/cover.jpg',
      description:
        'პროექტირებას ტერიტორიის დეტალური ანალიზით ვიწყებთ, ვამუშავებთ წინასაპროექტო  კონცეფციას, ვათანხმებთ  დამკვეთთან ესკიზს, ვამზადებთ ყველა  საჭირო საპროექტო დოკუმენტაციას  და  მუნუციპალიტეტიდან  ვიღებთ  მშენებლობის ნებართვას.',
      link: 'services/proektireba',
    },
    {
      id: 2,
      name: 'მშენებლობა',
      photo: 'assets/pics/web/mshenebloba/cover.jpg',
      description:
        'მშენებლობის პროცესის სწორი და თანმიმდევრული კოორდინაციით მიიღწევა პროექტის წარმატება. ',
      link: 'services/mshenebloba',
    },
    {
      id: 3,
      name: 'ინტერიერის დიზაინი',
      photo: 'assets/pics/web/interieri/cover.jpg',
      description:
        'თქვენი ხედვის გასაცოცხლებლად გთავაზობთ დეტალურ კონსულტაციას, სივრცის დაგეგმვას და 3D ვიზუალიზაციას.',
      link: 'services/interieri',
    },
    {
      id: 4,
      name: 'რემონტი',
      photo: 'assets/pics/web/remonti/cover.jpg',
      description:
        'რემონტი გადამწყვეტ როლს თამაშობს ინტერიერის დიზაინის კონცეფციის რეალობად გარდაქმნაში.პირველი ეტაპია არსებული სივრცის საფუძვლიანი შეფასება, რის შედეგადაც ვადგენთ დეტალურ გეგმას და მთელი პროცესის განმავლობაში ვახორციელებთ  მიმდინარე სამუშაოების  ხარისხის კონტროლს.',
      link: 'services/remonti',
    },
    {
      id: 5,
      name: 'ლანდშაფტის დიზაინი',
      photo: 'assets/pics/web/landshapti/cover.jpg',
      description:
        'ლანდშაფტის დიზაინი მოიცავს გარე სივრცეების დაგეგმვას, დიზაინსა და მართვას. ლანდშაფტის დიზაინის მთავარი მიზანია შექმნას ესთეტიურად სასიამოვნო, ფუნქციონალური და მდგრადი გარემო.',
      link: 'services/landshafti',
    },
  ];
  protected serviceListEN: Services[] = [
    {
      id: 1,
      name: 'Creating project',
      photo: 'assets/pics/web/proeqtireba/cover.jpg',
      description:
        'We start designing with a detailed analysis of the territory, develop a pre-design concept, agree on a sketch with the customer, prepare all the necessary project documentation and obtain a building permit from the municipality.',
      link: 'services/proektireba',
    },
    {
      id: 2,
      name: 'Construction',
      photo: 'assets/pics/web/mshenebloba/cover.jpg',
      description:
        'Correct and consistent coordination of the construction process will ensure the success of the project.',
      link: 'services/mshenebloba',
    },
    {
      id: 3,
      name: 'Interior design',
      photo: 'assets/pics/web/interieri/cover.jpg',
      description:
        'We offer detailed consultation, space planning and 3D visualization to bring your vision to life. ',
      link: 'services/interieri',
    },
    {
      id: 4,
      name: 'Renovation',
      photo: 'assets/pics/web/remonti/cover.jpg',
      description:
        'Renovation plays a crucial role in the concept of interior design to bring to reality. The first stage is a thorough assessment of the existing space, as a result We draw up a detailed plan and during the entire process we control the quality of ongoing works.',
      link: 'services/remonti',
    },
    {
      id: 5,
      name: 'Landscape design',
      photo: 'assets/pics/web/landshapti/cover.jpg',
      description:
        'Landscape design involves the planning, design and management of outdoor spaces.The main goal of landscape design is to create an aesthetically pleasing, functionaland sustainable environment.',
      link: 'services/landshafti',
    },
  ];
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
      satauri: 'კომპანიის შესახებ',
      qvedaName:"",
      qveda1Name:"",
      qvedaNameEN:"",
      qveda1NameEN:"",
      sataurisTxt:
        'კომპანია „ახალი სახლის“ დამფუძნებელი ილია ტყეშლაშვილი 2005 წლიდან მუშაობდა რამოდენიმე სამშენებლო კომპანიაში, გახლდათ აგურის ქარხნის მმართველი, ხელმძღვანელობდა ცემენტის ქარხანას და დეველოპერულ კომპანიაში იყო სამშენებლო პროექტების მენეჯერი. ილიას, საპროეტო-სამშენებლო კომპანია „ახალი სახლის“ დაარსების იდეა 2014 წელს გაუჩნდა. კომპანიის დაარსებიდანვე ძირითადი აქცენტი მაღალკვალიფიციური და გამოცდილი კადრების შერჩევაზე გაკეთდა.',
      qveda:
        'დღეისათვის კომპანია  20 წელზე მეტი გამოცდილების მქონე არქიტექტორებს, მშენებლებსა და ვიწრო დარგის სპეციალისტებს აერთიანებს.  ინოვაციებსა და განვითარებაზე ორიენტირებული „ახალი სახლი“,  მისი გუნდის წევრებისთვის, უწყვეტი განვითარებისა და კვალიფიკაციის ამაღლების გარანტია.',
      qveda1:
        'ჩვენ ვზრუნავთ დამკვეთების სურვილები ვაქციოთ რეალობად, მდგრადი განვითარების პრინციპების გათვალისწინებით შევქმნათ მათ გემოვნებაზე და ბიუჯეტზე მორგებული ფუნქციონალური პროექტები.',
      qveda2:
        '„ახალი სახლი“  მომხმარებლებისთვის უზრუნველყოფს  მაღალი ხარისხის სერვისს,  უნიკალურ არქიტექტორულ პროექტებს, გამორჩეულ დიზაინსა და ხარისხიან მშენებლობას.',
      qveda3:
        '9 წლიანი გამართული მენეჯმენტისა და კვალიფიციური გუნდის აქტიური მუშაობის შედეგად, „ახალმა სახლმა“ სამშენებლო სექტორში  ლიდერული პოზიცია დაიმკვიდრა და აგრძელებს ოპერირების არეალის გაზრდას.',

      sec1Pic1: 'assets/pics/web/chven shesaxeb/1.jpg',
      sec1Pic2: 'assets/pics/web/chven shesaxeb/2.jpg',
      sec1Pic3: 'assets/pics/web/chven shesaxeb/3.jpg',

      sec2Pic1: 'assets/pics/web/chven shesaxeb/5.jpg',
      sec2Pic2: 'assets/pics/web/chven shesaxeb/4.jpg',
      sec2Pic3: 'assets/pics/web/chven shesaxeb/6.jpg',

      satauriEN: 'About company',
      sataurisTxtEN:
        'Ilia Tkeshelashvili, the founder of "Akhali Sakhli" company, worked in several construction companies since 2005, was the manager of a brick factory, managed a cement factory and was a construction project manager in a development company. Ilia had an idea of founding the design and construction company "Akhali  Sakhli" in 2014. Since the establishment of the company, the main focus has been on the selection of highly qualified and experienced personnel.',
      qvedaEN:
        'Today, the company unites architects, builders and narrow field specialists with more than 20 years of experience. Innovations and a development-oriented "Akhali Sakhli" for its team members, a guarantee of continuous development and qualification improvement.',
      qveda1EN:
        'We help our customers turn their wishes into the reality. Taking into account the principles of sustainable development and creating functional projects tailored to their taste and budget.',
      qveda2EN:
        '"Akhali Sakhli" provides customers with high-quality service, unique architectural projects, outstanding design and quality construction.',
      qveda3EN:
        'As a result of 9 years of successful management and active work of a qualified team, "Akhali Sakhli" took a leading position in the construction sector and continues to increase the area of operation.',
    },
  ];
  protected MXFList: AboutCompany[] = [
    {
      id: 1,
      satauri: 'ხედვა',
      sataurisTxt:
        'სტაბილური და მდგრადი კომპანია, რომელიც მუდმივად ზრუნავს განვითარებაზე, ეცნობა ახალ საერთაშორისო ტექნოლოგიებსა და სტანდარტებს, ადაპტირებას უკეთებს ქართულ რეალობაში და მაქსიმალურად იყენებს: ადგილობრივ, ბიოდეგრადირებად, გადამუშავებად და ეკოლოგიურად სუფთა მასალებს.',
      qvedaName:"მისია",
      qvedaNameEN:"Mission",
      qveda:
        'მომხმარებლებისთვის მაქსიმალური კომფორტის შექმნა, ადამიანის ცხოვრების ხარისხის გაუმჯობესება და ესთეტიურად მომხიბვლელი მომავლის შენება.',
      qveda1Name:"ფასეულობები",
      qveda1NameEN:"Values",
      qveda1:
        'სამართლიანობა - გამჭვირვალე და თანასწორი ურთიერთობა მომხმარებლებთან, პარტნიორებთან და თანამშრომლებთან.  ',
      qveda2:
        'გუნდურობა - თანამშრომლებისა  და სერვისების მუდმივად განვითარება.',
      qveda3:
        'ხარისხი -  გარემოზე ზემოქმედების მინიმუმამდე შემცირება,  ეკოლოგიურად უსაფრთხო გადაწყვეტილებების მიღება, ენერგოეფექტური მშენებლობის  წარმოება და პოპულარიზაცია.',

      sec1Pic1: 'assets/pics/web/chven shesaxeb/1.jpg',
      sec1Pic2: 'assets/pics/web/chven shesaxeb/2.jpg',
      sec1Pic3: 'assets/pics/web/chven shesaxeb/3.jpg',

      sec2Pic1: 'assets/pics/web/chven shesaxeb/5.jpg',
      sec2Pic2: 'assets/pics/web/chven shesaxeb/4.jpg',
      sec2Pic3: 'assets/pics/web/chven shesaxeb/6.jpg',

      satauriEN: 'Vision',
      sataurisTxtEN:
        'A stable and sustainable company that constantly cares about development, is familiar with new international technologies and standards, adapts to the Georgian reality and uses local, biodegradable, recyclable and environmentally friendly materials as much as possible.',
      qvedaEN:
        'Creating maximum comfort for users, human life Improving quality and building an aesthetically pleasing future.',
      qveda1EN:
        'Fairness - transparent and equal relations with customers, partners and employees.',
      qveda2EN: 'Teamwork - continuous development of employees and services.',
      qveda3EN:
        'Quality - minimization of environmental impact, ecologically safe Decision-making, production of energy-efficient construction and promotion.',
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

  protected project : project[] = [
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი  ბათუმში',
      titleEn: 'Individual residential house in Batumi',
      category: 'ინტერიერი დიზაინი',
      categoryEn: 'interior design',
      text: 'შევასრულეთ  2 სართულიანი ინდივიდუალური საცხოვრებელი სახლის ინტერიერის დიზაინის პროექტი.<p></p> <br> <strong>სახლის ფართობი: 400 კვ.მ. </strong> <br>I სართულზე განთავსებულია: სტუდიოს ტიპის მისაღები ოთახი, კაბინეტი, საძინებელი, სველი წერტილი, ტექნიკური ოთახი.<p></p> <br>II სართულზე განთავსებულია: მისაღები ოთახი, 3 საძინებელი, 2 აივანი.',
      textEn: 'no text for english sorry',
      image: [
        'assets/galerea/interieris dizaini/1/1.jpg',
        'assets/galerea/interieris dizaini/1/2.jpg',

      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი საგურამოში',
      titleEn: 'individual residential house in Saguramo',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი. <p></p> <br> <strong>ეზოს ფართობი: 2100 კვ.მ. <strong>',
      textEn: 'no text for english sorry',
      image: [
        'assets/galerea/landshapti/1/10.jpg',
        'assets/galerea/landshapti/1/cover.jpg',
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი  დიდ დიღომში',
      titleEn: 'Individual Residential House in Didi Digomi',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design ',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი. <p></p> <br>ეზოს ფართობი: 1800 კვ.მ.',
      textEn: 'We have completed a landscape design project.<br> Yard area: 1800 sq.m.',
      image: [
        'assets/galerea/landshapti/2/1.jpg',
        'assets/galerea/landshapti/2/9.jpg',
       
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი ლისზე',
      titleEn: 'Individual Residential House on Lisi',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design ',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი.<p></p> <br>ეზოს ფართობი: 800 კვ.მ. ',
      textEn: 'We have completed a landscape design project. <br> Yard area: 800 sq.m. ',
      image: [
        'assets/galerea/landshapti/3/7.jpg',
        'assets/galerea/landshapti/3/8.jpg',
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი საგურამოში',
      titleEn: 'Individual residential house in Saguramo',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design ',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი. <p></p> <br>ეზოს ფართობი: 900 კვ.მ.',
      textEn: 'We have completed a landscape design project.<br> Yard area: 900 sq.m.',
      image: [
        'assets/galerea/landshapti/4/5.jpg',
        'assets/galerea/landshapti/4/6.jpg',
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი  წოდორეთში',
      titleEn: 'An individual residential house in Tsodori',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design ',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი. <p></p> <br>ეზოს ფართობი: 22 000  კვ.მ.',
      textEn: 'We have completed a landscape design project.<br> Yard area: 22 000 sq.m.',
      image: [
        'assets/galerea/landshapti/5/3.jpg',
        'assets/galerea/landshapti/5/4.jpg',
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი ნაფეტვრებში',
      titleEn: 'Individual residential house in napkets',
      category: 'ლანდშაფტის დიზაინი',
      categoryEn: 'Landscape Design ',
      text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი.<p></p> <br>ეზოს ფართობი: 2000  კვ.მ.',
      textEn: 'We have completed a landscape design project. <br> Yard area: 2000 sq.m.',
      image: [
        'assets/galerea/landshapti/6/2.jpg',
       
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალურ საცხოვრებელი სახლი ქოშიგორაზე',
      titleEn: 'Individual Residential House on Koshigora',
      category: 'მშენებლობა',
      categoryEn: 'construction',
      text: 'შევასრულეთ სრული საპროექტო მომსახურება, ავიღეთ მშენებლობის ნებართვა და მიმდინარეობს მშენებლობის პროცესი.',
      textEn: 'We have performed full design services, we have obtained a construction permit, and the construction process is underway.',
      image: [
        'assets/galerea/mshenebloba/1/1.jpg',
        'assets/galerea/mshenebloba/1/2.jpg',
        'assets/galerea/mshenebloba/1/3.jpg',
        'assets/galerea/mshenebloba/1/4.jpg',
      ],
      video: '7A6AP0K5aXI'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი საგურამოში',
      titleEn: 'Individual residential house in Saguramo',
      category: 'მშენებლობა',
      categoryEn: 'construction',
      text: 'შევასრულეთ სამშენებლო სამუშაოები.<p></p> <p></p> <br>სახლის ფართობი: 220 კვ.მ. <br>I სართულზე განთავსებულია: მისაღები ოთახი, სამზარეულო, საძინებელი, სველი  წერტილი, ტექნიკური ოთახი, აივანი.<p></p> <br>II სართულზე განთავსებულია: 3 საძინებელი, 2 სველი წერტილი, აივანი.',
      textEn: 'We have done the construction work. <br> House area: 220 sq.m.<p></p> <br> On the first floor there are: living room, kitchen, bedroom, bathroom, technical room, balcony. <br> II floor: 3 bedrooms, 2 bathrooms, balcony.',
      image: [
        'assets/galerea/mshenebloba/2/5.jpg',

      ],
      video: 'u3iXzDmQpyA'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი წყნეთში',
      titleEn: 'An individual residential house in Tskneti',
      category: 'მშენებლობა',
      categoryEn: 'construction',
      text: 'შევასრულეთ სამშენებლო და სარემონტო სამუშაოები.<p></p> <br>სახლის ფართობი: 220 კვ.მ. <br>სახლში განთავსებულია: მისაღები ოთახი, 4 საძინებელი,  სასადილო ოთახი, სამზარეულო, სველი წერტილი, ვერანდა.',
      textEn: 'We have performed construction and repair work. <p></p> <br> House area: 220 sq.m.<br> House: living room, 4 bedrooms, dining room, kitchen, bathroom, porch.',
      image: [
        'assets/galerea/mshenebloba/3/6.jpg',
        'assets/galerea/mshenebloba/3/7.jpg',
        'assets/galerea/mshenebloba/3/8.jpg',
        'assets/galerea/mshenebloba/3/9.jpg',

      ],
      video: '_N2INtpRIos'
    },
    {
      title: 'ინდივიდუალურ საცხოვრებელი სახლი ვანში',
      titleEn: 'Individual Residential House in Van',
      category: 'მშენებლობა',
      categoryEn: 'construction',
      text: 'სახლი მდებარეობს ვანის რაიონის სოფელ მთისძირში. შევასრულეთ სრული საპროექტო მომსახურება, ავიღეთ მშენებლობის ნებართვა, მიმდინარეობს სამშენებლო და სარემონტო სამუშაოები.<p></p> <br>სახლის ფართობი: 190 კვ.მ.<br>სახლში განთავსებულია: მისაღები ოთახი, 3 საძინებელი, სამზარეულო, სველი წერტილი.',
      textEn: 'The house is located in the village of Mtisdziri in Vani district.We have performed full design services, we have received construction permits, construction and renovations are underway. <p></p> <br> House area: 190 sq.m.',
      image: [
        'assets/galerea/mshenebloba/4/10.jpg',
        'assets/galerea/mshenebloba/4/11.jpg',
        'assets/galerea/mshenebloba/4/12.jpg',
        'assets/galerea/mshenebloba/4/13.jpg',
      ],
      video: 'zJQV9dwPb00'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი „ლისი ტოპოგრაფში“',
      titleEn: 'Individual Residential House in Lisi Topograph',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      text: 'სახლი მდებარეობს ლისის ტბის მიმდებარედ. შევასრულეთ სრული საპროექტო მომსახურება და ავიღეთ მშენებლობის ნებართვა. <br>სახლის ფართობი: 460 კვ.მ.  <p></p> <br>I სართულზე განთავსებულია:  მისაღები ოთახი, სამზარეულო, კაბინეტი, საძინებელი, ტექნიკური ოთახი, 2 სველი წერტილი. <br>II სართულზე განთავსებულია: 4 საძინებელი (საგარდერობო ოთახებითა და სველი წერტილებით), სამრეცხაო/საშრობი ოთახი.<p></p> <br>III სართულზე მდებარეობს  ღია ტერსა და სველი წერტილი.',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/1/1.jpg',
      ],
      video: ''
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი  სახლი ლისზე',
      titleEn: 'Individual Residential House on Lisi',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/2/2.jpg',

      ],
      video: '',
      text: 'შევასრულეთ სრული საპროექტო მომსახურება და ავიღეთ მშენებლობის ნებართვა.<br>სახლის ფართობი: 450 კვ.მ.   <p></p> <br> I  სართულზე განთავსებულია:  მისაღები ოთახი, სამზარეულო, საძინებელი, სველი წერტილი, ტექნიკური ოთახი. <br>II სართულზე  განთავსებულია: მისღები ოთახი,  4 საძინებელი, 3 სველი წერტილი, 2 აივანი.'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი დიდ დიღომში',
      titleEn: 'Individual Residential House in Didi Digomi',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/3/3.jpg',

      ],
      video: '',
      text: 'შევასრულეთ სრული საპროექტო მომსახურება და ავიღეთ მშენებლობის ნებართვა. <p></p> <br>სახლის ფართობი: 400 კვ.მ. <br>I სართულზე განთავსებულია: მისაღები ოთახი, სამზარეულო/სასადილო, კაბინეტი, სველი წერტილი, ტექნიკური ოთახი.<p></p> <br>II სართულზე განთავსებულია: მისაღები ოთახი,  4 საძინებელი, კაბინეტი, 2 სველი წერტილი, 2 ტერასა.<br>III სართულზე მდებარეობს ღია ტერასა.'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი  სახლი ნავდარაანთკარში',
      titleEn: 'Individual Residential House on Navdaraanthkar',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/4/4.png',
        'assets/galerea/proeqtireba/4/5.jpg',


      ],
      video: '',
      text: 'სახლი მდებარეობს მცხეთის მუნიციპალიტეტის სოფელ ნავდარაანთკარში. შევასრულეთ სრული საპროექტო მომსახურება და ავიღეთ მშენებლობის ნებართვა.<p></p> <br>სახლის ფართობი: 370 კვ.მ.<br>I სართულზე განთავსებულია: მისაღები ოთახი, სამზარეულო, საძინებელი, სველი წერტილი,  ტექნიკური ოთახი.<p></p> <br>II სართულზე განთავსებულია: 4 საძინებელი, 2 სველი წერტილი, სამრეცხაო ოთახი, 3 აივანი.'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი ლისზე',
      titleEn: 'Individual Residential House on Lisi',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/6/6.png',

      ],
      video: '',
      text: 'შევასრულეთ  არქიტექტურული პროექტი.<br>სახლის ფართობი: 410 კვ.მ.<p></p> <br>I  სართულზე განთავსებულია: მისაღები ოთახი, სამზარეულო, ტექნიკური ოთახი, 2 ტერასა.<br>II სართულზე განთავსებულია: 4 საძინებელი (საგარდერობე ოთახებითა და სველი წერტილებით),  2 აივანი.'
    },

    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი ძეგვში',
      titleEn: 'individual residential house on  dzegvshi',
      category: 'პროექტირება',
      categoryEn: 'Project Design',
      textEn: '',
      image: [
        'assets/galerea/proeqtireba/7/7.jpg',

      ],
      video: '',
      text: 'სახლი მდებარეობს მცხეთის მუნიციპალიტეტის სოფელ ძეგვში. შევასრულეთ სრული საპროექტო მომსახურება და ავიღეთ მშენებლობის ნებართვა. <p></p> <br>სახლის ფართობი: 200 კვ.მ. <br>I სართულზე განთავსებულია: მისაღები ოთახი, სამზარეულო, სველი წერტილი, ტექნიკური ოთახი, ღია ტერასა.<p></p> <br>II სართულზე განთავსებულია: 3 საძინებელი, 2 სველი წერტილი, 2 აივანი.'
    },
    {
      title: 'საცხოვრებელი ბინა თბილისში',
      titleEn: 'Residential apartment in Tbilisi',
      category: 'რემონტი',
      categoryEn: 'Renovation',
      text: 'ბინა მდებარეობს ქ. თბილისში, საირმის ქუჩაზე. შევასრულეთ ინტერიერის  დიზაინის პროექტი და სარემონტო სამუშაოები.<br>ბინის ფართობი: 134 კვ.მ. <p></p> <br>ბინაში განთავსებულია:  მისაღები ოთახი, 2 საძინებელი, საგარდერობე ოთხი, კაბინეტი, სამზარეულო, ჰოლი, 2 სველი წერტილი, აივანი.',
      textEn: '',
      image: [
        'assets/galerea/remonti/1/1.jpg',
        'assets/galerea/remonti/1/2.jpg',
        'assets/galerea/remonti/1/3.jpg',
        'assets/galerea/remonti/1/4.jpg',
        'assets/galerea/remonti/1/5.jpg',
        'assets/galerea/remonti/1/6.jpg',

      ],
      video: 'TsmShfuoC7w'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი შინდისში',
      titleEn: 'Individual Residential House in Shindisi',
      category: 'რემონტი',
      categoryEn: 'Renovation',
      text: 'შევასრულეთ ინტერიერის დიზაინის პროექტი და სარემონტო სამუშაოები. <br> სახლის ფართობი: 320 კვ.მ.  <p></p> <br>სახლში განთავსებულია: სტუდიოს ტიპის მისაღები, 3 საძინებელი, 3 სველი წერტილი, ტექნიკური ოთახი, 2 ტერასა.',
      textEn: '',
      image: [
        'assets/galerea/remonti/2/1.jpg',
        'assets/galerea/remonti/2/2.jpg',
        'assets/galerea/remonti/2/3.jpg',
        'assets/galerea/remonti/2/4.jpg',
        'assets/galerea/remonti/2/5.jpg',
        'assets/galerea/remonti/2/6.jpg',
        'assets/galerea/remonti/2/7.jpg',
        'assets/galerea/remonti/2/8.jpg',
        'assets/galerea/remonti/2/9.jpg',

      ],
      video: 'TDb43ZQRNMA'
    },
    {
      title: 'ინდივიდუალური საცხოვრებელი სახლი წყნეთში',
      titleEn: 'An individual residential house in Tskneti',
      category: 'რემონტი',
      categoryEn: 'Renovation',
      text: 'შევასრულეთ სამშენბელო და  სარემონტო სამუშაოები.<br>სახლის ფართობი: 220 კვ.მ. <p></p> <br>სახლში განთავსებულია: მისაღები ოთახი, 4 საძინებელი,  სასადილო ოთახი, სამზარეულო, სველი წერტილი, ვერანდა.',
      textEn: '',
      image: [
        'assets/galerea/remonti/3/1.jpg',
        'assets/galerea/remonti/3/2.jpg',
        'assets/galerea/remonti/3/3.jpg',
        'assets/galerea/remonti/3/4.jpg',

      ],
      video: '_N2INtpRIos'
    },
  ];

getproject(): project[]{
  return this.project;
}

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

  getAllService(): Services[] {
    return this.serviceList;
  }
  getAllServiceEN(): Services[] {
    return this.serviceListEN;
  }
  getServicesID(id: number): Services | undefined {
    return this.serviceList.find((sitem) => sitem.id === id);
  }

  constructor() {}
  //private http: HttpClient
  //users
  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('');
  // }
}
