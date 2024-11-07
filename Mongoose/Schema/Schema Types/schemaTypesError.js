/*
    Schema type Error
    "type": Number,
    "path": "price",
    "value": 100000

    Schema({
        price: {
            type: Number
        }
    })

    and value is requested.body properties, which is include as a field

*/

/*
    Errors:

    {
    "errors": {
        "price": {
            "name": "ValidatorError",
            "message": "error---------------price",
            "properties": {
                "message": "error---------------price",
                "type": "String",
                "path": "price",
                "value": "100000000"
            },
            "kind": "String",
            "path": "price",
            "value": "100000000"
        }
    },
    "_message": "collectionVehicle validation failed",
    "name": "ValidationError",
    "message": "collectionVehicle validation failed: price: error---------------price"
}


*/