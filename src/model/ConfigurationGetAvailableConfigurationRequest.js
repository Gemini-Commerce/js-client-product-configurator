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
import ConfigurationPropertyFilter from './ConfigurationPropertyFilter';
import ConfigurationSelection from './ConfigurationSelection';

/**
 * The ConfigurationGetAvailableConfigurationRequest model module.
 * @module model/ConfigurationGetAvailableConfigurationRequest
 * @version v1
 */
class ConfigurationGetAvailableConfigurationRequest {
    /**
     * Constructs a new <code>ConfigurationGetAvailableConfigurationRequest</code>.
     * @alias module:model/ConfigurationGetAvailableConfigurationRequest
     */
    constructor() { 
        
        ConfigurationGetAvailableConfigurationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigurationGetAvailableConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationGetAvailableConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/ConfigurationGetAvailableConfigurationRequest} The populated <code>ConfigurationGetAvailableConfigurationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigurationGetAvailableConfigurationRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('selections')) {
                obj['selections'] = ApiClient.convertToType(data['selections'], [ConfigurationSelection]);
            }
            if (data.hasOwnProperty('propertyFilters')) {
                obj['propertyFilters'] = ApiClient.convertToType(data['propertyFilters'], [ConfigurationPropertyFilter]);
            }
            if (data.hasOwnProperty('configuratorId')) {
                obj['configuratorId'] = ApiClient.convertToType(data['configuratorId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfigurationGetAvailableConfigurationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationGetAvailableConfigurationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is a string
        if (data['productId'] && !(typeof data['productId'] === 'string' || data['productId'] instanceof String)) {
            throw new Error("Expected the field `productId` to be a primitive type in the JSON string but got " + data['productId']);
        }
        if (data['selections']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['selections'])) {
                throw new Error("Expected the field `selections` to be an array in the JSON data but got " + data['selections']);
            }
            // validate the optional field `selections` (array)
            for (const item of data['selections']) {
                ConfigurationSelection.validateJSON(item);
            };
        }
        if (data['propertyFilters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['propertyFilters'])) {
                throw new Error("Expected the field `propertyFilters` to be an array in the JSON data but got " + data['propertyFilters']);
            }
            // validate the optional field `propertyFilters` (array)
            for (const item of data['propertyFilters']) {
                ConfigurationPropertyFilter.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['configuratorId'] && !(typeof data['configuratorId'] === 'string' || data['configuratorId'] instanceof String)) {
            throw new Error("Expected the field `configuratorId` to be a primitive type in the JSON string but got " + data['configuratorId']);
        }

        return true;
    }


}



/**
 * @member {String} tenantId
 */
ConfigurationGetAvailableConfigurationRequest.prototype['tenantId'] = undefined;

/**
 * @member {String} productId
 */
ConfigurationGetAvailableConfigurationRequest.prototype['productId'] = undefined;

/**
 * @member {Array.<module:model/ConfigurationSelection>} selections
 */
ConfigurationGetAvailableConfigurationRequest.prototype['selections'] = undefined;

/**
 * @member {Array.<module:model/ConfigurationPropertyFilter>} propertyFilters
 */
ConfigurationGetAvailableConfigurationRequest.prototype['propertyFilters'] = undefined;

/**
 * @member {String} configuratorId
 */
ConfigurationGetAvailableConfigurationRequest.prototype['configuratorId'] = undefined;






export default ConfigurationGetAvailableConfigurationRequest;
