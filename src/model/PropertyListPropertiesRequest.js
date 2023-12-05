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
 * The PropertyListPropertiesRequest model module.
 * @module model/PropertyListPropertiesRequest
 * @version v1
 */
class PropertyListPropertiesRequest {
    /**
     * Constructs a new <code>PropertyListPropertiesRequest</code>.
     * @alias module:model/PropertyListPropertiesRequest
     */
    constructor() { 
        
        PropertyListPropertiesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyListPropertiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyListPropertiesRequest} obj Optional instance to populate.
     * @return {module:model/PropertyListPropertiesRequest} The populated <code>PropertyListPropertiesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyListPropertiesRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('matrixId')) {
                obj['matrixId'] = ApiClient.convertToType(data['matrixId'], 'String');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'String');
            }
            if (data.hasOwnProperty('pageToken')) {
                obj['pageToken'] = ApiClient.convertToType(data['pageToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertyListPropertiesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertyListPropertiesRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is a string
        if (data['matrixId'] && !(typeof data['matrixId'] === 'string' || data['matrixId'] instanceof String)) {
            throw new Error("Expected the field `matrixId` to be a primitive type in the JSON string but got " + data['matrixId']);
        }
        // ensure the json data is a string
        if (data['pageSize'] && !(typeof data['pageSize'] === 'string' || data['pageSize'] instanceof String)) {
            throw new Error("Expected the field `pageSize` to be a primitive type in the JSON string but got " + data['pageSize']);
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
PropertyListPropertiesRequest.prototype['tenantId'] = undefined;

/**
 * @member {String} matrixId
 */
PropertyListPropertiesRequest.prototype['matrixId'] = undefined;

/**
 * @member {String} pageSize
 */
PropertyListPropertiesRequest.prototype['pageSize'] = undefined;

/**
 * @member {String} pageToken
 */
PropertyListPropertiesRequest.prototype['pageToken'] = undefined;






export default PropertyListPropertiesRequest;

