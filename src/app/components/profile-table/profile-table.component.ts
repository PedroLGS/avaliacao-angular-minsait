import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {
  @Input() profiles: IProfile[] = [];

  constructor(private profileService: ProfileService) {}

  excluir(id: string) {
    Swal.fire({
      title: 'Deseja excluir a pessoa?',
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
            'Pessoa excluída com sucesso!',
            'Concluído!',
            'success'
          );
        });
      }
    });
  }
}
