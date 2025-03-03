import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';  // Import your Dashboard component
import { OrderTableComponent } from './features/orders/order-table/order-table.component';
import { OrderDetailsComponent } from './features/orders/order-details/order-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'inventory', loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
 // { path: '**', redirectTo: '/dashboard' }, // Catch-all for undefined routes
  { path: 'order-table', component: OrderTableComponent }, // Define the route
 // { path: '', redirectTo: 'order-table', pathMatch: 'full' }, // Optional: Redirect to Order Table
  { path: 'orders-details', component:OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }