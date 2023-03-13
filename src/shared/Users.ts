import { EntityBase, IdEntity, Field, Validators, Entity, Allow, Fields } from 'remult';



@Entity<Users>("users", {
  allowApiCrud: Allow.authenticated,
  allowApiInsert:"admin"||"fisSelf",
  allowApiDelete:"admin"||"cozin"||"fisSelf"
})

export class Users extends IdEntity {
  @Fields.string({validate: Validators.required})
  name= ""

  @Fields.string()
  email = ""

  @Fields.string()
  password = ""
}
