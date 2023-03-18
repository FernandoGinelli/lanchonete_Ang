import { remult } from "remult";
import { User } from "./Users";


export class Arai{
   usersRepo = remult.repo(User);
   users: User[] = []
  private  = this.usersRepo.find().then((users) => (this.users = users));

  public getusers() : User[] {
    return this.users
  }


}
