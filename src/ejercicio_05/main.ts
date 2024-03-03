import { EmailService } from "./emailService";
import { ShortMessageService } from "./smsService";
import { Notifier } from "./notifier";

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
