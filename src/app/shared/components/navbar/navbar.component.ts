import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { }
  