// Exemplo simples do princípio S - Single Responsibility Principle

// Classe que faz leitura e escrita de usuário em um "banco" (simulado)
class UserRepository {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
  }

  getAll() {
    return this.users;
  }
}

// Classe que valida usuário
class UserValidator {
  static validate(user) {
    if (!user || !user.name) throw new Error('Usuário inválido');
  }
}

// Classe que coordena a criação de usuário (responsabilidade única: orquestrar)
class UserService {
  constructor(repo) {
    this.repo = repo;
  }

  createUser(user) {
    UserValidator.validate(user);
    this.repo.add(user);
  }

  listUsers() {
    return this.repo.getAll();
  }
}

// Demo
const repo = new UserRepository();
const service = new UserService(repo);

service.createUser({ name: 'Ana' });
service.createUser({ name: 'Miguel' });

console.log('Users:', service.listUsers());
