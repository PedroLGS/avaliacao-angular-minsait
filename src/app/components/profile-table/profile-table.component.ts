import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {

  @Input() profile: IProfile[] = [];

}
