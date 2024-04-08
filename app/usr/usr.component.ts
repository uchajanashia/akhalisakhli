import { Component } from '@angular/core';
import { ServiceListService } from '../service-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usr',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './usr.component.html',
  styleUrl: './usr.component.scss',
})
export class UsrComponent {
  dateFilter: string = '';
  roleFilter: string = '';
  usernameFilter: string = '';
  emailFilter: string = '';
  fullNameFilter: string = '';
  ifNotificationRead=true;
  isadduseron=false;
  toggleadduser() {
    this.isadduseron = !this.isadduseron;
  }

  notifications: any[] = [
    { 
      id: 1, 
      title: 'Notification 1', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      name: 'John doe',  
      phone: '+123456789', 
      email: 'john.doe@example.com', 
      date: new Date() 
    },
    { 
      id: 2, 
      title: 'Notification 2', 
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      name: 'Jane doe', 
      phone: '+987654321', 
      email: 'jane.smith@example.com', 
      date: new Date() 
    },
  ];
  showNotifications=false;
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  today: Date = new Date();
  users: any[] = [
    {
      user_id: 1,
      username: 'johnDoe123',
      email: 'john.doe123@example.com',
      full_name: 'John Doe',
      created_at: new Date('2023-11-15'),
      roles: ['admin'],
    },
    {
      user_id: 2,
      username: 'janeSmith456',
      email: 'jane.smith456@example.com',
      full_name: 'Jane Smith',
      created_at: new Date('2022-05-20'),
      roles: ['moderator'],
    },
    {
      user_id: 3,
      username: 'davidJohnson789',
      email: 'david.johnson789@example.com',
      full_name: 'David Johnson',
      created_at: new Date('2024-02-10'),
      roles: ['moderator'],
    },
    {
      user_id: 4,
      username: 'emilyBrown321',
      email: 'emily.brown321@example.com',
      full_name: 'Emily Brown',
      created_at: new Date('2023-09-05'),
      roles: ['user'],
    },
    {
      user_id: 5,
      username: 'wersit35',
      email: 'okupara123@gmail.com',
      full_name: 'Michael Davis',
      created_at: new Date('2024-01-30'),
      roles: ['user'],
    },
    {
      user_id: 6,
      username: 'emmaWilson987',
      email: 'emma.wilson987@example.com',
      full_name: 'Emma Wilson',
      created_at: new Date('2023-07-25'),
      roles: ['user'],
    },
    {
      user_id: 7,
      username: 'lisaTaylor246',
      email: 'lisa.taylor246@example.com',
      full_name: 'Lisa Taylor',
      created_at: new Date('2022-12-01'),
      roles: ['user'],
    },
    {
      user_id: 8,
      username: 'kevinJones789',
      email: 'kevin.jones789@example.com',
      full_name: 'Kevin Jones',
      created_at: new Date('2024-04-10'),
      roles: ['user'],
    },
    {
      user_id: 9,
      username: 'sarahMiller123',
      email: 'sarah.miller123@example.com',
      full_name: 'Sarah Miller',
      created_at: new Date('2023-08-20'),
      roles: ['user'],
    },
    {
      user_id: 10,
      username: 'alexanderClark987',
      email: 'alexander.clark987@example.com',
      full_name: 'Alexander Clark',
      created_at: new Date('2024-03-05'),
      roles: ['user'],
    },
    {
      user_id: 11,
      username: 'oliviaWilson321',
      email: 'olivia.wilson321@example.com',
      full_name: 'Olivia Wilson',
      created_at: new Date('2023-10-15'),
      roles: ['user'],
    },
    {
      user_id: 12,
      username: 'ryanBrown654',
      email: 'ryan.brown654@example.com',
      full_name: 'Ryan Brown',
      created_at: new Date('2022-11-30'),
      roles: ['user'],
    },
  ];
  filteredUsers: any[] = this.users;
  searchTerm: string = '';
  filters: any[] = [
    // { label: 'დასახელება', type: 'checkbox', checked: false },
    // { label: 'ელ-ფოსტა', type: 'checkbox', checked: false },
    // { label: 'სახელი - გვარი', type: 'checkbox', checked: false },
    { label: 'ადმინი', type: 'role', value: 'admin', checked: false },
    { label: 'მოდერატორი', type: 'role', value: 'moderator', checked: false },
    { label: 'მომხმარებელი', type: 'role', value: 'user', checked: false },
  ];

  applyFilter() {
    this.filteredUsers = this.users.filter(user => {
      // Filter by search term
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      const matchesSearchTerm = 
        user.username.toLowerCase().includes(searchTermLowerCase) ||
        user.email.toLowerCase().includes(searchTermLowerCase) ||
        user.full_name.toLowerCase().includes(searchTermLowerCase);
  
      // Filter by date
      const matchesDate = !this.dateFilter ||
        new Date(user.created_at).toISOString().substring(0, 10) === this.dateFilter;
  
      // Filter by role
      const matchesRole = !this.roleFilter || user.roles.includes(this.roleFilter);
  
      // Filter by username
      const matchesUsername = !this.usernameFilter ||
        user.username.toLowerCase().includes(this.usernameFilter.toLowerCase());
  
      // Filter by email
      const matchesEmail = !this.emailFilter ||
        user.email.toLowerCase().includes(this.emailFilter.toLowerCase());
  
      // Filter by full name
      const matchesFullName = !this.fullNameFilter ||
        user.full_name.toLowerCase().includes(this.fullNameFilter.toLowerCase());
  
      // Return true if all filters match
      return matchesSearchTerm && matchesDate && matchesRole && 
             matchesUsername && matchesEmail && matchesFullName;
    });
  }
  
  
  

  newUser: any = {
    username: '',
    email: '',
    full_name: '',
    role: 'user' // Default role
  };

  // Method to add a new user
  addUser() {
    // Push the new user object into the users array
    this.users.push({
      user_id: this.users.length + 1, // Generate unique user_id
      username: this.newUser.username,
      email: this.newUser.email,
      full_name: this.newUser.full_name,
      created_at: new Date(),
      roles: [this.newUser.role]
    });

    // Reset the form fields
    this.newUser = {
      username: '',
      email: '',
      full_name: '',
      role: 'user' // Reset role to default
    };
  }

  constructor(private serviceService: ServiceListService) {}

  ngOnInit(): void {}

  loadUsers() {
    // this.serviceService.getUsers().subscribe((data: any[]) => {
    //   this.users = data;
    //   this.applyFilter();
    // });
  }

  // applyFilter() {
  //   this.filteredUsers = this.users.filter(user =>
  //     user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     user.full_name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  editUser(user: any) {
    // Implement edit functionality (example for modal dialog - placeholder)
    alert('Edit User: ' + user.username); // Replace with your editing logic
  }

  deleteUser(user: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      const userIndex = this.users.findIndex((u) => u.user_id === user.user_id);
      if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
        this.filteredUsers = this.users; // Update filtered users as well
      }
    }
  }

  // editUser(user: any) {
  //   // Implement edit functionality (example with API call)
  //   this.http.put<any>('https://api.example.com/users/' + user.user_id, user)
  //     .subscribe(updatedUser => {
  //       const userIndex = this.users.findIndex(u => u.user_id === user.user_id);
  //       if (userIndex !== -1) {
  //         this.users[userIndex] = updatedUser;
  //       }
  //     });
  // }

  // deleteUser(user: any) {
  //   // Implement delete functionality (example with API call)
  //   this.http.delete<any>('https://api.example.com/users/' + user.user_id)
  //     .subscribe(() => {
  //       const userIndex = this.users.findIndex(u => u.user_id === user.user_id);
  //       if (userIndex !== -1) {
  //         this.users.splice(userIndex, 1);
  //       }
  //       this.filteredUsers = this.users; // Update filtered users as well
  //     });
  // }
}
