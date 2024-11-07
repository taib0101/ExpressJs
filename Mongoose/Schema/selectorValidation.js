import { schemaValidationByArray } from "./Built In Schema Validation/validByArray.js";
import { schemaValidationByObject } from "./Built In Schema Validation/validByObject.js";
import { schemaValidationByFunction } from "./Built In Schema Validation/validByFunction.js";
import { withoutValidation } from "./withoutValidation.js";
import { customValidation } from "./Custom Schema Validation/customValidationByValidator.js";
import { connect } from "../connect.js";

const selector = {};

selector.validation = customValidation;

export default selector;