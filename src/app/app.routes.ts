import { Routes } from '@angular/router';
import { HomeAfterLogin } from '../app/core/Customer-Module/home-after-login/home-after-login'
import { Admin } from './core/Admin-Module/admin/admin';
import { Header } from './core/Shared-Module/header/header';
import { Navbar } from './core/Shared-Module/navbar/navbar';
import { Profile } from './core/Customer-Module/profile/profile';
import { Booking } from './core/Customer-Module/booking/booking';
import { Message } from './core/Customer-Module/message/message';
import { ProfessionalDashboard } from './core/Professional-Module/professional-dashboard/professional-dashboard';
import { Login } from './core/Shared-Module/login/login';
import { Signup } from './core/Shared-Module/signup/signup';
import { Service } from './core/Customer-Module/service/service';
import { Address } from './core/Customer-Module/address/address';
export const routes: Routes = [
    { path: '', component: Navbar },
    { path: 'HomeAfterLogin', component: HomeAfterLogin },
    { path: 'admin', component: Admin },
    { path: 'header', component: Header }, 
    { path: 'profile', component: Profile },
    { path: 'booking', component: Booking },
    { path: 'message', component: Message },
    {path : 'professional-dashboard', component: ProfessionalDashboard},
    {path : 'login', component: Login},
    {path : 'signup', component: Signup},
    {path : 'service', component: Service},
    { path: 'address', component: Address }
    
];
