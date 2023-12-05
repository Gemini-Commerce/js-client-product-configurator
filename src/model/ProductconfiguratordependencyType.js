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
* Enum class ProductconfiguratordependencyType.
* @enum {}
* @readonly
*/
export default class ProductconfiguratordependencyType {
    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    
        /**
         * value: "ALL"
         * @const
         */
        "ALL" = "ALL";

    
        /**
         * value: "ANY"
         * @const
         */
        "ANY" = "ANY";

    

    /**
    * Returns a <code>ProductconfiguratordependencyType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ProductconfiguratordependencyType} The enum <code>ProductconfiguratordependencyType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
