const TYPES = {
    Config: Symbol.for('Config'),
    Repository: {
        RestApi: Symbol.for('RestApi'),
    },
    Service: {
        Setup: Symbol.for('SetupService'),
    },
    Context: {
        Shared: Symbol.for('SharedContext')
    }
};

export {TYPES};
