import {AbstractPage} from "../abstract.page";
import {$} from "protractor";
import {waitForPresenceOf} from "../../utils/protractor";
import {Computer} from "../../models/Computer";
import {SharedContext} from "../../context/shared.context";
import {TYPES} from "../../core/dependency-injection/types";
import {lazyInject} from "../../core/dependency-injection/di.config";
import moment = require("moment");

export class AddComputerPage extends AbstractPage {
    @lazyInject(TYPES.Context.Shared)  sharedContext: SharedContext;

    expectedRoute: string = '/computers/new';

    nameField = $('#name');
    introducedField = $('#introduced');
    discontinuedField = $('#discontinued');
    companySelect = $('#company');
    createButton = $('.btn.primary');
    cancelButton = $('a.btn');

    async assertPageElements() {
        await waitForPresenceOf(this.nameField);
        await waitForPresenceOf(this.introducedField);
        await waitForPresenceOf(this.discontinuedField);
        await waitForPresenceOf(this.companySelect);
        await waitForPresenceOf(this.createButton);
        await waitForPresenceOf(this.cancelButton);
    }

    async addComputer() {
        const computer: Computer = Computer.fromDefaults();
        console.log('computer name: '+computer.name);
        this.sharedContext.computer = computer;
        this.sharedContext.createdComputers[computer.name] = computer;
        await this.nameField.sendKeys(computer.name);
        // if date is null, converting to empty string, else- formatting
        const creationDate = (computer.introducedDate == null) ? '': moment(computer.introducedDate ).format('YYYY-MM-DD');
        const discontinuedDate = (computer.discontinuedDate == null) ? '': moment(computer.discontinuedDate).format('YYYY-MM-DD');
        await this.introducedField.sendKeys(creationDate);
        await this.discontinuedField.sendKeys(discontinuedDate);
        await this.companySelect.$('[value=\"'+computer.company+'\"]').click();
        await this.createButton.click()
    }
}
