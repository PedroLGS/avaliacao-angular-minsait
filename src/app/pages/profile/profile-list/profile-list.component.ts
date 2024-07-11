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

  excluir(id: string) {
    Swal.fire({
      title: 'Tem certeza que deseja excluir o perfil?',
      text: 'Não será possível reverter!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Não, cancele!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.excluir(id).subscribe(() => {
          this.profiles = this.profiles.filter(profile => profile.id !== id);
          Swal.fire(
            'Excluído!',
            'O perfil foi excluído.',
            'success'
          );
        });
      }
    });
  }
}
