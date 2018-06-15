import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

 import { AgmCoreModule } from '@agm/core';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { ProblemNotificationsComponent } from './problem-notifications.component';
import { Routes, RouterModule } from '@angular/router';
import { ProblemNotificationService } from '../service/problem-notification/problem-notification.service';
 
export const appRoutes: Routes = [
  { path: '', component: ProblemNotificationsComponent, data: { animation: 'googlemap' } },

]

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    RouterModule.forChild(appRoutes)

  ],

  declarations: [
    ProblemNotificationsComponent],

  exports: [
  ],
  providers: [
    { provide: 'problemNotificationService', useClass: ProblemNotificationService }
  ]

})


export class ProblemNotificationsModule { }
