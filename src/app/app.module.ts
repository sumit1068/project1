import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { CarosalComponent } from './carosal/carosal.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { JamaiheaderComponent } from './jamaiheader/jamaiheader.component';
import { LoginModule } from 'src/login/login.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import Swal from 'sweetalert2';
import { EmpoloyeeCurdComponent } from './components/empoloyee-curd/empoloyee-curd.component';
import { ZoomDirective } from './directives/zoom.directive';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { ClickcountDirective } from './directives/clickcount.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { Remaining2Pipe } from './custom-pipes/remaining2.pipe';
import { TitlepipePipe } from './custom-pipes/titlepipe.pipe';
import { OrdinalPipePipe } from './custom-pipes/ordinal-pipe.pipe';
import { EmployeeFilterPipe } from './custom-pipes/employee-filter.pipe';
import { SortFilterPipe } from './custom-pipes/sort-filter.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { ProductsApiComponent } from './components/products-api/products-api.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EmpApiComponent } from './components/emp-api/emp-api.component';
import { MyInterceptor1 } from './utils/my-interceptor1';
import { RetryInterceptor } from './utils/retry-interceptor';
import { SucessInterceptor } from './utils/sucess-interceptor';
import { Obsrvabledemo1Component } from './components/obsrvabledemo1/obsrvabledemo1.component';
import { Obsrvabledemo2Component } from './components/obsrvabledemo2/obsrvabledemo2.component';
import { Obsrvabledemo3Component } from './components/obsrvabledemo3/obsrvabledemo3.component';
import { Obsrvabledemo4Component } from './components/obsrvabledemo4/obsrvabledemo4.component';
import { Obsrvabledemo5Component } from './components/obsrvabledemo5/obsrvabledemo5.component';
import { Sublectdemo1Component } from './components/sublectdemo1/sublectdemo1.component';
import { ReceiveMessage1Component } from './components/receive-message1/receive-message1.component';
import { ReceiveMessage2Component } from './components/receive-message2/receive-message2.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { TemplateDrivenFrom1Component } from './components/template-driven-from1/template-driven-from1.component';
import { TemplateDrivenFrom2Component } from './components/template-driven-from2/template-driven-from2.component';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import { ModelDrivenForm1Component } from './components/model-driven-form1/model-driven-form1.component';
import { ModelDrivenForm2Component } from './components/model-driven-form2/model-driven-form2.component';
import { TektutorialshubTemplateDrivenForm1Component } from './components/tektutorialshub-template-driven-form1/tektutorialshub-template-driven-form1.component';
import { TektutorialshubTemplateDrivenFormSetvalueComponent } from './components/tektutorialshub-template-driven-form-setvalue/tektutorialshub-template-driven-form-setvalue.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PermananetJobsComponent } from './components/permananet-jobs/permananet-jobs.component';
import { ContructJobsComponent } from './components/contruct-jobs/contruct-jobs.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent, NavbarComponent, BodyComponent, 
    CarosalComponent, CatagoryComponent, DatabindingComponent, JamaiheaderComponent, 
    DirectiveComponent, UserListComponent,UserListComponent, EmpoloyeeCurdComponent, 
    ZoomDirective, NumberonlyDirective, ClickcountDirective, PipesComponent,
     Remaining2Pipe, TitlepipePipe, OrdinalPipePipe, EmployeeFilterPipe, SortFilterPipe, 
     ParentComponent, Child1Component, Child2Component, EmployeeListComponent, EmployeeAddComponent,
      ProductsApiComponent, EmpApiComponent, Obsrvabledemo1Component, Obsrvabledemo2Component, 
      Obsrvabledemo3Component, Obsrvabledemo4Component, Obsrvabledemo5Component, 
      Sublectdemo1Component, ReceiveMessage1Component, ReceiveMessage2Component, 
      SendMessageComponent, FormDemo1Component, TemplateDrivenFrom1Component,
       TemplateDrivenFrom2Component, RegistrationformComponent, ModelDrivenForm1Component,
       ModelDrivenForm2Component, TektutorialshubTemplateDrivenForm1Component,
        TektutorialshubTemplateDrivenFormSetvalueComponent, HomeComponent, AboutusComponent,
         CareerComponent, NotfoundComponent, ProductListComponent, PhotosComponent, PhotoDetailsComponent, PermananetJobsComponent, ContructJobsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },{ provide: HTTP_INTERCEPTORS, useClass: SucessInterceptor, multi: true },],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
