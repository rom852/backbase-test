import {After, Before, Given} from "cucumber";
import {ComputersMainPage} from "../src/pages/computers/computers-main.page";
import {AddComputerPage} from "../src/pages/computers/add-computer.page";

let computersMainPage: ComputersMainPage;
let addComputerPage: AddComputerPage;


Before(() => {
    computersMainPage = new ComputersMainPage();
    addComputerPage = new AddComputerPage();
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

Given(/^assert computer exist in table?$/,async () => {
        // TODO
    }
);

Given(/^user searches for last added computer?$/,async () => {
        await computersMainPage.searchForComputer();
    }
);






After(() => {
    computersMainPage = null;
    addComputerPage = null;
});
