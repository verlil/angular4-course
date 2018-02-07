import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RescuetimeTestComponent } from './rescuetime-test/rescuetime-test.component';
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers',
    //canActivate: [AuthGuard], //this wil affect to all "server" routes
    canActivateChild: [AuthGuard], //this will affect only to child "server" routes
    component: ServersComponent,
    children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'rescuetime', component: RescuetimeTestComponent },
  { path: '**', redirectTo: '/not-found' }
];//this array contains Routes

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
