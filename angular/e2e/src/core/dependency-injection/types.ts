const TYPES = {
    Config: Symbol.for('Config'),
    RestApi: Symbol.for('RestApi'),
    Repository: {
        GatewayDB: Symbol.for('GatewayDB'),
        bankDB: Symbol.for('bankDB'),
        authDB: Symbol.for('authDB'),
        Auth: Symbol.for('AuthRepository'),
        Gateway: Symbol.for('GatewayRepository'),
        LegalDocument: Symbol.for('LegalDocumentRepository'),
        User: Symbol.for('UserApiRepository'),
        UserDB: Symbol.for('UserDbRepository'),
        EmailLoader: Symbol.for('EmailRepository'),
        CreditCard: Symbol.for('CreditCardRepository'),
        ClientApi: Symbol.for('ClientApiRepository')
    },
    Service: {
        MerchantRegistration: Symbol.for('MerchantRegistrationService'),
        Payment: Symbol.for('PaymentsService'),
        Setup: Symbol.for('SetupService'),
        User: Symbol.for('UserService'),
        Asset: Symbol.for('AssetService'),
        MandateLane: Symbol.for('MandateLaneService'),
        Compliance: Symbol.for('ComplianceApiService')
    },
    Context: {
        Shared: Symbol.for('SharedContext')
    }
};

export {TYPES};
