import {AbstractPage} from "../abstract.page";
import {$} from "protractor";
import {waitForPresenceOf} from "../../utils/protractor";

export class ComputersMainPage extends AbstractPage {
    expectedRoute: string = '/computers';

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
}
