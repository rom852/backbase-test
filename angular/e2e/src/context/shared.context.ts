import {injectable} from 'inversify';
import {Computer} from "../models/Computer";


@injectable()
export class SharedContext {
    public computersDisplayedCount: number = null;
    public computer: Computer = null;
    public createdComputers: {[ref: string]: Computer} = {};
}
