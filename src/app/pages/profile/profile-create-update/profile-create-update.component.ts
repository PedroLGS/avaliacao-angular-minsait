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
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(120)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    isActive: new FormControl(false),
    country: new FormControl('', Validators.maxLength(50)),
    experience : new FormControl('', Validators.maxLength(50))
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.buscarPorId(+id).subscribe(profile => {
        this.profileForm.setValue(profile);
      });
    }
  }

  onSubmit() {
    const profile: IProfile = this.profileForm.value as IProfile;
    if (profile.id) {
      this.editar(profile);
    } else {
      this.cadastrar(profile);
    }
  }

  cadastrar(profile: IProfile) {
    this.profileService.cadastrar(profile).subscribe(result => {
      Swal.fire({
        title: 'Pessoa cadastrada com sucesso!',
        text: 'Cadastrada!',
        icon: 'success',
      });
      this.router.navigateByUrl('/profile');
    });
  }
  
  editar(profile: IProfile) {
    this.profileService.editar(profile).subscribe(result => {
      Swal.fire({
        title: 'Pessoa atualizada com sucesso!',
        text: 'Atualizada!',
        icon: 'success',
      });
      this.router.navigateByUrl('/profile');
    });
  }
}
