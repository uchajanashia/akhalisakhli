import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustumerdataService } from '../../custumerdata.service';
import { delay, interval } from 'rxjs';
@Component({
  selector: 'app-mess',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mess.component.html',
  styleUrl: './mess.component.scss'
})
export class MessComponent implements OnInit {

  notifications: any[] = [

  ];
  ngOnInit(): void {
    this.fetchCustomers();
    interval(30000).subscribe(() => {
      this.fetchCustomers();
    });
  }
  errorMessage = "";
  numberValue= 0;
  filteredNotifications: any[] = [];
  constructor(
    private customerService:CustumerdataService,
    private datePipe: DatePipe
  ) {
    this.filteredNotifications = this.notifications.slice();
  }
  filterTable(column: string, event: any) {
    const value = (event.target.value as string).toLowerCase(); 
    this.filteredNotifications = this.notifications.filter(notification => {
        if (notification && notification[column] !== null && notification[column] !== undefined) {
            if (column === 'date') {
                return this.filterByDate(notification[column] as string, value);
            } else {
                return (notification[column] as string).toLowerCase().includes(value);
            }
        }
        return false;
    });
}
filterByDate(dateString: string, value: string): boolean {
  const inputDate = new Date(value);
  const notificationDate = new Date(dateString);

  if (!isNaN(inputDate.getTime()) && !isNaN(notificationDate.getTime())) {
      // Check if the input date matches the notification date
      return inputDate.toDateString() === notificationDate.toDateString();
  } else {
      return false; // If either date is invalid, return false
  }
}
filterByRating(rating: number) {
  this.filteredNotifications = this.notifications.filter(notification => {
    // Convert the customer point to a number
    const customerPoint = this.extractNumberFromValue(notification.customerPoint);
    
    // Check if the customer point matches the selected rating
    return customerPoint === rating;
  });
}

fetchCustomers(): void {
  this.customerService.fetchCustomers().subscribe(
    data => {
      this.notifications = data
      this.filteredNotifications = data;
      console.log(this.filteredNotifications)
    },
    error => {
      this.errorMessage = error;
    }
  );
}
formatDate(date: any): string {
  let convertedDate = new Date(date);
  let options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let formattedDate = convertedDate.toLocaleString('en-US', options);
  return formattedDate;
}
rateMessage(notification: any, rating: string) {
  this.customerService.rate(notification , rating)
  this.fetchCustomers();
  this.fetchCustomers();

}
extractNumberFromValue( value :string) {
  
  // Extracting number using regular expression
  const matches = value.match(/\d+/);
  if (matches && matches.length > 0) {
    this.numberValue = parseInt(matches[0], 10);
  } else {
    // Handle case where no number found
    this.numberValue = 0;
  }
  return this.numberValue;
}


  updateComment(id:string , comment: string) {
    this.customerService.setcoment(id, comment);
    this.fetchCustomers();
    this.fetchCustomers();
}
check( id : string){
  this.customerService.check(id)
  this.fetchCustomers();
}
deletemessage(id : string) {
  this.customerService.deletemessage(id)
  this.fetchCustomers()
  this.fetchCustomers()
  
  }

  deleteclient(id : string){
    this.customerService.deleteclient(id)
  this.fetchCustomers()
  this.fetchCustomers()
  
  }
}
