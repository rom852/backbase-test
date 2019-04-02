import {AbstractPage} from "../abstract.page";
import {$, $$, by, element} from "protractor";
import {waitForPresenceOf} from "../../utils/protractor";
import {Computer} from "../../models/Computer";
import {expect} from "../../assertions/_core";
import {lazyInject} from "../../core/dependency-injection/di.config";
import {TYPES} from "../../core/dependency-injection/types";
import {SharedContext} from "../../context/shared.context";

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
          const table =await $('.computers.zebra-striped');
          const computersCount = (await $$('tr')).length;
        for (let i=1;i<computersCount; i++){
            const computer =  Computer.defaults;
            const row = await table.all(by.xpath('//tbody/tr['+i+']/td')).getText();
            computer.name = row[0];
            computer.introducedDate = row[1];
            computer.discontinuedDate = row[2];
            computer.company = row[3];
             parsedTable[computer.name] = computer;
        }

        console.log('com   '+ parsedTable['ASCI Blue Pacific'].name);
        return  parsedTable;
    }

    async searchForComputer(name: string = this.sharedContext.computer.name) {
       await this.searchField.sendKeys(name);
        await this.filterButton.click();
    }
}
