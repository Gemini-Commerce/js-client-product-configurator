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
import ProductconfiguratoroptionBulkUpdateRequestUpdateEntity from './ProductconfiguratoroptionBulkUpdateRequestUpdateEntity';

/**
 * The ProductconfiguratoroptionBulkUpdateRequest model module.
 * @module model/ProductconfiguratoroptionBulkUpdateRequest
 * @version v1
 */
class ProductconfiguratoroptionBulkUpdateRequest {
    /**
     * Constructs a new <code>ProductconfiguratoroptionBulkUpdateRequest</code>.
     * @alias module:model/ProductconfiguratoroptionBulkUpdateRequest
     */
    constructor() { 
        
        ProductconfiguratoroptionBulkUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratoroptionBulkUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratoroptionBulkUpdateRequest} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratoroptionBulkUpdateRequest} The populated <code>ProductconfiguratoroptionBulkUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratoroptionBulkUpdateRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductconfiguratoroptionBulkUpdateRequestUpdateEntity]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratoroptionBulkUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratoroptionBulkUpdateRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                ProductconfiguratoroptionBulkUpdateRequestUpdateEntity.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} tenantId
 */
ProductconfiguratoroptionBulkUpdateRequest.prototype['tenantId'] = undefined;

/**
 * @member {Array.<module:model/ProductconfiguratoroptionBulkUpdateRequestUpdateEntity>} options
 */
ProductconfiguratoroptionBulkUpdateRequest.prototype['options'] = undefined;






export default ProductconfiguratoroptionBulkUpdateRequest;

