/**
 * Product Configurator Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DependencyCondition from './DependencyCondition';

/**
 * The ProductconfiguratordependencyUpdatePayload model module.
 * @module model/ProductconfiguratordependencyUpdatePayload
 * @version v1
 */
class ProductconfiguratordependencyUpdatePayload {
    /**
     * Constructs a new <code>ProductconfiguratordependencyUpdatePayload</code>.
     * @alias module:model/ProductconfiguratordependencyUpdatePayload
     */
    constructor() { 
        
        ProductconfiguratordependencyUpdatePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratordependencyUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratordependencyUpdatePayload} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratordependencyUpdatePayload} The populated <code>ProductconfiguratordependencyUpdatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratordependencyUpdatePayload();

            if (data.hasOwnProperty('optionIds')) {
                obj['optionIds'] = ApiClient.convertToType(data['optionIds'], ['String']);
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = DependencyCondition.constructFromObject(data['condition']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratordependencyUpdatePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratordependencyUpdatePayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['optionIds'])) {
            throw new Error("Expected the field `optionIds` to be an array in the JSON data but got " + data['optionIds']);
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          DependencyCondition.validateJSON(data['condition']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} optionIds
 */
ProductconfiguratordependencyUpdatePayload.prototype['optionIds'] = undefined;

/**
 * @member {module:model/DependencyCondition} condition
 */
ProductconfiguratordependencyUpdatePayload.prototype['condition'] = undefined;






export default ProductconfiguratordependencyUpdatePayload;
