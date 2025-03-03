import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
    selector: 'app-dashboard',
    imports: [NavbarComponent, FooterComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
