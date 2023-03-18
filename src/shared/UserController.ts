import { Allow, BackendMethod, remult, Remult } from 'remult';
import { Task } from './Task';
import { User } from './Users';
import { Request, Response } from 'express';

export function UserController (remult: Remult) {
  return {
    async register(req: Request, res: Response) {
      const { name, password } = req.body;

      const existingUser1 = await remult.repo(User)
      existingUser2: User = existingUser1.find(user => user.name === req.body.username && user.password === req.body.password);

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      const hashedPassword = await crypto.hash(password, 10);

      const user = remult.repo(User).create({
        name,
        password: hashedPassword,
      });

      await user.save();

      return res.status(201).json({ message: 'User created' });
    },

    async login(req: Request, res: Response) {
      const { name, password } = req.body;

      const user = await remult.repo(User).findFirst({
        where: (user: { name: { isEqualTo: (arg0: any) => any; }; }) => user.name.isEqualTo(name),
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id }, 'your_secret_key_here');

      return res.json({ token });
    },
  };
}



auth.post("/api/signIn", async (req: { body: { username: any; password: any; }; session: any; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {

  const user = validUsers.find((user: { name: any; password: any; }) => user.name === req.body.username && user.password === req.body.password)
  if (user) {
    req.session!["user"] = user
    res.json(user)
  } else {
    res.status(404).json("Invalid user")

  }
})


auth.post("/api/signOut", (req: { session: any; }, res: { json: (arg0: string) => void; }) => {
  req.session!["user"] = null
  res.json("signed out")
})

auth.get("/api/currentUser", (req: { session: any; }, res: { json: (arg0: any) => any; }) => res.json(req.session!["user"]))
