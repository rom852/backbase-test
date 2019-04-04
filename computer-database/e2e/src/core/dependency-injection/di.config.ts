import {Container, interfaces} from 'inversify';
import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';

import {TYPES} from './types';
const DIContainer = new Container();
const {lazyInject} = getDecorators(DIContainer);

/**
 * @summary Right order to define 'lazyInject', before modules instantiations
 */
import {Config, AppConfig} from '../config';
import {RestApi} from '../../repositories/rest.api';
import {SetupService} from '../../services/setup.service';
import {SharedContext} from '../../context/shared.context';

const config = new AppConfig(process.env);
DIContainer.bind<Config>(TYPES.Config).toConstantValue(config);

// repositories
DIContainer.bind<RestApi>(TYPES.Repository.RestApi).to(RestApi);

// services
DIContainer.bind<SetupService>(TYPES.Service.Setup).to(SetupService);

// contexts
DIContainer.bind<SharedContext>(TYPES.Context.Shared)
    .to(SharedContext)
    .inSingletonScope();

export {DIContainer, lazyInject};
