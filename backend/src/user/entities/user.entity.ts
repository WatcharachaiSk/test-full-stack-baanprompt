import { BaseEntity } from "src/base/base.entity";
import { Column, Entity, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('user')
@Unique(['email'])
export class UserEntity extends BaseEntity {

  @Column()
  email: string

  @Column()
  password: string

  @Column({ name: "thai_first_name" })
  thaiFirstName: string

  @Column({ name: "thai_last_name" })
  thaiLastName: string

  @Column({ name: "eng_firs_name" })
  engFirsName: string

  @Column({ name: "eng_last_name" })
  engLastName: string

  @Column({ name: "phone_number", nullable: true })
  phoneNumber: string

  @Column({ name: "verify", default: false })
  verify: boolean

  @Column({ name: "isActive", default: true })
  isActive: boolean

  async hashPassword(password: string, saltOrRounds: number) {
    return await bcrypt.hash(password, saltOrRounds);
  }
}
