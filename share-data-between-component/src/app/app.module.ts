import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenOneComponent,
    ChildrenTwoComponent,
    SiblingOneComponent,
    SiblingTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
