import {AbstractPage} from "../abstract.page";
import {$, $$, by} from "protractor";
import {waitForPresenceOf} from "../../utils/protractor";
import {Computer} from "../../models/Computer";
import {Companies} from "../../models/Companies";
import {lazyInject} from "../../core/dependency-injection/di.config";
import {TYPES} from "../../core/dependency-injection/types";
import {SharedContext} from "../../context/shared.context";
import {assert} from "../../assertions/_core";
import moment = require("moment");

export class ComputersMainPage extends AbstractPage {
    expectedRoute: string = '/computers';

    @lazyInject(TYPES.Context.Shared)  sharedContext: SharedContext;

    searchField = $('#searchbox');
    filterButton = $('#searchsubmit');
    addNewButton = $('#add');
    table = $('.computers.zebra-striped');

    async assertPageElements() {
        await waitForPresenceOf(this.searchField);
        await waitForPresenceOf(this.filterButton);
        await waitForPresenceOf(this.addNewButton);
        await waitForPresenceOf(this.table);
    }

    async clickAddComputerButton() {
        await this.addNewButton.click();
    }

    async parseTable() {
          const parsedTable: {[name: string]: Computer} = {};
          const computersArray = await $$('tr');
        for (let i=1;i<computersArray.length; i++){
            const computer =  Computer.defaults;
            const row = await computersArray[i].all(by.css('td')).getText();
            computer.name = row[0];
            computer.introducedDate = row[1];
            computer.discontinuedDate = row[2];
            computer.company = row[3];
             parsedTable[computer.name] = computer;
        }
        return  parsedTable;
    }

    async searchForComputer(name: string = this.sharedContext.computer.name) {
       await this.searchField.sendKeys(name);
        await this.filterButton.click();
    }

    async assertLastAddedComputer() {
        const lastComputer  =await this.sharedContext.computer.name;
        const table = await this.parseTable();
        const displayedComputer =table[lastComputer];
        assert.equal(displayedComputer.name, await this.sharedContext.computer.name, 'Computer name is wrong');
        // getting Dates from context
        const expectedIntroducedDate = await this.sharedContext.computer.introducedDate;
        const expectedDiscontinuedDate = await this.sharedContext.computer.discontinuedDate;
        // converting Dates to strings
        const formattedExpectedIntroducedDate = (expectedIntroducedDate == null) ? '-': moment(expectedIntroducedDate).format('DD MMM YYYY');
        const formattedExpectedDiscontinuedDate = (expectedDiscontinuedDate == null) ? '-': moment(expectedDiscontinuedDate).format('DD MMM YYYY');
        // get company value from enum
        const expectedCompany = Companies[await this.sharedContext.computer.company];
        assert.equal(displayedComputer.introducedDate, formattedExpectedIntroducedDate, 'Introduced date is wrong');
        assert.equal(displayedComputer.discontinuedDate, formattedExpectedDiscontinuedDate, 'Discontinued date is wrong');
        assert.equal(displayedComputer.company, expectedCompany, 'Company is wrong');
    }

}
