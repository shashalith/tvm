import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { KycComponent } from './components/kyc/kyc.component';
import { PassportVisaComponent } from './components/passport-visa/passport-visa.component';
import { FamilyComponent } from './components/family/family.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { DocumentComponent } from './components/document/document.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FinalComponent } from './components/final/final.component';
import { PreviousEmploymentComponent } from './components/previous-employment/previous-employment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
// import { adminAuthGuard } from './guards/admin-auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"personal",component:PersonalComponent},
  {path:"kyc",component:KycComponent},
  {path:"passport",component:PassportVisaComponent},
  {path:"family",component:FamilyComponent},
  {path:"previousEmployee",component:PreviousEmploymentComponent},
  {path:"education",component:EducationComponent},
  {path:"skills",component:SkillsComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"document",component:DocumentComponent},
  {path:"resume",component:ResumeComponent},
  {path:"final",component:FinalComponent},
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
