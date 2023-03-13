import { Remult } from 'remult';
import { Users } from './Users';

export class UserController {
  constructor(private remult: Remult) {}

  async create(users: Users) {
    await users.save();
  }

  async read(id: string) {
    return await this.remult.repo(Users).findFirst();
  }

  async update(users: Users) {
    await users.save();
  }

  async delete(id: string) {
    const users = await this.read(id);
    if (users) {
      await users.delete();
    }
  }
}
