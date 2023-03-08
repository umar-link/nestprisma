import { ApiProperty } from '@nestjs/swagger';
import { Users } from '@prisma/client';

export class UserEntity implements Users {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  password: string;
}
