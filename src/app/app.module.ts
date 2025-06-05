import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { KycComponent } from './components/kyc/kyc.component';
import { PassportVisaComponent } from './components/passport-visa/passport-visa.component';
import { FamilyComponent } from './components/family/family.component';
import { PreviousEmploymentComponent } from './components/previous-employment/previous-employment.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { DocumentComponent } from './components/document/document.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FinalComponent } from './components/final/final.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NavDetailsComponent } from './components/nav-details/nav-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { LoginByNumberComponent } from './components/login-by-number/login-by-number.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PendingUserComponent } from './components/pending-user/pending-user.component';

import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NavDisplayComponent } from './components/nav-display/nav-display.component';
import { EmpkycComponent } from './components/employee-details/empkyc/empkyc.component';
import { EmppassportComponent } from './components/employee-details/emppassport/emppassport.component';
import { EmpfamilyComponent } from './components/employee-details/empfamily/empfamily.component';
import { EmppreviousEmployeeComponent } from './components/employee-details/empprevious-employee/empprevious-employee.component';
import { EmpeducationComponent } from './components/employee-details/empeducation/empeducation.component';
import { EmpskillsComponent } from './components/employee-details/empskills/empskills.component';
import { EmpcertificateComponent } from './components/employee-details/empcertificate/empcertificate.component';
import { EmpdocumentComponent } from './components/employee-details/empdocument/empdocument.component';
import { EmpresumeComponent } from './components/employee-details/empresume/empresume.component';
import { EmpfinalComponent } from './components/employee-details/empfinal/empfinal.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { TimeSheetViewComponent } from './components/time-sheet/time-sheet-view/time-sheet-view.component';
import { HoildayCalendarComponent } from './components/mainlayout/hoilday-calendar/hoilday-calendar.component';
import { DashboardhomeComponent } from './components/mainlayout/dashboardhome/dashboardhome.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { FeedbacksComponent } from './components/mainlayout/feedbacks/feedbacks.component';
import { WorkhoursComponent } from './components/mainlayout/workhours/workhours.component';
import { HiringComponent } from './components/mainlayout/hiring/hiring.component';
import { WorkHistoryComponent } from './components/mainlayout/work-history/work-history.component';
import { WishcardComponent } from './components/mainlayout/wishcard/wishcard.component';
import { AnnouncementComponent } from './components/mainlayout/announcement/announcement.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    KycComponent,
    PassportVisaComponent,
    FamilyComponent,
    PreviousEmploymentComponent,
    EducationComponent,
    SkillsComponent,
    CertificateComponent,
    DocumentComponent,
    ResumeComponent,
    FinalComponent,
    HomeComponent,
    NavComponent,
    NavDetailsComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AdminLoginComponent,
    EmployeeDataComponent,
    LoginByNumberComponent,
    OnboardingComponent,
    PendingUserComponent,


    EmployeeDetailsComponent,
    NavDisplayComponent,
    EmpkycComponent,
    EmppassportComponent,
    EmpfamilyComponent,
    EmppreviousEmployeeComponent,
    EmpeducationComponent,
    EmpskillsComponent,
    EmpcertificateComponent,
    EmpdocumentComponent,
    EmpresumeComponent,
    EmpfinalComponent,
   

    TimeSheetComponent,
    TimeSheetComponent,
    TimeSheetViewComponent,
    HoildayCalendarComponent,
    DashboardhomeComponent,
    MainlayoutComponent,
    FeedbacksComponent,
    WorkhoursComponent,
    HiringComponent,
    WorkHistoryComponent,
    WishcardComponent,
    AnnouncementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
