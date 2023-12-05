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
 * The DependencyListDependenciesRequest model module.
 * @module model/DependencyListDependenciesRequest
 * @version v1
 */
class DependencyListDependenciesRequest {
    /**
     * Constructs a new <code>DependencyListDependenciesRequest</code>.
     * @alias module:model/DependencyListDependenciesRequest
     */
    constructor() { 
        
        DependencyListDependenciesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DependencyListDependenciesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependencyListDependenciesRequest} obj Optional instance to populate.
     * @return {module:model/DependencyListDependenciesRequest} The populated <code>DependencyListDependenciesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependencyListDependenciesRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('stepIds')) {
                obj['stepIds'] = ApiClient.convertToType(data['stepIds'], ['String']);
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
     * Validates the JSON data with respect to <code>DependencyListDependenciesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DependencyListDependenciesRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['stepIds'])) {
            throw new Error("Expected the field `stepIds` to be an array in the JSON data but got " + data['stepIds']);
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
DependencyListDependenciesRequest.prototype['tenantId'] = undefined;

/**
 * @member {Array.<String>} stepIds
 */
DependencyListDependenciesRequest.prototype['stepIds'] = undefined;

/**
 * @member {Number} pageSize
 */
DependencyListDependenciesRequest.prototype['pageSize'] = undefined;

/**
 * @member {String} pageToken
 */
DependencyListDependenciesRequest.prototype['pageToken'] = undefined;






export default DependencyListDependenciesRequest;

