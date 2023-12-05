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
import ProductconfiguratorPropertyType from './ProductconfiguratorPropertyType';

/**
 * The ProductconfiguratorpropertyEntity model module.
 * @module model/ProductconfiguratorpropertyEntity
 * @version v1
 */
class ProductconfiguratorpropertyEntity {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyEntity</code>.
     * @alias module:model/ProductconfiguratorpropertyEntity
     */
    constructor() { 
        
        ProductconfiguratorpropertyEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratorpropertyEntity} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratorpropertyEntity} The populated <code>ProductconfiguratorpropertyEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('grn')) {
                obj['grn'] = ApiClient.convertToType(data['grn'], 'String');
            }
            if (data.hasOwnProperty('stepIdToOptionId')) {
                obj['stepIdToOptionId'] = ApiClient.convertToType(data['stepIdToOptionId'], {'String': 'String'});
            }
            if (data.hasOwnProperty('propertyKey')) {
                obj['propertyKey'] = ApiClient.convertToType(data['propertyKey'], 'String');
            }
            if (data.hasOwnProperty('propertyValue')) {
                obj['propertyValue'] = ApiClient.convertToType(data['propertyValue'], 'String');
            }
            if (data.hasOwnProperty('propertyType')) {
                obj['propertyType'] = ProductconfiguratorPropertyType.constructFromObject(data['propertyType']);
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
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyEntity</code>.
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
        if (data['propertyKey'] && !(typeof data['propertyKey'] === 'string' || data['propertyKey'] instanceof String)) {
            throw new Error("Expected the field `propertyKey` to be a primitive type in the JSON string but got " + data['propertyKey']);
        }
        // ensure the json data is a string
        if (data['propertyValue'] && !(typeof data['propertyValue'] === 'string' || data['propertyValue'] instanceof String)) {
            throw new Error("Expected the field `propertyValue` to be a primitive type in the JSON string but got " + data['propertyValue']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductconfiguratorpropertyEntity.prototype['id'] = undefined;

/**
 * @member {String} grn
 */
ProductconfiguratorpropertyEntity.prototype['grn'] = undefined;

/**
 * @member {Object.<String, String>} stepIdToOptionId
 */
ProductconfiguratorpropertyEntity.prototype['stepIdToOptionId'] = undefined;

/**
 * @member {String} propertyKey
 */
ProductconfiguratorpropertyEntity.prototype['propertyKey'] = undefined;

/**
 * @member {String} propertyValue
 */
ProductconfiguratorpropertyEntity.prototype['propertyValue'] = undefined;

/**
 * @member {module:model/ProductconfiguratorPropertyType} propertyType
 */
ProductconfiguratorpropertyEntity.prototype['propertyType'] = undefined;

/**
 * @member {Date} createdAt
 */
ProductconfiguratorpropertyEntity.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
ProductconfiguratorpropertyEntity.prototype['updatedAt'] = undefined;






export default ProductconfiguratorpropertyEntity;
