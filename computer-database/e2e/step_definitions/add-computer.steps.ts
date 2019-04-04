import {After, Before, Given} from "cucumber";
import {ComputersMainPage} from "../src/pages/computers/computers-main.page";
import {AddComputerPage} from "../src/pages/computers/add-computer.page";
import {EditComputerPage} from "../src/pages/computers/edit-computer.page";

let computersMainPage: ComputersMainPage;
let addComputerPage: AddComputerPage;
let editComputerPage: EditComputerPage;


Before(() => {
    computersMainPage = new ComputersMainPage();
    addComputerPage = new AddComputerPage();
    editComputerPage = new EditComputerPage();
});

Given(/^user opens Computers application?$/,async () => {
        await computersMainPage.navigateTo();
    }
);

Given(/^assert Computers main page is opened?$/,async () => {
        await computersMainPage.waitForPage();
        await computersMainPage.assertPageElements();
    }
);

Given(/^user clicks 'Add a new computer' button?$/,async () => {
        await computersMainPage.clickAddComputerButton();
    }
);

Given(/^assert 'Add a computer' page is displayed?$/,async () => {
        await addComputerPage.waitForPage();
        await addComputerPage.assertPageElements();
    }
);

Given(/^user adds new computer?$/,async () => {
        await addComputerPage.addComputer();
    }
);

Given(/^user searches for last added computer?$/,async () => {
        await computersMainPage.searchForComputer();
    }
);

Given(/^assert last added computer displayed correctly in table?$/,async () => {
        await computersMainPage.assertLastAddedComputer();
    }
);

Given(/^user clicks on last computer name?$/,async () => {
        await computersMainPage.editLastComputer();
    }
);

Given(/^assert Edit computer page is opened?$/,async () => {
        await editComputerPage.assertPageElements();
    }
);

Given(/^user changes (COMPUTER_NAME|INTRODUCED_DATE|DISCONTINUED_DATE|COMPANY) to value (.*)?$/,async (field: string, value : string) => {
        await editComputerPage.changeFieldValue(field, value);
    }
);

Given(/^user saves changes?$/,async () => {
        await editComputerPage.clickSaveButton();
    }
);

Given(/^user deletes computer?$/,async () => {
        await editComputerPage.clickDeleteButton();
    }
);





After(() => {
    computersMainPage = null;
    addComputerPage = null;
    editComputerPage = null;
});
