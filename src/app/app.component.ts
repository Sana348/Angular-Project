import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentName = "Sana Mirza"

  users = ['Sana','Hemanth']

  title = 'angularproject';

  addUser(user:string){
    this.users.push(user)
  }

}
