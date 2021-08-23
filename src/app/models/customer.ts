export class Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    zip: string;
    paymentType: string;
    ccName: string;
    ccNumber: string;
    expirationDate: string;
    cvv: string;

    constructor() {
        this.id="";
        this.firstName="";
        this.lastName="";
        this.email="";
        this.address="";
        this.address2="";
        this.country="";
        this.state="";
        this.zip="";
        this.paymentType="";
        this.ccName="";
        this.ccNumber="";
        this.expirationDate="";
        this.cvv="";
    }

}