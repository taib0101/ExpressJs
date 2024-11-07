/*
    Main Links -> https://mongoosejs.com/docs/schematypes.html
                  https://mongoosejs.com/docs/guide.html

    Schema Types:
        String.        link -> https://mongoosejs.com/docs/schematypes.html#strings
        Number.        link -> https://mongoosejs.com/docs/schematypes.html#numbers
        Date.          link -> https://mongoosejs.com/docs/schematypes.html#dates
        Buffer.        link -> https://mongoosejs.com/docs/schematypes.html#buffers
        Boolean.       link -> https://mongoosejs.com/docs/schematypes.html#booleans
        Mixed.         link -> https://mongoosejs.com/docs/schematypes.html#mixed
        ObjectId.      link -> https://mongoosejs.com/docs/schematypes.html#objectids
        Array.         link -> https://mongoosejs.com/docs/schematypes.html#arrays
        Decimal128.    link -> https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Decimal128
        Map.           link -> https://mongoosejs.com/docs/schematypes.html#maps
        Schema.        link -> https://mongoosejs.com/docs/schematypes.html#schemas
        UUID.          link -> https://mongoosejs.com/docs/schematypes.html#uuid
        BigInt.        link -> https://mongoosejs.com/docs/schematypes.html#bigint

    Schema Types options:

        1.validation part
        required: boolean, function or array validation.
                  "required: true", 'required: () => { return true }',
                  'required: [true, "error require path"]'
                link -> https://mongoosejs.com/docs/validation.html#built-in-validators
    
        validate: function. this custom validation function
                  "validate: { validator: (value) => { return false }, message: (props) => { return "error" } }"

        2. Non validation part
        default: Any like "Date.now, 10, 'value' " or function like 'default: () => { return "taib" }'

        select: if "select: false", value of path will not include as field in document 
    
        get: function. get: (value) => console.log(value)

        set: function. set: (value) => console.log(value)

        alias: string.

        transform: function


    ---------------------------------------------------------------------------------

    Index Option:
        index: boolean.
        unique: boolean.
        sparse: boolean.

    ----------------------------------------------------------------------------------

    For String Type Options:
        lowercase: boolean.
        uppercase: boolean.
        trim: boolean.
        match: RegExp. link -> https://mongoosejs.com/docs/validation.html
        enum: Array, or object. link -> https://mongoosejs.com/docs/validation.html
        minLength: Number. link -> https://mongoosejs.com/docs/validation.html
        maxLength: Number. link -> https://mongoosejs.com/docs/validation.html
        populate: Object. link -> https://mongoosejs.com/docs/populate.html#query-conditions

    ----------------------------------------------------------------------------------

    For Number Type Options:
        min: Number. link -> https://mongoosejs.com/docs/validation.html
        max: Number. link -> https://mongoosejs.com/docs/validation.html
        enum: Array. link -> https://mongoosejs.com/docs/validation.html
        populate: Object. link -> https://mongoosejs.com/docs/populate.html#query-conditions

    -----------------------------------------------------------------------------------------

    For Date Type Options:
        min: Date. link -> https://mongoosejs.com/docs/validation.html
        max: Date. link -> https://mongoosejs.com/docs/validation.html
        expires: Number or String. creates TTL
    
    -------------------------------------------------------------------------------------------

    For ObjectId Type Options:
        populate: Object. link -> https://mongoosejs.com/docs/populate.html#query-conditions

*/

