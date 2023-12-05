/**
 * Product Configurator Service
 * ## Introduction  This comprehensive guide will equip you with the knowledge to integrate and leverage our Product Configurator Service in your applications.  ## Quick Start  Get up and running in no time! Follow these steps to kickstart your integration:  1. **Authentication:** Obtain your integration JWT to authenticate your requests. 2. **Client Libraries:** Explore our GitHub repositories to grab client libraries in your preferred programming language. 3. **API Overview:** Familiarize yourself with our RESTful API using the OpenAPI specification.  ## Integration  ### API Overview  Our RESTful API is the gateway to unlocking the full potential of Product Configurator. Check out the detailed [API Reference](/docs/category/configurator) for a granular understanding of each endpoint and request/response format.  ### Client Libraries  To expedite your integration process, we provide client libraries for various programming languages. Find the one that suits your stack in our [GitHub repositories](https://github.com/Gemini-Commerce).  ### Authentication  Security is paramount. Learn how to authenticate your requests using JWT. This ensures a secure and reliable connection between your application and Product Configurator.  ## Configuration Management  ### Configurator Lifecycle  Understand the lifecycle of configurators, from draft to active and deleted. This flexibility allows you to manage configurations at your own pace.  ### Steps and Options  Configure product steps with ease and define options effortlessly. Explore the power of dependencies to create dynamic and intuitive configurations.  ### Matrices  Delve into matrices—your secret weapon. Explore price and weight matrices, and learn how configured steps influence properties and pricing.  ### Price Management  Unleash dynamic pricing with our versatile price matrices. From fixed prices to incremental structures, adapt to diverse pricing models effortlessly.  ## Security  Your data is in safe hands. Discover how Product Configurator ensures security through JWT authentication, safeguarding your sensitive information.  ## Backward Compatibility  Stay ahead of the curve. Learn about our versioning strategy, providing backward compatibility while allowing our service to evolve seamlessly.  ## Developer Support  Have questions? Need assistance? Write to us at [info@gemini-commerce.com](mailto:info@gemini-commerce.com) and we will get back to you.
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ConfigurationGetAvailableConfigurationRequest from '../model/ConfigurationGetAvailableConfigurationRequest';
import ConfigurationGetAvailableConfigurationResponse from '../model/ConfigurationGetAvailableConfigurationResponse';
import ConfigurationGetConfigurationFromSelectionsRequest from '../model/ConfigurationGetConfigurationFromSelectionsRequest';
import ConfigurationGetConfigurationFromSelectionsResponse from '../model/ConfigurationGetConfigurationFromSelectionsResponse';
import GooglerpcStatus from '../model/GooglerpcStatus';

/**
* Configuration service.
* @module api/ConfigurationApi
* @version v1
*/
export default class ConfigurationApi {

    /**
    * Constructs a new ConfigurationApi. 
    * @alias module:api/ConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the productConfiguratorGetAvailableConfiguration operation.
     * @callback module:api/ConfigurationApi~productConfiguratorGetAvailableConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfigurationGetAvailableConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Available Configuration
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * @param {String} tenantId 
     * @param {String} productId 
     * @param {Object} opts Optional parameters
     * @param {String} [configuratorId] 
     * @param {module:api/ConfigurationApi~productConfiguratorGetAvailableConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConfigurationGetAvailableConfigurationResponse}
     */
    productConfiguratorGetAvailableConfiguration(tenantId, productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorGetAvailableConfiguration");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling productConfiguratorGetAvailableConfiguration");
      }

      let pathParams = {
        'tenantId': tenantId,
        'productId': productId
      };
      let queryParams = {
        'configuratorId': opts['configuratorId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConfigurationGetAvailableConfigurationResponse;
      return this.apiClient.callApi(
        '/v1/{tenantId}/product/{productId}/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorGetAvailableConfiguration2 operation.
     * @callback module:api/ConfigurationApi~productConfiguratorGetAvailableConfiguration2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfigurationGetAvailableConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Available Configuration
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * @param {String} tenantId 
     * @param {String} productId 
     * @param {module:model/ConfigurationGetAvailableConfigurationRequest} body 
     * @param {module:api/ConfigurationApi~productConfiguratorGetAvailableConfiguration2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConfigurationGetAvailableConfigurationResponse}
     */
    productConfiguratorGetAvailableConfiguration2(tenantId, productId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorGetAvailableConfiguration2");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling productConfiguratorGetAvailableConfiguration2");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productConfiguratorGetAvailableConfiguration2");
      }

      let pathParams = {
        'tenantId': tenantId,
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConfigurationGetAvailableConfigurationResponse;
      return this.apiClient.callApi(
        '/v1/{tenantId}/product/{productId}/configuration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorGetConfigurationFromSelections operation.
     * @callback module:api/ConfigurationApi~productConfiguratorGetConfigurationFromSelectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfigurationGetConfigurationFromSelectionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Configuration from Selections
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * @param {String} tenantId 
     * @param {String} productId 
     * @param {module:model/ConfigurationGetConfigurationFromSelectionsRequest} body 
     * @param {module:api/ConfigurationApi~productConfiguratorGetConfigurationFromSelectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConfigurationGetConfigurationFromSelectionsResponse}
     */
    productConfiguratorGetConfigurationFromSelections(tenantId, productId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorGetConfigurationFromSelections");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling productConfiguratorGetConfigurationFromSelections");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productConfiguratorGetConfigurationFromSelections");
      }

      let pathParams = {
        'tenantId': tenantId,
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConfigurationGetConfigurationFromSelectionsResponse;
      return this.apiClient.callApi(
        '/v1/{tenantId}/product/{productId}/configuration-from-selections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
