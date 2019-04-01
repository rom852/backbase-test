import {randomNumber, randomString} from "../utils/protractor";
import * as moment from 'moment';


export interface BasicComputer {
    name: string;
    introducedDate: string;
    discontinuedDate: string;
    company: string;
}

export class Computer {

    public static defaults: BasicComputer = {
        name: 'name',
        introducedDate: '',
        discontinuedDate: '',
        company: '1',
    };

    public static fromDefaults() {

        const sysdate = new Date();
        const creationDate = moment(sysdate).format('YYYY-MM-DD');

        const {name, introducedDate, discontinuedDate, company} = Object.assign(
            {},
            Computer.defaults,
            {
                name: 'Computer_'+ randomNumber(8),
                introducedDate: creationDate,
                discontinuedDate: '',
                company: '1'
            }
        );
        return new this(name, introducedDate, discontinuedDate, company);
    }

    constructor(
        public name: string,
        public introducedDate: string,
        public discontinuedDate: string,
        public company: string
    ) {}

}
