import { INotificationService } from "./inotificationService";

/**
 * @class Notifier es una clase que define un
 * metodo para no enviar la notificación
 */
export class Notifier {
  constructor(private notificationService: INotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}