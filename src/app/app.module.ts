import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryViewComponent } from './components/summary-view/summary-view.component';
import { KanbanViewComponent } from './components/kanban-view/kanban-view.component';
import { MachineViewComponent } from './components/machine-view/machine-view.component';
import { ProductionReportsComponent } from './components/production-reports/production-reports.component';
import { DigitalThreadsComponent } from './components/digital-threads/digital-threads.component';
import { AlertsViewComponent } from './components/alerts-view/alerts-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { SupportComponent } from './components/support/support.component';
import { TutorialsDocumentsComponent } from './components/tutorials-documents/tutorials-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryViewComponent,
    KanbanViewComponent,
    MachineViewComponent,
    ProductionReportsComponent,
    DigitalThreadsComponent,
    AlertsViewComponent,
    NavbarComponent,
    HomeComponent,
    MessageComponent,
    AnnouncementComponent,
    SupportComponent,
    TutorialsDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
