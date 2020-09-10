import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { ListComponent } from './cv/components/list/list.component';
import { ItemComponent } from './cv/components/item/item.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './components/todo/todo/todo.component';
import { TodoService } from './components/todo/service/todo.service';
import { EmbaucheComponent } from './cv/components/embauche/embauche.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailsCvComponent } from './cv/pages/details-cv/details-cv.component';
import { FrontComponent } from './components/front/front.component';
import { BackComponent } from './components/back/back.component';
import { NF404Component } from './components/nf404/nf404.component';
import { FormExampleComponent } from './forms/form-example/form-example.component';
import { AddPersonnesComponent } from './cv/pages/add-personnes/add-personnes.component';
import { LoginComponent } from './pages/login/login.component';
import { ObservableExampleComponent } from './observables/observable-example/observable-example.component';
import { UsersComponent } from './http/users/users.component';
import { AuthInterceptorProvider } from './common/interceptor/auth';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    ListComponent,
    ItemComponent,
    CvComponent,
    DetailComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    RouterSimulatorComponent,
    DetailsCvComponent,
    FrontComponent,
    BackComponent,
    NF404Component,
    FormExampleComponent,
    AddPersonnesComponent,
    LoginComponent,
    ObservableExampleComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
