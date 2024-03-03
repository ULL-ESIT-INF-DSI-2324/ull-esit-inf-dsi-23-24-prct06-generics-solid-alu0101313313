/**
 * @interface INotificationService es una interfaz
 * declara el metodo que las clase `EmailService` y 
 * `ShortMessageShort` inicializan
 */
export interface INotificationService {
  notify(message: string): void;
}
