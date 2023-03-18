import { Component } from '@angular/core';
import { remult } from 'remult';
import { User } from 'src/shared/Users';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {


userRepo = remult.repo(User)
  users: User[] = []

  newUserTitle = ""
  newUserTitle2 = ""
  newUserTitle3 = ""
  async addUser() {
    try {
      const newUser = await this.userRepo.insert({ name: this.newUserTitle, roles: [this.newUserTitle2], password: this.newUserTitle3})
      this.users.push(newUser)
      this.newUserTitle = ""
      this.newUserTitle2 = ""
      this.newUserTitle3 = ""
    } catch (error: any) {
      alert(error.message)
    }
  }

  reloadPage() {
    window.location.reload();
  }

async saveUser(user: User) {
  try {
    await this.userRepo.save(user)
  } catch (error: any) {
    alert(error.message)
  }
  this.ngOnInit()
}
// src/app/todo/todo.component.ts

async deleteUser(user: User) {
  await this.userRepo.delete(user);
  this.users = this.users.filter(t => t !== user);
}



ngOnInit() {
  this.userRepo.find().then((items) => (this.users = items));
}


}
