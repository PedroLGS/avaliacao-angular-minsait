import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {
  
  constructor(private profileService: ProfileService, private router: Router, private route: ActivatedRoute) {}

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    role: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    age: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(120)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    isActive: new FormControl(false),
    country: new FormControl('', Validators.maxLength(50)),
    experience : new FormControl('', Validators.maxLength(50))
  });

  id: string | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.profileService.buscarPorId(this.id).subscribe(profile => {
        this.profileForm.patchValue(profile);
      });
    }
  }

  cadastrarEditarProfile() {
    const profile: IProfile = this.profileForm.value as IProfile;

    if (this.id) {
      profile.id = this.id;
      this.profileService.editar(profile).subscribe((result: IProfile) => {
        Swal.fire({
          title: 'Pessoa editada com sucesso!',
          text: 'Concluído!',
          icon: 'success',
        });
        this.router.navigateByUrl('/profile');
      });
    } else {
      this.profileService.cadastrar(profile).subscribe((result: IProfile) => {
        Swal.fire({
          title: 'Pessoa cadastrada com sucesso!',
          text: 'Concluído!',
          icon: 'success',
        });
        this.router.navigateByUrl('/profile');
      });
    }
  }

  cancelar() {
    this.router.navigateByUrl('/profile')
  }
}
