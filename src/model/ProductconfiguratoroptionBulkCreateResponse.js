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
import ProductconfiguratoroptionEntity from './ProductconfiguratoroptionEntity';

/**
 * The ProductconfiguratoroptionBulkCreateResponse model module.
 * @module model/ProductconfiguratoroptionBulkCreateResponse
 * @version v1
 */
class ProductconfiguratoroptionBulkCreateResponse {
    /**
     * Constructs a new <code>ProductconfiguratoroptionBulkCreateResponse</code>.
     * @alias module:model/ProductconfiguratoroptionBulkCreateResponse
     */
    constructor() { 
        
        ProductconfiguratoroptionBulkCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratoroptionBulkCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratoroptionBulkCreateResponse} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratoroptionBulkCreateResponse} The populated <code>ProductconfiguratoroptionBulkCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratoroptionBulkCreateResponse();

            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductconfiguratoroptionEntity]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratoroptionBulkCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratoroptionBulkCreateResponse</code>.
     */
    static validateJSON(data) {
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                ProductconfiguratoroptionEntity.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ProductconfiguratoroptionEntity>} options
 */
ProductconfiguratoroptionBulkCreateResponse.prototype['options'] = undefined;






export default ProductconfiguratoroptionBulkCreateResponse;
