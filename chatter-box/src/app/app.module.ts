import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Add this line

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
// (import other components if needed)

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ✅ Add this inside the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
