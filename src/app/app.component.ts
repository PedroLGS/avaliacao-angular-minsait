import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avaliacao-angular-minsait';

  exibirAlerta(has: string) {
    alert(`O palmeirast ${has} mundial`);
  }
}
