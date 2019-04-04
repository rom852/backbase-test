export interface Environment {
    MAIN_HOST: string;
    DEVELOPMENT?: string; // custom
}



export interface Config {
    development: boolean;
    docker: boolean;
    mainHost: string;
}

export class AppConfig implements Config {

    get development(): boolean {
        return this._development;
    }

    get docker(): boolean {
        return this._docker;
    }

    get mainHost(): string {
        return this._mainHost;
    }

    private static defaultEnvironment = {
        mainHost: 'http://computer-database.herokuapp.com',
    };

    private readonly _mainHost: string;
    private readonly _development: boolean;
    private readonly _docker: boolean;

    constructor(environment: Environment) {
        this._development = environment.DEVELOPMENT === 'true';

        if (environment.MAIN_HOST) {
            console.log(`Found environment variables(MAIN_HOST: ${environment.MAIN_HOST})... using them`);
        } else {
            console.log('No environment variables... using defaults');
        }
        this._mainHost = environment.MAIN_HOST || AppConfig.defaultEnvironment.mainHost;
    }
}
