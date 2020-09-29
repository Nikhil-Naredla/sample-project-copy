import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsViewComponent } from './components/alerts-view/alerts-view.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { DigitalThreadsComponent } from './components/digital-threads/digital-threads.component';
import { HomeComponent } from './components/home/home.component';
import { KanbanViewComponent } from './components/kanban-view/kanban-view.component';
import { MachineViewComponent } from './components/machine-view/machine-view.component';
import { ProductionReportsComponent } from './components/production-reports/production-reports.component';
import { SummaryViewComponent } from './components/summary-view/summary-view.component';
import { SupportComponent } from './components/support/support.component';
import { TutorialsDocumentsComponent } from './components/tutorials-documents/tutorials-documents.component';


const routes: Routes = [{
  path:"",component :HomeComponent
},{
  path:"summary-view",component :SummaryViewComponent
},
{
  path:"kanban-view",component :KanbanViewComponent
},{
  path:"Machine-view",component :MachineViewComponent
},{
  path:"Production-Reports",component :ProductionReportsComponent
},{
  path:"Digital-Threads",component :DigitalThreadsComponent
},{
  path:"Alerts-view",component :AlertsViewComponent
},
{
  path:"Announcements",component :AnnouncementComponent
},
{
  path:"Support",component :SupportComponent
},{
  path:"Tutorials&Documents",component :TutorialsDocumentsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
