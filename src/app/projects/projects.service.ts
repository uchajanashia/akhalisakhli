import { Injectable } from '@angular/core';
import { project } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  protected project : project[] = [
    {
      id:1,
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
      id:2,
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
      id:3,
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
      id:4,
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
      id:5,
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
      id:6,
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
      id:7,
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
      id:8,
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
      id:9,
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
      id:10,
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
      id:11,
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
      id:12,
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
      id:13,
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
      id:14,
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
      id:15,
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
      id:16,
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
      id:17,
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
      id:18,
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
      id:19,
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
    {
      id:20,
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
  ];

getproject(): project[]{
  return this.project;
}
getproject2(page: number, pageSize: number): project[] {
  const startIndex = (page - 1) * pageSize;
  return this.project.slice(startIndex, startIndex + pageSize);
}
}
