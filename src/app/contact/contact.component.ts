import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from '../float-contact/float-contact.component';
import { MapComponent } from "../map/map.component";
import { ServiceListService } from '../service-list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CustumerdataService } from '../custumerdata.service';
import { LanguageService } from '../language.service';
import { SharedcontactService } from '../projects/sharedcontact.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [HeaderComponent, FooterComponent, FloatContactComponent, MapComponent,CommonModule,FormsModule]
})
export class ContactComponent implements OnInit{

  constructor(public sharedService: SharedcontactService, private languageService: LanguageService, private toastr: ToastrService ,     private serviceService: ServiceListService,
    private custumerData: CustumerdataService,
    private tost:ToastrService) {}

  closeContactForm(): void {
    this.sharedService.showContactForm = false;
  }

  countries=[
    { id: 1, name: 'Afghanistan', code: '+93', img: 'assets/4x3/af.svg' },
    { id: 2, name: 'Albania', code: '+355', img: 'assets/4x3/al.svg' },
    { id: 3, name: 'Algeria', code: '+213', img: 'assets/4x3/dz.svg' },
    { id: 4, name: 'Andorra', code: '+376', img: 'assets/4x3/ad.svg' },
    { id: 5, name: 'Angola', code: '+244', img: 'assets/4x3/ao.svg' },
    { id: 6, name: 'Antigua and Barbuda', code: '+1-268', img: 'assets/4x3/ag.svg' },
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
    { id: 22, name: 'Bosnia and Herzegovina', code: '+387', img: 'assets/4x3/ba.svg' },
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
    { id: 33, name: 'Central African Republic', code: '+236', img: 'assets/4x3/cf.svg' },
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
    { id: 48, name: 'Dominican Republic', code: '+1-809', img: 'assets/4x3/do.svg' },
    { id: 49, name: 'East Timor', code: '+670', img: 'assets/4x3/tl.svg' },
    { id: 50, name: 'Ecuador', code: '+593', img: 'assets/4x3/ec.svg' },
    { id: 51, name: 'Egypt', code: '+20', img: 'assets/4x3/eg.svg' },
    { id: 52, name: 'El Salvador', code: '+503', img: 'assets/4x3/sv.svg' },
    { id: 53, name: 'Equatorial Guinea', code: '+240', img: 'assets/4x3/gq.svg' },
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
    { id: 106, name: 'Marshall Islands', code: '+692', img: 'assets/4x3/mh.svg' },
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
    { id: 127, name: 'North Macedonia', code: '+389', img: 'assets/4x3/mk.svg' },
    { id: 128, name: 'Norway', code: '+47', img: 'assets/4x3/no.svg' },
    { id: 129, name: 'Oman', code: '+968', img: 'assets/4x3/om.svg' },
    { id: 130, name: 'Pakistan', code: '+92', img: 'assets/4x3/pk.svg' },
    { id: 131, name: 'Palau', code: '+680', img: 'assets/4x3/pw.svg' },
    { id: 132, name: 'Palestine', code: '+970', img: 'assets/4x3/ps.svg' },
    { id: 133, name: 'Panama', code: '+507', img: 'assets/4x3/pa.svg' },
    { id: 134, name: 'Papua New Guinea', code: '+675', img: 'assets/4x3/pg.svg' },
    { id: 135, name: 'Paraguay', code: '+595', img: 'assets/4x3/py.svg' },
    { id: 136, name: 'Peru', code: '+51', img: 'assets/4x3/pe.svg' },
    { id: 137, name: 'Philippines', code: '+63', img: 'assets/4x3/ph.svg' },
    { id: 138, name: 'Poland', code: '+48', img: 'assets/4x3/pl.svg' },
    { id: 139, name: 'Portugal', code: '+351', img: 'assets/4x3/pt.svg' },
    { id: 140, name: 'Qatar', code: '+974', img: 'assets/4x3/qa.svg' },
    { id: 141, name: 'Romania', code: '+40', img: 'assets/4x3/ro.svg' },
    { id: 142, name: 'Russia', code: '+7', img: 'assets/4x3/ru.svg' },
    { id: 143, name: 'Rwanda', code: '+250', img: 'assets/4x3/rw.svg' },
    { id: 144, name: 'Saint Kitts and Nevis', code: '+1-869', img: 'assets/4x3/kn.svg' },
    { id: 145, name: 'Saint Lucia', code: '+1-758', img: 'assets/4x3/lc.svg' },
    { id: 146, name: 'Saint Vincent and the Grenadines', code: '+1-784', img: 'assets/4x3/vc.svg' },
    { id: 147, name: 'Samoa', code: '+685', img: 'assets/4x3/ws.svg' },
    { id: 148, name: 'San Marino', code: '+378', img: 'assets/4x3/sm.svg' },
    { id: 149, name: 'Sao Tome and Principe', code: '+239', img: 'assets/4x3/st.svg' },
    { id: 150, name: 'Saudi Arabia', code: '+966', img: 'assets/4x3/sa.svg' },
    { id: 151, name: 'Senegal', code: '+221', img: 'assets/4x3/sn.svg' },
    { id: 152, name: 'Serbia', code: '+381', img: 'assets/4x3/rs.svg' },
    { id: 153, name: 'Seychelles', code: '+248', img: 'assets/4x3/sc.svg' },
    { id: 154, name: 'Sierra Leone', code: '+232', img: 'assets/4x3/sl.svg' },
    { id: 155, name: 'Singapore', code: '+65', img: 'assets/4x3/sg.svg' },
    { id: 156, name: 'Slovakia', code: '+421', img: 'assets/4x3/sk.svg' },
    { id: 157, name: 'Slovenia', code: '+386', img: 'assets/4x3/si.svg' },
    { id: 158, name: 'Solomon Islands', code: '+677', img: 'assets/4x3/sb.svg' },
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
    { id: 176, name: 'Trinidad and Tobago', code: '+1-868', img: 'assets/4x3/tt.svg' },
    { id: 177, name: 'Tunisia', code: '+216', img: 'assets/4x3/tn.svg' },
    { id: 178, name: 'Turkey', code: '+90', img: 'assets/4x3/tr.svg' },
    { id: 179, name: 'Turkmenistan', code: '+993', img: 'assets/4x3/tm.svg' },
    { id: 180, name: 'Tuvalu', code: '+688', img: 'assets/4x3/tv.svg' },
    { id: 181, name: 'Uganda', code: '+256', img: 'assets/4x3/ug.svg' },
    { id: 182, name: 'Ukraine', code: '+380', img: 'assets/4x3/ua.svg' },
    { id: 183, name: 'United Arab Emirates', code: '+971', img: 'assets/4x3/ae.svg' },
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
    { id: 194, name: 'Zimbabwe', code: '+263', img: 'assets/4x3/zw.svg' }
  ]
  selectedCountry: string='';
  selectedCountryImage: string='assets/4x3/ge.svg';
  clienPhoneNumber ='+995';
  clientName ='';
  clienEmail ='';
  clientMessage ='';
  clientCountry = 'GEORGIA';
  count="";

  onInputChange(){
    const guessContry = this.countries.find((element) => element.code == this.clienPhoneNumber);
    console.log(this.clienPhoneNumber)
    
    if (guessContry) {
      this.selectedCountryImage = guessContry.img;
      this.count = guessContry.name;
      this.clientCountry = this.count.toUpperCase();

    } 
  }

  ngOnInit(): void {}


  submitForm(form: any): void {
    if (form.valid) {
      this.custumerData.custumerSendData(this.clientName,this.clienEmail,this.clientCountry.toLocaleUpperCase(),this.clienPhoneNumber,this.clientMessage).subscribe(
        response => {
          this.tost.info('ჩვენ მალე გიპასუხებთ')
        },
        error => {
          this.tost.info('გთხოვთ შეავსეთ ყველა ველი')
        });
      
    }else{
      this.tost.info('გთხოვთ შეავსეთ ყველა ველი')
    }
    }
}
