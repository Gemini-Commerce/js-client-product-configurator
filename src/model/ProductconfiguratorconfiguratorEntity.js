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
import ProductconfiguratorconfiguratorStatus from './ProductconfiguratorconfiguratorStatus';
import ProductconfiguratorstepEntity from './ProductconfiguratorstepEntity';

/**
 * The ProductconfiguratorconfiguratorEntity model module.
 * @module model/ProductconfiguratorconfiguratorEntity
 * @version v1
 */
class ProductconfiguratorconfiguratorEntity {
    /**
     * Constructs a new <code>ProductconfiguratorconfiguratorEntity</code>.
     * @alias module:model/ProductconfiguratorconfiguratorEntity
     */
    constructor() { 
        
        ProductconfiguratorconfiguratorEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorconfiguratorEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratorconfiguratorEntity} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratorconfiguratorEntity} The populated <code>ProductconfiguratorconfiguratorEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorconfiguratorEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('grn')) {
                obj['grn'] = ApiClient.convertToType(data['grn'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ProductconfiguratorconfiguratorStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [ProductconfiguratorstepEntity]);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorconfiguratorEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorconfiguratorEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['grn'] && !(typeof data['grn'] === 'string' || data['grn'] instanceof String)) {
            throw new Error("Expected the field `grn` to be a primitive type in the JSON string but got " + data['grn']);
        }
        // ensure the json data is a string
        if (data['productId'] && !(typeof data['productId'] === 'string' || data['productId'] instanceof String)) {
            throw new Error("Expected the field `productId` to be a primitive type in the JSON string but got " + data['productId']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        if (data['steps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['steps'])) {
                throw new Error("Expected the field `steps` to be an array in the JSON data but got " + data['steps']);
            }
            // validate the optional field `steps` (array)
            for (const item of data['steps']) {
                ProductconfiguratorstepEntity.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductconfiguratorconfiguratorEntity.prototype['id'] = undefined;

/**
 * @member {String} grn
 */
ProductconfiguratorconfiguratorEntity.prototype['grn'] = undefined;

/**
 * @member {String} productId
 */
ProductconfiguratorconfiguratorEntity.prototype['productId'] = undefined;

/**
 * @member {String} label
 */
ProductconfiguratorconfiguratorEntity.prototype['label'] = undefined;

/**
 * @member {module:model/ProductconfiguratorconfiguratorStatus} status
 */
ProductconfiguratorconfiguratorEntity.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/ProductconfiguratorstepEntity>} steps
 */
ProductconfiguratorconfiguratorEntity.prototype['steps'] = undefined;

/**
 * @member {Date} createdAt
 */
ProductconfiguratorconfiguratorEntity.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
ProductconfiguratorconfiguratorEntity.prototype['updatedAt'] = undefined;






export default ProductconfiguratorconfiguratorEntity;

