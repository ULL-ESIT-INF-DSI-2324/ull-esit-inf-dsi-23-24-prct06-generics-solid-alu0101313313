import { INotificationService } from "./inotificationService";

/**
 * @class EmailService es una clase
 * que define una funcion notifica 
 * un mensaje por email 
 */
export class EmailService implements INotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
