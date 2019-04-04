import {After, Before, Given} from "cucumber";
import {ComputerApiService} from "../src/services/computer-api.service";

let computerApiServise: ComputerApiService;

Before(() => {
    computerApiServise = new ComputerApiService();
});


Given(/^previously added (\d+) computers exists in table?$/,async (count: number) => {
        await computerApiServise.addComputers(count)
    }
);


After(() => {
    computerApiServise = null;
});
