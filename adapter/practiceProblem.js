class PaymentProcessor {
  processPayment(amount) {
    console.log(`Pagamento de R$${amount} processado.`);
  }
}

class ExternalPaymentService {
  makeTransaction(value) {
    console.log(
      `Transação realizada no valor de R$${value} com serviço externo.`
    );
  }
}

class ExternalPaymentAdapter extends PaymentProcessor {
  constructor(externalService) {
    super();
    this.externalService = externalService;
  }

  processPayment(amount) {
    this.externalService.makeTransaction(amount);
  }
}

function payOrder(processor, amount) {
  processor.processPayment(amount);
}

const processor = new PaymentProcessor();
payOrder(processor, 100);

const externalService = new ExternalPaymentService();
const adaptedService = new ExternalPaymentAdapter(externalService);
payOrder(adaptedService, 200);
