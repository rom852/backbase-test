import {injectable} from "inversify";
import {lazyInject} from "../core/dependency-injection/di.config";
import {TYPES} from "../core/dependency-injection/types";
import {RestApi} from "../repositories/rest.api";
import {Config} from "../core/config";
import {Computer} from "../models/Computer";
import {SharedContext} from "../context/shared.context";
import * as FormData from 'form-data';


@injectable()
export class ComputerApiService {
    @lazyInject(TYPES.Repository.RestApi) private restApi: RestApi;
    @lazyInject(TYPES.Config) private config: Config;
    @lazyInject(TYPES.Context.Shared)  sharedContext: SharedContext;


    private readonly computersApiHost: string;
    private readonly addComputerUrl = 'computers';

    constructor() {
        this.computersApiHost = this.config.mainHost;
    }

    async addComputers(count : number){
        for (let i = 0; i< count; i++) {
            const computer: Computer = Computer.fromDefaults();
            console.log('computer name: ' + computer.name);
            this.sharedContext.computer = computer;
            this.sharedContext.createdComputers[computer.name] = computer;

            const bodyFormData = new FormData();
            bodyFormData.append('name', 'qwefq');
            bodyFormData.append('introduced', '2019-01-31');
            bodyFormData.append('discontinued', '2019-01-31');
            bodyFormData.append('company', '1');
            await this.restApi.post(`${this.computersApiHost}/${this.addComputerUrl}`, bodyFormData,{
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
        }
    }
}
