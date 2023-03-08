import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await hash(createUserDto.password, 10);

    return this.prisma.users.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    // return `This action returns all users`;
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashedPassword = await hash(updateUserDto.password, 10);
    return this.prisma.users.update({
      data: {
        ...updateUserDto,
        password: hashedPassword,
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
