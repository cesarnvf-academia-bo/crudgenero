import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { Repository } from 'typeorm';
import { Usuario } from './usuario';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let repo: Repository<Usuario>;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  const mockUsuario: Usuario = {
    id: 1,
    usuario: 'cvincenty',
    clave: 'hashedpassword',
    rol: 'ADMIN',
    persona: null,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(Usuario),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    repo = module.get<Repository<Usuario>>(getRepositoryToken(Usuario));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería obtener todos los usuarios', async () => {
    mockRepository.find.mockResolvedValue([mockUsuario]);
    const result = await service.obtenerTodos();
    expect(result).toEqual([mockUsuario]);
    expect(mockRepository.find).toHaveBeenCalled();
  });
});
