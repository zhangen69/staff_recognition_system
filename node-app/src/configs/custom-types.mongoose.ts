const customMongooseTypes = {
    // sample 
    integerOnly: {
        type: Number,
        get: (value) => Math.round(value),
        set: (value) => Math.round(value),
    },

    // various function for internal used
    f: {
        equalLength: (value, length) => {
           return String(value).length == length ? value : false;
        },
    },

    // various integer format types
    integer: {
        only: {
            type: Number,
            get: (value) => Math.round(value),
            set: (value) => Math.round(value),
        },
        digit: (limit) => {
            return {
                type: Number,
                get: (value) => Math.round(this.f.equalLength(value, limit)),
                set: (value) => Math.round(this.f.equalLength(value, limit)),
            }
        }
    }
};

export default customMongooseTypes;
