import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {
  
  constructor(private profileService: ProfileService, private router: Router) {}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', Validators.required),
    isActive: new FormControl(false),
    country: new FormControl(''),
    experience : new FormControl('')
  });

  onSubmit() {
    const profile = this.profileForm.value;
    console.log(profile)
    this.profileService.cadastrar(profile).subscribe(result => {
      console.log(result)
      Swal.fire({
        title: 'Pessoa cadastrada com sucesso!',
        text: 'Parabéns!',
        icon: 'success',
      })
      this.router.navigateByUrl('/profile')
    });
  }
}
