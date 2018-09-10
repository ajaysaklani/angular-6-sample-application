import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

import { ReceiptListComponent } from './warehouse/receipt-list/receipt-list.component';
import { ReceiptFormComponent } from './warehouse/receipt-form/receipt-form.component';
import { PackageListComponent } from './warehouse/package-list/package-list.component';

import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReportListComponent } from './report-list/report-list.component';
import { UsersListComponent } from './AccountManagement/users-list/users-list.component';
import { UserFormComponent } from './AccountManagement/user-form/user-form.component';
import { SecurityListComponent } from './AccountManagement/security-list/security-list.component';
import { SecurityFormComponent } from './AccountManagement/security-form/security-form.component';

// Route Configuration
export const routes: Routes = [

	{ path: '', component: ReceiptListComponent, pathMatch: 'full', data: { title: 'Receipt List' } },
	{ path: 'receipt', component: ReceiptFormComponent, data: { title: 'Add/Edit Receipt' } },
	{ path: 'packagelist', component: PackageListComponent, data: { title: 'All Packages' } },

	{ path: 'userslist', component: UsersListComponent, data: { title: 'Users list' } },
	{ path: 'user', component: UserFormComponent, data: { title: 'User Form' } },
	{ path: 'securitylist', component: SecurityListComponent, data: { title: 'Security List' } },
	{ path: 'security', component: SecurityFormComponent, data: { title: 'Add/Edit Receipt' } },

	{
		path: 'login', canActivate: [PublicGuard],
		loadChildren: './login/login.module#LoginModule'
	},
	// { path: 'signup', component: SignupComponent , data:{title:'Signup | Online Course Enrollment System'}},

	// // user login
	// { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] , data:{title:'Dashboard | Online Course Enrollment System'}},

	// otherwise redirect to notfound
	{ path: '**', redirectTo: 'notfound' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);