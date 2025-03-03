import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";

@Component({
    selector: 'app-order-details',
    imports: [NavbarComponent, SidebarComponent],
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

}
