import {randomNumber, randomString} from "../utils/protractor";
import * as moment from 'moment';


export interface BasicComputer {
    name: string;
    introducedDate: any;
    discontinuedDate: any;
    company: string;
}

export class Computer {

    public static defaults: BasicComputer = {
        name: 'name',
        introducedDate: null,
        discontinuedDate: null,
        company: '1',
    };

    public static fromDefaults() {

        const creationDate = new Date();
     ///   const creationDate = moment(sysdate).format('YYYY-MM-DD');

        const {name, introducedDate, discontinuedDate, company} = Object.assign(
            {},
            Computer.defaults,
            {
                name: 'Computer_'+ randomNumber(8),
                introducedDate: creationDate,
                discontinuedDate: null,
                company: '1'
            }
        );
        return new this(name, introducedDate, discontinuedDate, company);
    }

    constructor(
        public name: string,
        public introducedDate: any,
        public discontinuedDate: any,
        public company: string
    ) {}

}
