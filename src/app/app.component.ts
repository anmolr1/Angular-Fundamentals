import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name="anmol";
  public title="My App"
  public message="";
  getMessage($event){
   this.message= $event;
  }
}
