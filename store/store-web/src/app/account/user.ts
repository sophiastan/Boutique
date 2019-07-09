import { Contact } from './contact';

export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    contact: Contact;

    constructor() {
        this.contact = new Contact();
    }
}
