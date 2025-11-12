// Exemplo do princípio D - Dependency Inversion Principle (DIP)

// Abstração: interface para envio de notificações
class Notifier {
  send(message) {
    throw new Error('Not implemented');
  }
}

// Implementação concreta 1: email
class EmailNotifier extends Notifier {
  constructor(email) {
    super();
    this.email = email;
  }
  send(message) {
    console.log(`Enviando email para ${this.email}: ${message}`);
  }
}

// Implementação concreta 2: SMS
class SmsNotifier extends Notifier {
  constructor(phone) {
    super();
    this.phone = phone;
  }
  send(message) {
    console.log(`Enviando SMS para ${this.phone}: ${message}`);
  }
}

// Classe de alto nível que depende da abstração Notifier
class OrderProcessor {
  constructor(notifier) {
    this.notifier = notifier; // depende da abstração
  }

  process(order) {
    // lógica de processamento...
    this.notifier.send(`Pedido ${order.id} processado`);
  }
}

// Demo usando injeção de dependência
const emailNotifier = new EmailNotifier('cliente@exemplo.com');
const processorA = new OrderProcessor(emailNotifier);
processorA.process({ id: 1 });

const smsNotifier = new SmsNotifier('+5511999999999');
const processorB = new OrderProcessor(smsNotifier);
processorB.process({ id: 2 });
