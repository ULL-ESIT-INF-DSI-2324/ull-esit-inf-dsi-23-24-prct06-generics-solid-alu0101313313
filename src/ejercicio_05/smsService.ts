import { INotificationService }from "./inotificationService";

/**
 * @class ShortMessageService es una clase
 * que define una funcion notifica 
 * un mensaje por SMS 
 */
export class ShortMessageService implements INotificationService{
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

