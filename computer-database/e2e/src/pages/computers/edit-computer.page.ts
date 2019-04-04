import {AbstractPage} from "../abstract.page";
import {$} from "protractor";
import {randomNumber, waitForPresenceOf} from "../../utils/protractor";
import {SharedContext} from "../../context/shared.context";
import {TYPES} from "../../core/dependency-injection/types";
import {lazyInject} from "../../core/dependency-injection/di.config";
import {Companies} from "../../models/Companies";

export class EditComputerPage extends AbstractPage {
    @lazyInject(TYPES.Context.Shared)  sharedContext: SharedContext;

    expectedRoute: string = '/computers/';

    private nameField = $('#name');
    private introducedField = $('#introduced');
    private discontinuedField = $('#discontinued');
    private companySelect = $('#company');
    private saveButton = $('.btn.primary');
    private cancelButton = $('a.btn');
    private deleteButton = $('input.btn.danger');

    async assertPageElements() {
        await waitForPresenceOf(this.nameField);
        await waitForPresenceOf(this.introducedField);
        await waitForPresenceOf(this.discontinuedField);
        await waitForPresenceOf(this.companySelect);
        await waitForPresenceOf(this.saveButton);
        await waitForPresenceOf(this.cancelButton);
        await waitForPresenceOf(this.deleteButton);
    }

    async clickSaveButton() {
        await this.saveButton.click()
    }

    async changeFieldValue(field: string, value: string) {
        switch (field) {
            case 'COMPUTER_NAME':
                await this.changeName(value);
                break;
            case 'INTRODUCED_DATE':
                await this.changeIntroducedDate(value);
                break;
            case 'DISCONTINUED_DATE':
                await this.changeIntroducedDate(value);
                break;
            case 'COMPANY':
                await this.changeCompany(value);
                break;
        }
    }

    async clickDeleteButton() {
       await this.deleteButton.click();
    }

    private async changeName(value : string) {
        if(value==='RANDOM_COMPUTER_NAME'){
            value = 'Computer_'+ randomNumber(8);
        }
        await this.nameField.clear();
        await this.nameField.sendKeys(value);
        // update name in context
        this.sharedContext.computer.name = value;
    }

    private async changeIntroducedDate(value : string) {
        await this.introducedField.clear();
        await this.introducedField.sendKeys(value);
        this.sharedContext.computer.introducedDate = value;
    }

    private async changeDiscontinuedDate(value : string) {
        await this.discontinuedField.clear();
        await this.discontinuedField.sendKeys(value);
        this.sharedContext.computer.discontinuedDate = value;
    }

    private async changeCompany(value : string) {
        const expectedCompany = Companies[value];
        await this.companySelect.$('[value=\"'+expectedCompany+'\"]').click();
        this.sharedContext.computer.company = expectedCompany;
    }
}
