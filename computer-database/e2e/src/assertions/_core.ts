import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiAsPromised);

// assert api
export const assert = chai.assert;

// bdd style api
export const expect = chai.expect;
export const should = chai.should(); // not recommended "aware of browser compatibility"
