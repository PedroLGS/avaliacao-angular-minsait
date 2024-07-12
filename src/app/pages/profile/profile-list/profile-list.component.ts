import { Component } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  constructor(private profileService: ProfileService) {}
  profiles: IProfile[] = [];

  ngOnInit() {
    this.profileService.buscarTodos().subscribe(result => {
      this.profiles = result;
    }, error => {
      console.error(error);
    });
  }


}
