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

/**
 * The OptionListOptionsRequest model module.
 * @module model/OptionListOptionsRequest
 * @version v1
 */
class OptionListOptionsRequest {
    /**
     * Constructs a new <code>OptionListOptionsRequest</code>.
     * @alias module:model/OptionListOptionsRequest
     */
    constructor() { 
        
        OptionListOptionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptionListOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptionListOptionsRequest} obj Optional instance to populate.
     * @return {module:model/OptionListOptionsRequest} The populated <code>OptionListOptionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionListOptionsRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('stepId')) {
                obj['stepId'] = ApiClient.convertToType(data['stepId'], 'String');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageToken')) {
                obj['pageToken'] = ApiClient.convertToType(data['pageToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OptionListOptionsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OptionListOptionsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is a string
        if (data['stepId'] && !(typeof data['stepId'] === 'string' || data['stepId'] instanceof String)) {
            throw new Error("Expected the field `stepId` to be a primitive type in the JSON string but got " + data['stepId']);
        }
        // ensure the json data is a string
        if (data['pageToken'] && !(typeof data['pageToken'] === 'string' || data['pageToken'] instanceof String)) {
            throw new Error("Expected the field `pageToken` to be a primitive type in the JSON string but got " + data['pageToken']);
        }

        return true;
    }


}



/**
 * @member {String} tenantId
 */
OptionListOptionsRequest.prototype['tenantId'] = undefined;

/**
 * @member {String} stepId
 */
OptionListOptionsRequest.prototype['stepId'] = undefined;

/**
 * @member {Number} pageSize
 */
OptionListOptionsRequest.prototype['pageSize'] = undefined;

/**
 * @member {String} pageToken
 */
OptionListOptionsRequest.prototype['pageToken'] = undefined;






export default OptionListOptionsRequest;
