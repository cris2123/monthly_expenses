import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './user.model';
import { getModelToken } from '@nestjs/sequelize';

const mockUserModel = {
  findAll: jest.fn(),
};

describe('Users Service', () => {
  let userService: UsersService;
  let userModel: typeof User;

  beforeEach(async () => {
    // initialize a nestjs module with user service
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    userService = module.get(UsersService);
    userModel = module.get<typeof User>(getModelToken(User));
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('findAll', () => {
    it('calls UsersService.findAll to get all users', () => {
      expect(userModel.findAll).not.toHaveBeenCalled();
    });
  });
});
// at the moment I noticed that userValue workos with mocks directly
