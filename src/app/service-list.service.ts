import { Injectable } from '@angular/core';
import { Services } from './services';
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
  protected countryList: Country[] = [
    { id: 1, name: 'Afghanistan', code: '+93', img: 'assets/4x3/af.svg' },
    { id: 2, name: 'Albania', code: '+355', img: 'assets/4x3/al.svg' },
    { id: 3, name: 'Algeria', code: '+213', img: 'assets/4x3/dz.svg' },
    { id: 4, name: 'Andorra', code: '+376', img: 'assets/4x3/ad.svg' },
    { id: 5, name: 'Angola', code: '+244', img: 'assets/4x3/ao.svg' },
    {
      id: 6,
      name: 'Antigua and Barbuda',
      code: '+1-268',
      img: 'assets/4x3/ag.svg',
    },
    { id: 7, name: 'Argentina', code: '+54', img: 'assets/4x3/ar.svg' },
    { id: 8, name: 'Armenia', code: '+374', img: 'assets/4x3/am.svg' },
    { id: 9, name: 'Australia', code: '+61', img: 'assets/4x3/au.svg' },
    { id: 10, name: 'Austria', code: '+43', img: 'assets/4x3/at.svg' },
    { id: 11, name: 'Azerbaijan', code: '+994', img: 'assets/4x3/az.svg' },
    { id: 12, name: 'Bahamas', code: '+1-242', img: 'assets/4x3/bs.svg' },
    { id: 13, name: 'Bahrain', code: '+973', img: 'assets/4x3/bh.svg' },
    { id: 14, name: 'Bangladesh', code: '+880', img: 'assets/4x3/bd.svg' },
    { id: 15, name: 'Barbados', code: '+1-246', img: 'assets/4x3/bb.svg' },
    { id: 16, name: 'Belarus', code: '+375', img: 'assets/4x3/by.svg' },
    { id: 17, name: 'Belgium', code: '+32', img: 'assets/4x3/be.svg' },
    { id: 18, name: 'Belize', code: '+501', img: 'assets/4x3/bz.svg' },
    { id: 19, name: 'Benin', code: '+229', img: 'assets/4x3/bj.svg' },
    { id: 20, name: 'Bhutan', code: '+975', img: 'assets/4x3/bt.svg' },
    { id: 21, name: 'Bolivia', code: '+591', img: 'assets/4x3/bo.svg' },
    {
      id: 22,
      name: 'Bosnia and Herzegovina',
      code: '+387',
      img: 'assets/4x3/ba.svg',
    },
    { id: 23, name: 'Botswana', code: '+267', img: 'assets/4x3/bw.svg' },
    { id: 24, name: 'Brazil', code: '+55', img: 'assets/4x3/br.svg' },
    { id: 25, name: 'Brunei', code: '+673', img: 'assets/4x3/bn.svg' },
    { id: 26, name: 'Bulgaria', code: '+359', img: 'assets/4x3/bg.svg' },
    { id: 27, name: 'Burkina Faso', code: '+226', img: 'assets/4x3/bf.svg' },
    { id: 28, name: 'Burundi', code: '+257', img: 'assets/4x3/bi.svg' },
    { id: 29, name: 'Cabo Verde', code: '+238', img: 'assets/4x3/cv.svg' },
    { id: 30, name: 'Cambodia', code: '+855', img: 'assets/4x3/kh.svg' },
    { id: 31, name: 'Cameroon', code: '+237', img: 'assets/4x3/cm.svg' },
    { id: 32, name: 'Canada', code: '+1', img: 'assets/4x3/ca.svg' },
    {
      id: 33,
      name: 'Central African Republic',
      code: '+236',
      img: 'assets/4x3/cf.svg',
    },
    { id: 34, name: 'Chad', code: '+235', img: 'assets/4x3/td.svg' },
    { id: 35, name: 'Chile', code: '+56', img: 'assets/4x3/cl.svg' },
    { id: 36, name: 'China', code: '+86', img: 'assets/4x3/cn.svg' },
    { id: 37, name: 'Colombia', code: '+57', img: 'assets/4x3/co.svg' },
    { id: 38, name: 'Comoros', code: '+269', img: 'assets/4x3/km.svg' },
    { id: 39, name: 'Congo', code: '+242', img: 'assets/4x3/cg.svg' },
    { id: 40, name: 'Costa Rica', code: '+506', img: 'assets/4x3/cr.svg' },
    { id: 41, name: 'Croatia', code: '+385', img: 'assets/4x3/hr.svg' },
    { id: 42, name: 'Cuba', code: '+53', img: 'assets/4x3/cu.svg' },
    { id: 43, name: 'Cyprus', code: '+357', img: 'assets/4x3/cy.svg' },
    { id: 44, name: 'Czech Republic', code: '+420', img: 'assets/4x3/cz.svg' },
    { id: 45, name: 'Denmark', code: '+45', img: 'assets/4x3/dk.svg' },
    { id: 46, name: 'Djibouti', code: '+253', img: 'assets/4x3/dj.svg' },
    { id: 47, name: 'Dominica', code: '+1-767', img: 'assets/4x3/dm.svg' },
    {
      id: 48,
      name: 'Dominican Republic',
      code: '+1-809',
      img: 'assets/4x3/do.svg',
    },
    { id: 49, name: 'East Timor', code: '+670', img: 'assets/4x3/tl.svg' },
    { id: 50, name: 'Ecuador', code: '+593', img: 'assets/4x3/ec.svg' },
    { id: 51, name: 'Egypt', code: '+20', img: 'assets/4x3/eg.svg' },
    { id: 52, name: 'El Salvador', code: '+503', img: 'assets/4x3/sv.svg' },
    {
      id: 53,
      name: 'Equatorial Guinea',
      code: '+240',
      img: 'assets/4x3/gq.svg',
    },
    { id: 54, name: 'Eritrea', code: '+291', img: 'assets/4x3/er.svg' },
    { id: 55, name: 'Estonia', code: '+372', img: 'assets/4x3/ee.svg' },
    { id: 56, name: 'Eswatini', code: '+268', img: 'assets/4x3/sz.svg' },
    { id: 57, name: 'Ethiopia', code: '+251', img: 'assets/4x3/et.svg' },
    { id: 58, name: 'Fiji', code: '+679', img: 'assets/4x3/fj.svg' },
    { id: 59, name: 'Finland', code: '+358', img: 'assets/4x3/fi.svg' },
    { id: 60, name: 'France', code: '+33', img: 'assets/4x3/fr.svg' },
    { id: 61, name: 'Gabon', code: '+241', img: 'assets/4x3/ga.svg' },
    { id: 62, name: 'Gambia', code: '+220', img: 'assets/4x3/gm.svg' },
    { id: 63, name: 'Georgia', code: '+995', img: 'assets/4x3/ge.svg' },
    { id: 64, name: 'Germany', code: '+49', img: 'assets/4x3/de.svg' },
    { id: 65, name: 'Ghana', code: '+233', img: 'assets/4x3/gh.svg' },
    { id: 66, name: 'Greece', code: '+30', img: 'assets/4x3/gr.svg' },
    { id: 67, name: 'Grenada', code: '+1-473', img: 'assets/4x3/gd.svg' },
    { id: 68, name: 'Guatemala', code: '+502', img: 'assets/4x3/gt.svg' },
    { id: 69, name: 'Guinea', code: '+224', img: 'assets/4x3/gn.svg' },
    { id: 70, name: 'Guinea-Bissau', code: '+245', img: 'assets/4x3/gw.svg' },
    { id: 71, name: 'Guyana', code: '+592', img: 'assets/4x3/gy.svg' },
    { id: 72, name: 'Haiti', code: '+509', img: 'assets/4x3/ht.svg' },
    { id: 73, name: 'Honduras', code: '+504', img: 'assets/4x3/hn.svg' },
    { id: 74, name: 'Hungary', code: '+36', img: 'assets/4x3/hu.svg' },
    { id: 75, name: 'Iceland', code: '+354', img: 'assets/4x3/is.svg' },
    { id: 76, name: 'India', code: '+91', img: 'assets/4x3/in.svg' },
    { id: 77, name: 'Indonesia', code: '+62', img: 'assets/4x3/id.svg' },
    { id: 78, name: 'Iran', code: '+98', img: 'assets/4x3/ir.svg' },
    { id: 79, name: 'Iraq', code: '+964', img: 'assets/4x3/iq.svg' },
    { id: 80, name: 'Ireland', code: '+353', img: 'assets/4x3/ie.svg' },
    { id: 81, name: 'Israel', code: '+972', img: 'assets/4x3/il.svg' },
    { id: 82, name: 'Italy', code: '+39', img: 'assets/4x3/it.svg' },
    { id: 83, name: 'Jamaica', code: '+1-876', img: 'assets/4x3/jm.svg' },
    { id: 84, name: 'Japan', code: '+81', img: 'assets/4x3/jp.svg' },
    { id: 85, name: 'Jordan', code: '+962', img: 'assets/4x3/jo.svg' },
    { id: 86, name: 'Kazakhstan', code: '+7', img: 'assets/4x3/kz.svg' },
    { id: 87, name: 'Kenya', code: '+254', img: 'assets/4x3/ke.svg' },
    { id: 88, name: 'Kiribati', code: '+686', img: 'assets/4x3/ki.svg' },
    { id: 89, name: 'Kuwait', code: '+965', img: 'assets/4x3/kw.svg' },
    { id: 90, name: 'Kyrgyzstan', code: '+996', img: 'assets/4x3/kg.svg' },
    { id: 91, name: 'Laos', code: '+856', img: 'assets/4x3/la.svg' },
    { id: 92, name: 'Latvia', code: '+371', img: 'assets/4x3/lv.svg' },
    { id: 93, name: 'Lebanon', code: '+961', img: 'assets/4x3/lb.svg' },
    { id: 94, name: 'Lesotho', code: '+266', img: 'assets/4x3/ls.svg' },
    { id: 95, name: 'Liberia', code: '+231', img: 'assets/4x3/lr.svg' },
    { id: 96, name: 'Libya', code: '+218', img: 'assets/4x3/ly.svg' },
    { id: 97, name: 'Liechtenstein', code: '+423', img: 'assets/4x3/li.svg' },
    { id: 98, name: 'Lithuania', code: '+370', img: 'assets/4x3/lt.svg' },
    { id: 99, name: 'Luxembourg', code: '+352', img: 'assets/4x3/lu.svg' },
    { id: 100, name: 'Madagascar', code: '+261', img: 'assets/4x3/mg.svg' },
    { id: 101, name: 'Malawi', code: '+265', img: 'assets/4x3/mw.svg' },
    { id: 102, name: 'Malaysia', code: '+60', img: 'assets/4x3/my.svg' },
    { id: 103, name: 'Maldives', code: '+960', img: 'assets/4x3/mv.svg' },
    { id: 104, name: 'Mali', code: '+223', img: 'assets/4x3/ml.svg' },
    { id: 105, name: 'Malta', code: '+356', img: 'assets/4x3/mt.svg' },
    {
      id: 106,
      name: 'Marshall Islands',
      code: '+692',
      img: 'assets/4x3/mh.svg',
    },
    { id: 107, name: 'Mauritania', code: '+222', img: 'assets/4x3/mr.svg' },
    { id: 108, name: 'Mauritius', code: '+230', img: 'assets/4x3/mu.svg' },
    { id: 109, name: 'Mexico', code: '+52', img: 'assets/4x3/mx.svg' },
    { id: 110, name: 'Micronesia', code: '+691', img: 'assets/4x3/fm.svg' },
    { id: 111, name: 'Moldova', code: '+373', img: 'assets/4x3/md.svg' },
    { id: 112, name: 'Monaco', code: '+377', img: 'assets/4x3/mc.svg' },
    { id: 113, name: 'Mongolia', code: '+976', img: 'assets/4x3/mn.svg' },
    { id: 114, name: 'Montenegro', code: '+382', img: 'assets/4x3/me.svg' },
    { id: 115, name: 'Morocco', code: '+212', img: 'assets/4x3/ma.svg' },
    { id: 116, name: 'Mozambique', code: '+258', img: 'assets/4x3/mz.svg' },
    { id: 117, name: 'Myanmar', code: '+95', img: 'assets/4x3/mm.svg' },
    { id: 118, name: 'Namibia', code: '+264', img: 'assets/4x3/na.svg' },
    { id: 119, name: 'Nauru', code: '+674', img: 'assets/4x3/nr.svg' },
    { id: 120, name: 'Nepal', code: '+977', img: 'assets/4x3/np.svg' },
    { id: 121, name: 'Netherlands', code: '+31', img: 'assets/4x3/nl.svg' },
    { id: 122, name: 'New Zealand', code: '+64', img: 'assets/4x3/nz.svg' },
    { id: 123, name: 'Nicaragua', code: '+505', img: 'assets/4x3/ni.svg' },
    { id: 124, name: 'Niger', code: '+227', img: 'assets/4x3/ne.svg' },
    { id: 125, name: 'Nigeria', code: '+234', img: 'assets/4x3/ng.svg' },
    { id: 126, name: 'North Korea', code: '+850', img: 'assets/4x3/kp.svg' },
    {
      id: 127,
      name: 'North Macedonia',
      code: '+389',
      img: 'assets/4x3/mk.svg',
    },
    { id: 128, name: 'Norway', code: '+47', img: 'assets/4x3/no.svg' },
    { id: 129, name: 'Oman', code: '+968', img: 'assets/4x3/om.svg' },
    { id: 130, name: 'Pakistan', code: '+92', img: 'assets/4x3/pk.svg' },
    { id: 131, name: 'Palau', code: '+680', img: 'assets/4x3/pw.svg' },
    { id: 132, name: 'Palestine', code: '+970', img: 'assets/4x3/ps.svg' },
    { id: 133, name: 'Panama', code: '+507', img: 'assets/4x3/pa.svg' },
    {
      id: 134,
      name: 'Papua New Guinea',
      code: '+675',
      img: 'assets/4x3/pg.svg',
    },
    { id: 135, name: 'Paraguay', code: '+595', img: 'assets/4x3/py.svg' },
    { id: 136, name: 'Peru', code: '+51', img: 'assets/4x3/pe.svg' },
    { id: 137, name: 'Philippines', code: '+63', img: 'assets/4x3/ph.svg' },
    { id: 138, name: 'Poland', code: '+48', img: 'assets/4x3/pl.svg' },
    { id: 139, name: 'Portugal', code: '+351', img: 'assets/4x3/pt.svg' },
    { id: 140, name: 'Qatar', code: '+974', img: 'assets/4x3/qa.svg' },
    { id: 141, name: 'Romania', code: '+40', img: 'assets/4x3/ro.svg' },
    { id: 142, name: 'Russia', code: '+7', img: 'assets/4x3/ru.svg' },
    { id: 143, name: 'Rwanda', code: '+250', img: 'assets/4x3/rw.svg' },
    {
      id: 144,
      name: 'Saint Kitts and Nevis',
      code: '+1-869',
      img: 'assets/4x3/kn.svg',
    },
    { id: 145, name: 'Saint Lucia', code: '+1-758', img: 'assets/4x3/lc.svg' },
    {
      id: 146,
      name: 'Saint Vincent and the Grenadines',
      code: '+1-784',
      img: 'assets/4x3/vc.svg',
    },
    { id: 147, name: 'Samoa', code: '+685', img: 'assets/4x3/ws.svg' },
    { id: 148, name: 'San Marino', code: '+378', img: 'assets/4x3/sm.svg' },
    {
      id: 149,
      name: 'Sao Tome and Principe',
      code: '+239',
      img: 'assets/4x3/st.svg',
    },
    { id: 150, name: 'Saudi Arabia', code: '+966', img: 'assets/4x3/sa.svg' },
    { id: 151, name: 'Senegal', code: '+221', img: 'assets/4x3/sn.svg' },
    { id: 152, name: 'Serbia', code: '+381', img: 'assets/4x3/rs.svg' },
    { id: 153, name: 'Seychelles', code: '+248', img: 'assets/4x3/sc.svg' },
    { id: 154, name: 'Sierra Leone', code: '+232', img: 'assets/4x3/sl.svg' },
    { id: 155, name: 'Singapore', code: '+65', img: 'assets/4x3/sg.svg' },
    { id: 156, name: 'Slovakia', code: '+421', img: 'assets/4x3/sk.svg' },
    { id: 157, name: 'Slovenia', code: '+386', img: 'assets/4x3/si.svg' },
    {
      id: 158,
      name: 'Solomon Islands',
      code: '+677',
      img: 'assets/4x3/sb.svg',
    },
    { id: 159, name: 'Somalia', code: '+252', img: 'assets/4x3/so.svg' },
    { id: 160, name: 'South Africa', code: '+27', img: 'assets/4x3/za.svg' },
    { id: 161, name: 'South Korea', code: '+82', img: 'assets/4x3/kr.svg' },
    { id: 162, name: 'South Sudan', code: '+211', img: 'assets/4x3/ss.svg' },
    { id: 163, name: 'Spain', code: '+34', img: 'assets/4x3/es.svg' },
    { id: 164, name: 'Sri Lanka', code: '+94', img: 'assets/4x3/lk.svg' },
    { id: 165, name: 'Sudan', code: '+249', img: 'assets/4x3/sd.svg' },
    { id: 166, name: 'Suriname', code: '+597', img: 'assets/4x3/sr.svg' },
    { id: 167, name: 'Sweden', code: '+46', img: 'assets/4x3/se.svg' },
    { id: 168, name: 'Switzerland', code: '+41', img: 'assets/4x3/ch.svg' },
    { id: 169, name: 'Syria', code: '+963', img: 'assets/4x3/sy.svg' },
    { id: 170, name: 'Taiwan', code: '+886', img: 'assets/4x3/tw.svg' },
    { id: 171, name: 'Tajikistan', code: '+992', img: 'assets/4x3/tj.svg' },
    { id: 172, name: 'Tanzania', code: '+255', img: 'assets/4x3/tz.svg' },
    { id: 173, name: 'Thailand', code: '+66', img: 'assets/4x3/th.svg' },
    { id: 174, name: 'Togo', code: '+228', img: 'assets/4x3/tg.svg' },
    { id: 175, name: 'Tonga', code: '+676', img: 'assets/4x3/to.svg' },
    {
      id: 176,
      name: 'Trinidad and Tobago',
      code: '+1-868',
      img: 'assets/4x3/tt.svg',
    },
    { id: 177, name: 'Tunisia', code: '+216', img: 'assets/4x3/tn.svg' },
    { id: 178, name: 'Turkey', code: '+90', img: 'assets/4x3/tr.svg' },
    { id: 179, name: 'Turkmenistan', code: '+993', img: 'assets/4x3/tm.svg' },
    { id: 180, name: 'Tuvalu', code: '+688', img: 'assets/4x3/tv.svg' },
    { id: 181, name: 'Uganda', code: '+256', img: 'assets/4x3/ug.svg' },
    { id: 182, name: 'Ukraine', code: '+380', img: 'assets/4x3/ua.svg' },
    {
      id: 183,
      name: 'United Arab Emirates',
      code: '+971',
      img: 'assets/4x3/ae.svg',
    },
    { id: 184, name: 'United Kingdom', code: '+44', img: 'assets/4x3/gb.svg' },
    { id: 185, name: 'United States', code: '+1', img: 'assets/4x3/us.svg' },
    { id: 186, name: 'Uruguay', code: '+598', img: 'assets/4x3/uy.svg' },
    { id: 187, name: 'Uzbekistan', code: '+998', img: 'assets/4x3/uz.svg' },
    { id: 188, name: 'Vanuatu', code: '+678', img: 'assets/4x3/vu.svg' },
    { id: 189, name: 'Vatican City', code: '+379', img: 'assets/4x3/va.svg' },
    { id: 190, name: 'Venezuela', code: '+58', img: 'assets/4x3/ve.svg' },
    { id: 191, name: 'Vietnam', code: '+84', img: 'assets/4x3/vn.svg' },
    { id: 192, name: 'Yemen', code: '+967', img: 'assets/4x3/ye.svg' },
    { id: 193, name: 'Zambia', code: '+260', img: 'assets/4x3/zm.svg' },
    { id: 194, name: 'Zimbabwe', code: '+263', img: 'assets/4x3/zw.svg' },
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
        'არქიტექტურული პროექტის მომზადება;',
        'კონსტრუქციური პროექტის მომზადება;',
        'კონსტრუქციური პროექტის საექსპერტო შეფასება;',
        'მშენებლობის ორგანიზების პროექტის მომზადება (მოპი);',
        'დამტკიცებული პროექტის ხარჯთაღრიცხვის გაწერა;',
        'პროექტის შეთანხმება შესაბამის მუნიციპალიტებთან და მშენებლობის ნებართვის აღება;',
      ],
      pcont11EN:
        'Creating project\nWe start designing with a detailed analysis of the territory, develop a pre-design concept, agree on a sketch with the customer, prepare all the necessary project documentation and obtain a building permit from the municipality.\n\nThe stages of the design process are:\n• Creating a concept;\n• Preparation of a topographic map;\n• Qualitative evaluation of green plantings and preparation of expert opinion (if necessary);\n• Preparation of engineering-geological report and expert report;\n• Determination of the conditions for the use of the land plot for construction (gap);\n• Project sketch agreement with the customer;\n• Agreement on the traffic organization scheme;\n• Preparation of energy efficiency declaration;\n• Preparation of an architectural project;\n• Construction project preparation;\n• Expert evaluation of the construction project;\n• Preparation of construction organization project (mop);\n• Issuing the cost estimate of the approved project;\n• Project agreement with the relevant municipalities and obtaining a building permit;',
      pcontliEN: [
        'Creating a concept;',
        'Preparation of a topographic map;',
        'Qualitative evaluation of green plantings and preparation of expert opinion (if necessary);',
        'Preparation of engineering-geological report and expert report;',
        'Determination of the conditions for the use of the land plot for construction (gap);',
        'Project sketch agreement with the customer;',
        'Agreement on the traffic organization scheme;',
        'Preparation of energy efficiency declaration;',
        'Preparation of an architectural project;',
        'Construction project preparation;',
        'Expert evaluation of the construction project;',
        'Preparation of construction organization project (mop);',
        'Issuing the cost estimate of the approved project;',
        'Project agreement with the relevant municipalities and obtaining a building permit;',
      ],

      hoverList: [
        'ტერიტორიის ანალიზი',
        'წინასაპროექტო კონცეფციის მომზადება',
        'გენერალური გეგმის ზონირება და შენობის განთავსების იდენტიფიცირება',
        'კოეფიციენტებისა და დამკვეთის მოთხოვნების მიხედვით შენობის ზონირების გაკეთება',
        'სტილისა და გამოყენებული მასალის მიხედვით წინასაპროექტო ფასადების შექმნა',
        'საპროექტო დავალების მიხედვით დეტალური გეგმარების შექმნა',
        'ავეჯის განლაგების გეგმის მომზადება',
        'ფასადზე გამოყენებული მასალების სპეციფიკაცია',
        'კარ-ფანჯრებისა და მოაჯირების სპეციფიკაცია',
        'ღობის, ჭიშკრისა და ავტოსადგომის პროექტირება',
        'რენდერებისა და ფოტომონტაჟების მომზადება',
        'ტექნიკურ-ეკონომიკური მაჩვენებლებისა და განმარტებითი ბარათის გაწერა',
        'არქიტექურული ალბომის შეკვრა და www.tas.ge –ზე ატვირთვა',
      ],

      hoverListEN: [
        'Territory analysis',
        'Preparation of pre-project concept',
        'General plan zoning and building location identification',
        "Zoning the building according to the coefficients and customer's requirements",
        'Creation of pre-project facades according to the style and material used',
        'Creation of detailed planning according to project task',
        'Preparation of furniture arrangement plan',
        'Specification of materials used on the facade',
        'Specification of doors, windows and railings',
        'Designing fence, gate and parking lot',
        'Preparation of renderings and photomontages',
        'Issuance of technical and economic indicators and explanatory card',
        'Binding of the architectural album and uploading it to www.tas.ge',
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
        'დასრულებული მშენებლობის დამკვეთისთვის ჩაბარება;',
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
        'Handing over the completed construction to the customer;',
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
        '3D ვიზუალიზაცია;',
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
        '3D visualization;',
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
        'დასრულებული რემონტის დამკვეთისთვის ჩაბარება;',
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
        'Handing over the completed repairs to the customer;',
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
        'ღობის მოპირკეთება და ვერტიკალური გამწვანების პროექტირება;',
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
        'Covering the fence and projecting vertical greenery;',
      ],
    },
  ];

  protected news: News[] = [
    {
      id: 1,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/1.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 2,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/5.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 3,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/3.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 4,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/4.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 5,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/4.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 6,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/4.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 7,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/4.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 8,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/11.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 9,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/12.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 10,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/13.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 11,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/14.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 12,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/9.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkk  kkkkkkkkkkkkkkk  kkkkkkkkkkkk kkkkaaaaaaaaaaaljbavljkbrvlkajberlvkj ablekvblakjbflvkahbkhblkjbvfah',
    },
    {
      id: 13,
      title: 'ტესტი',
      content:
        'იაჯბფვლიუბალიუვბლაიბვლიაბვბალ ბალრუბვლაუ ბლურ ბლაბ ლიაბ ლუაბლრი ბლაიბ ლიაბრლიბ ლიბალიბალი ბლიბ ლაიბ ლაბლიბრლ ბალეფბ ლაიბლიუბლფლ ბალე ბლ ბალრეუბლაბლ ბლაუე ბლარუებლუბლ უაბლ რე',
      image: 'assets/pics/renders/10.jpg',
      titleEN: 'Test',
      contentEN:
        'ajdvlaijbvliaublidbavlijbfvlajbldjvbalkjbljbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaaaaaaaaaljbavljkbrvlkajberlvkjablekvblakjbflvkahbkhblkjbvfah',
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

  //countryList
  getAllCountry(): Country[] {
    return this.countryList;
  }
  getCountryId(id: number): Country | undefined {
    return this.countryList.find((sitem) => sitem.id === id);
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
