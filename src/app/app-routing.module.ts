import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { FaqComponent } from './components/faq/faq.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {path : 'contactUs' , component : ContactUsComponent },
  {path : 'aboutUs' , component : AboutUsComponent },
  {path : 'hustleRide' , component : RegisterComponent },
  {path : 'faq' , component : FaqComponent },
  {path : 'payments' , component : PaymentComponent },


  {path: '', component: HomepageComponent},

  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
