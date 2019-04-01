import {injectable} from 'inversify';
import {FormUser} from '../models/entities/User';
import {SepaBankAccount} from '../models/entities/SepaBankAccount';
import {CreditCard} from '../models/entities/CreditCard';
import {RecurrentService} from '../models/rest/recurrent-service';
import {MerchantRequest} from '../models/rest/merchant-request';
import {MandateResponse} from '../models/rest/mandate-response';
import {Transaction} from '../models/entities/transaction';

@injectable()
export class SharedContext {
    // TODO('wip') implement all interfaces;
    // public cookies = mutableListOf<Map<string, string>>();
    // public downloadedFiles = mutableListOf<ByteArray>();
    // public formRequests = FormRequestHolder();
    // public mimeMessages = MimeMessageHolder();
    // public providerToken: TokenResponse = null;
    // public usersTokens: MutableMap<string, Pair<Date, TokenResponse>> = HashMap();
    // public scenarioName: string = null;
    public user: FormUser = null;
    public createdUsers: {[ref: string]: FormUser} = {};
    public merchants: {[ref: string]: MerchantRequest} = {};
    // public addresses: MutableList<Address> = mutableListOf();
    // public emails: MutableList<Email> = mutableListOf();
    // public phones: MutableList<Phone> = mutableListOf();
    public banks: {[ref: string]: SepaBankAccount} = {};
    public mandates: {[ref: string]: MandateResponse} = {};
    public lastMandateUUID: string = null;
    // public accounts: MutableMap<string, Account> = HashMap();
    public creditcards: {[ref: string]: CreditCard} = {};
    public transactions: Transaction[] = [];
    // public registrationDetails: RegistrationDetails = null;
    // public bankRequests: MutableMap<string, Map<string, Any>> = HashMap();
    // public registrationUserName: string = null;
    // public portalLanguage: string = null;
    // public verificationUrl: string = null;
    // public activationCode: string = null;
    // public savedActivationCode: string = null;
    // public resendActivationCode: string = null;
    // public cashiers: MutableMap<Int, Cashier> = mutableMapOf();
    // public loginWithTransactionUrl: string = null;
    // public transactionIds: ArrayList<string> = ArrayList();
    // public lastTransactionId: string = null;
    // public savedUrl: string = null;
    // public sepaOnlineLocation: string = null;
    // public sepaOnlineId: string = null;
    // public sepaDatabaseId: string = null;
    public lastIban: string = null;
    // public sepaOnlineRequest: InitiateBankRegistrationRequest = null;
    // public sepaOnlineRegistrationDetails: SepaRegistrationDetails = null;
    // public payLinkUrl: string = null;
    // public reservationRequest: ReservationRequest = null;
    // public previousEnteredEmail: string = null;
    // public get getLanguage() {
    //     return this.portalLanguage || 'EN'
    // }
    public recurrentServices: {[ref: string]: RecurrentService} = {};
}
