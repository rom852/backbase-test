import {After, Before, Given} from "cucumber";
import {ComputersMainPage} from "../src/pages/computers/computers-main.page";

let computersMainPage: ComputersMainPage;


Before(() => {
    computersMainPage = new ComputersMainPage();
});

Given(/^user opens Computers application?$/,async () => {
        await computersMainPage.navigateTo();
    }
);

Given(/^assert Computers main page is opened?$/,async () => {
        await computersMainPage.assertPageElements();
    }
);

After(() => {
    computersMainPage = null;
});
