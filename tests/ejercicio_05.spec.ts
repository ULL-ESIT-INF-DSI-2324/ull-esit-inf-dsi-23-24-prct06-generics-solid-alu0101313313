import 'mocha';
import { expect } from 'chai';
import { EmailService } from '../src/ejercicio_05/emailService';
import { ShortMessageService } from '../src/ejercicio_05/smsService';
import { Notifier } from '../src/ejercicio_05/notifier';

describe('Notifier', () => {
  describe('sendNotification', () => {
    it('debe enviar una notificación por email', () => {
      const emailService = new EmailService();
      const notifier = new Notifier(emailService);
      const message = 'Hello World!';
      expect(() => notifier.sendNotification(message)).to.not.throw();
    });

    it('debe enviar una notificacion por SMS', () => {
      const smsService = new ShortMessageService();
      const notifier = new Notifier(smsService);
      const message = 'Hello World!';
      expect(() => notifier.sendNotification(message)).to.not.throw();
    });
  });
});