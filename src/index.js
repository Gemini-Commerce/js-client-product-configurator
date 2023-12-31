/**
 * Product Configurator Service
 * ## Introduction  This comprehensive guide will equip you with the knowledge to integrate and leverage our Product Configurator Service in your applications.  ## Quick Start  Get up and running in no time! Follow these steps to kickstart your integration:  1. **Authentication:** Obtain your integration JWT to authenticate your requests. 2. **Client Libraries:** Explore our GitHub repositories to grab client libraries in your preferred programming language. 3. **API Overview:** Familiarize yourself with our RESTful API using the OpenAPI specification.  ## Integration  ### API Overview  Our RESTful API is the gateway to unlocking the full potential of Product Configurator. Check out the detailed [API Reference](/docs/category/configurator) for a granular understanding of each endpoint and request/response format.  ### Client Libraries  To expedite your integration process, we provide client libraries for various programming languages. Find the one that suits your stack in our [GitHub repositories](https://github.com/Gemini-Commerce).  ### Authentication  Security is paramount. Learn how to authenticate your requests using JWT. This ensures a secure and reliable connection between your application and Product Configurator.  ## Configuration Management  ### Configurator Lifecycle  Understand the lifecycle of configurators, from draft to active and deleted. This flexibility allows you to manage configurations at your own pace.  ### Steps and Options  Configure product steps with ease and define options effortlessly. Explore the power of dependencies to create dynamic and intuitive configurations.  ### Matrices  Delve into matrices—your secret weapon. Explore price and weight matrices, and learn how configured steps influence properties and pricing.  ### Price Management  Unleash dynamic pricing with our versatile price matrices. From fixed prices to incremental structures, adapt to diverse pricing models effortlessly.  ## Security  Your data is in safe hands. Discover how Product Configurator ensures security through JWT authentication, safeguarding your sensitive information.  ## Backward Compatibility  Stay ahead of the curve. Learn about our versioning strategy, providing backward compatibility while allowing our service to evolve seamlessly.  ## Developer Support  Have questions? Need assistance? Write to us at [info@gemini-commerce.com](mailto:info@gemini-commerce.com) and we will get back to you.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ConfigurationConfigurationStep from './model/ConfigurationConfigurationStep';
import ConfigurationConfigurator from './model/ConfigurationConfigurator';
import ConfigurationGetAvailableConfigurationRequest from './model/ConfigurationGetAvailableConfigurationRequest';
import ConfigurationGetAvailableConfigurationResponse from './model/ConfigurationGetAvailableConfigurationResponse';
import ConfigurationGetConfigurationFromSelectionsRequest from './model/ConfigurationGetConfigurationFromSelectionsRequest';
import ConfigurationGetConfigurationFromSelectionsResponse from './model/ConfigurationGetConfigurationFromSelectionsResponse';
import ConfigurationOptionProperty from './model/ConfigurationOptionProperty';
import ConfigurationProperty from './model/ConfigurationProperty';
import ConfigurationPropertyFilter from './model/ConfigurationPropertyFilter';
import ConfigurationPropertyFilterGenericProperty from './model/ConfigurationPropertyFilterGenericProperty';
import ConfigurationSelection from './model/ConfigurationSelection';
import ConfigurationStepOption from './model/ConfigurationStepOption';
import ConfiguratorListRequest from './model/ConfiguratorListRequest';
import ConfiguratorListResponse from './model/ConfiguratorListResponse';
import DependencyCondition from './model/DependencyCondition';
import DependencyListDependenciesRequest from './model/DependencyListDependenciesRequest';
import DependencyListDependenciesResponse from './model/DependencyListDependenciesResponse';
import GooglerpcStatus from './model/GooglerpcStatus';
import ListMatricesRequestFilter from './model/ListMatricesRequestFilter';
import LocalisationLocalizedText from './model/LocalisationLocalizedText';
import MatrixGenericType from './model/MatrixGenericType';
import MatrixListMatricesRequest from './model/MatrixListMatricesRequest';
import MatrixListMatricesResponse from './model/MatrixListMatricesResponse';
import MatrixPriceType from './model/MatrixPriceType';
import MatrixWeightType from './model/MatrixWeightType';
import OptionListOptionsRequest from './model/OptionListOptionsRequest';
import OptionListOptionsResponse from './model/OptionListOptionsResponse';
import OptionSwatch from './model/OptionSwatch';
import ProductconfiguratorMoney from './model/ProductconfiguratorMoney';
import ProductconfiguratorPropertyMode from './model/ProductconfiguratorPropertyMode';
import ProductconfiguratorPropertyType from './model/ProductconfiguratorPropertyType';
import ProductconfiguratorWeightUnit from './model/ProductconfiguratorWeightUnit';
import ProductconfiguratorconfigurationOption from './model/ProductconfiguratorconfigurationOption';
import ProductconfiguratorconfigurationStep from './model/ProductconfiguratorconfigurationStep';
import ProductconfiguratorconfiguratorCopyRequest from './model/ProductconfiguratorconfiguratorCopyRequest';
import ProductconfiguratorconfiguratorCreateRequest from './model/ProductconfiguratorconfiguratorCreateRequest';
import ProductconfiguratorconfiguratorEntity from './model/ProductconfiguratorconfiguratorEntity';
import ProductconfiguratorconfiguratorStatus from './model/ProductconfiguratorconfiguratorStatus';
import ProductconfiguratorconfiguratorUpdatePayload from './model/ProductconfiguratorconfiguratorUpdatePayload';
import ProductconfiguratorconfiguratorUpdateRequest from './model/ProductconfiguratorconfiguratorUpdateRequest';
import ProductconfiguratordependencyCreateRequest from './model/ProductconfiguratordependencyCreateRequest';
import ProductconfiguratordependencyEntity from './model/ProductconfiguratordependencyEntity';
import ProductconfiguratordependencyType from './model/ProductconfiguratordependencyType';
import ProductconfiguratordependencyUpdatePayload from './model/ProductconfiguratordependencyUpdatePayload';
import ProductconfiguratordependencyUpdateRequest from './model/ProductconfiguratordependencyUpdateRequest';
import ProductconfiguratormatrixCreateRequest from './model/ProductconfiguratormatrixCreateRequest';
import ProductconfiguratormatrixEntity from './model/ProductconfiguratormatrixEntity';
import ProductconfiguratormatrixStep from './model/ProductconfiguratormatrixStep';
import ProductconfiguratormatrixUpdatePayload from './model/ProductconfiguratormatrixUpdatePayload';
import ProductconfiguratormatrixUpdateRequest from './model/ProductconfiguratormatrixUpdateRequest';
import ProductconfiguratoroptionBulkCreateRequest from './model/ProductconfiguratoroptionBulkCreateRequest';
import ProductconfiguratoroptionBulkCreateRequestCreateEntity from './model/ProductconfiguratoroptionBulkCreateRequestCreateEntity';
import ProductconfiguratoroptionBulkCreateResponse from './model/ProductconfiguratoroptionBulkCreateResponse';
import ProductconfiguratoroptionBulkDeleteRequest from './model/ProductconfiguratoroptionBulkDeleteRequest';
import ProductconfiguratoroptionBulkUpdateRequest from './model/ProductconfiguratoroptionBulkUpdateRequest';
import ProductconfiguratoroptionBulkUpdateRequestUpdateEntity from './model/ProductconfiguratoroptionBulkUpdateRequestUpdateEntity';
import ProductconfiguratoroptionBulkUpdateResponse from './model/ProductconfiguratoroptionBulkUpdateResponse';
import ProductconfiguratoroptionCopyRequest from './model/ProductconfiguratoroptionCopyRequest';
import ProductconfiguratoroptionCreateRequest from './model/ProductconfiguratoroptionCreateRequest';
import ProductconfiguratoroptionEntity from './model/ProductconfiguratoroptionEntity';
import ProductconfiguratoroptionUpdatePayload from './model/ProductconfiguratoroptionUpdatePayload';
import ProductconfiguratoroptionUpdateRequest from './model/ProductconfiguratoroptionUpdateRequest';
import ProductconfiguratorpropertyBulkCreateRequest from './model/ProductconfiguratorpropertyBulkCreateRequest';
import ProductconfiguratorpropertyBulkCreateRequestCreateEntity from './model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity';
import ProductconfiguratorpropertyBulkCreateResponse from './model/ProductconfiguratorpropertyBulkCreateResponse';
import ProductconfiguratorpropertyBulkUpdateRequest from './model/ProductconfiguratorpropertyBulkUpdateRequest';
import ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity from './model/ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity';
import ProductconfiguratorpropertyBulkUpdateResponse from './model/ProductconfiguratorpropertyBulkUpdateResponse';
import ProductconfiguratorpropertyCreateRequest from './model/ProductconfiguratorpropertyCreateRequest';
import ProductconfiguratorpropertyEntity from './model/ProductconfiguratorpropertyEntity';
import ProductconfiguratorpropertyGenericProperty from './model/ProductconfiguratorpropertyGenericProperty';
import ProductconfiguratorpropertyPriceProperty from './model/ProductconfiguratorpropertyPriceProperty';
import ProductconfiguratorpropertyUpdatePayload from './model/ProductconfiguratorpropertyUpdatePayload';
import ProductconfiguratorpropertyUpdateRequest from './model/ProductconfiguratorpropertyUpdateRequest';
import ProductconfiguratorpropertyWeightProperty from './model/ProductconfiguratorpropertyWeightProperty';
import ProductconfiguratorstepBulkCreateRequest from './model/ProductconfiguratorstepBulkCreateRequest';
import ProductconfiguratorstepBulkCreateRequestCreateEntity from './model/ProductconfiguratorstepBulkCreateRequestCreateEntity';
import ProductconfiguratorstepBulkCreateResponse from './model/ProductconfiguratorstepBulkCreateResponse';
import ProductconfiguratorstepBulkDeleteRequest from './model/ProductconfiguratorstepBulkDeleteRequest';
import ProductconfiguratorstepCopyRequest from './model/ProductconfiguratorstepCopyRequest';
import ProductconfiguratorstepCreateRequest from './model/ProductconfiguratorstepCreateRequest';
import ProductconfiguratorstepEntity from './model/ProductconfiguratorstepEntity';
import ProductconfiguratorstepUpdatePayload from './model/ProductconfiguratorstepUpdatePayload';
import ProductconfiguratorstepUpdateRequest from './model/ProductconfiguratorstepUpdateRequest';
import PropertyListPropertiesRequest from './model/PropertyListPropertiesRequest';
import PropertyListPropertiesResponse from './model/PropertyListPropertiesResponse';
import PropertyUpdatePayloadGenericProperty from './model/PropertyUpdatePayloadGenericProperty';
import PropertyUpdatePayloadPriceProperty from './model/PropertyUpdatePayloadPriceProperty';
import PropertyUpdatePayloadWeightProperty from './model/PropertyUpdatePayloadWeightProperty';
import ProtobufAny from './model/ProtobufAny';
import ConfigurationApi from './api/ConfigurationApi';
import ConfiguratorApi from './api/ConfiguratorApi';
import DependencyApi from './api/DependencyApi';
import MatrixApi from './api/MatrixApi';
import OptionApi from './api/OptionApi';
import PropertyApi from './api/PropertyApi';
import StepApi from './api/StepApi';


/**
* ## Introduction  This comprehensive guide will equip you with the knowledge to integrate and leverage our Product Configurator Service in your applications.  ## Quick Start  Get up and running in no time! Follow these steps to kickstart your integration:  1. **Authentication:** Obtain your integration JWT to authenticate your requests. 2. **Client Libraries:** Explore our GitHub repositories to grab client libraries in your preferred programming language. 3. **API Overview:** Familiarize yourself with our RESTful API using the OpenAPI specification.  ## Integration  ### API Overview  Our RESTful API is the gateway to unlocking the full potential of Product Configurator. Check out the detailed [API Reference](/docs/category/configurator) for a granular understanding of each endpoint and request/response format.  ### Client Libraries  To expedite your integration process, we provide client libraries for various programming languages. Find the one that suits your stack in our [GitHub repositories](https://github.com/Gemini-Commerce).  ### Authentication  Security is paramount. Learn how to authenticate your requests using JWT. This ensures a secure and reliable connection between your application and Product Configurator.  ## Configuration Management  ### Configurator Lifecycle  Understand the lifecycle of configurators, from draft to active and deleted. This flexibility allows you to manage configurations at your own pace.  ### Steps and Options  Configure product steps with ease and define options effortlessly. Explore the power of dependencies to create dynamic and intuitive configurations.  ### Matrices  Delve into matrices—your secret weapon. Explore price and weight matrices, and learn how configured steps influence properties and pricing.  ### Price Management  Unleash dynamic pricing with our versatile price matrices. From fixed prices to incremental structures, adapt to diverse pricing models effortlessly.  ## Security  Your data is in safe hands. Discover how Product Configurator ensures security through JWT authentication, safeguarding your sensitive information.  ## Backward Compatibility  Stay ahead of the curve. Learn about our versioning strategy, providing backward compatibility while allowing our service to evolve seamlessly.  ## Developer Support  Have questions? Need assistance? Write to us at [info@gemini-commerce.com](mailto:info@gemini-commerce.com) and we will get back to you..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GeminiCommerceJsClientProductConfigurator = require('index'); // See note below*.
* var xxxSvc = new GeminiCommerceJsClientProductConfigurator.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GeminiCommerceJsClientProductConfigurator.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GeminiCommerceJsClientProductConfigurator.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GeminiCommerceJsClientProductConfigurator.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ConfigurationConfigurationStep model constructor.
     * @property {module:model/ConfigurationConfigurationStep}
     */
    ConfigurationConfigurationStep,

    /**
     * The ConfigurationConfigurator model constructor.
     * @property {module:model/ConfigurationConfigurator}
     */
    ConfigurationConfigurator,

    /**
     * The ConfigurationGetAvailableConfigurationRequest model constructor.
     * @property {module:model/ConfigurationGetAvailableConfigurationRequest}
     */
    ConfigurationGetAvailableConfigurationRequest,

    /**
     * The ConfigurationGetAvailableConfigurationResponse model constructor.
     * @property {module:model/ConfigurationGetAvailableConfigurationResponse}
     */
    ConfigurationGetAvailableConfigurationResponse,

    /**
     * The ConfigurationGetConfigurationFromSelectionsRequest model constructor.
     * @property {module:model/ConfigurationGetConfigurationFromSelectionsRequest}
     */
    ConfigurationGetConfigurationFromSelectionsRequest,

    /**
     * The ConfigurationGetConfigurationFromSelectionsResponse model constructor.
     * @property {module:model/ConfigurationGetConfigurationFromSelectionsResponse}
     */
    ConfigurationGetConfigurationFromSelectionsResponse,

    /**
     * The ConfigurationOptionProperty model constructor.
     * @property {module:model/ConfigurationOptionProperty}
     */
    ConfigurationOptionProperty,

    /**
     * The ConfigurationProperty model constructor.
     * @property {module:model/ConfigurationProperty}
     */
    ConfigurationProperty,

    /**
     * The ConfigurationPropertyFilter model constructor.
     * @property {module:model/ConfigurationPropertyFilter}
     */
    ConfigurationPropertyFilter,

    /**
     * The ConfigurationPropertyFilterGenericProperty model constructor.
     * @property {module:model/ConfigurationPropertyFilterGenericProperty}
     */
    ConfigurationPropertyFilterGenericProperty,

    /**
     * The ConfigurationSelection model constructor.
     * @property {module:model/ConfigurationSelection}
     */
    ConfigurationSelection,

    /**
     * The ConfigurationStepOption model constructor.
     * @property {module:model/ConfigurationStepOption}
     */
    ConfigurationStepOption,

    /**
     * The ConfiguratorListRequest model constructor.
     * @property {module:model/ConfiguratorListRequest}
     */
    ConfiguratorListRequest,

    /**
     * The ConfiguratorListResponse model constructor.
     * @property {module:model/ConfiguratorListResponse}
     */
    ConfiguratorListResponse,

    /**
     * The DependencyCondition model constructor.
     * @property {module:model/DependencyCondition}
     */
    DependencyCondition,

    /**
     * The DependencyListDependenciesRequest model constructor.
     * @property {module:model/DependencyListDependenciesRequest}
     */
    DependencyListDependenciesRequest,

    /**
     * The DependencyListDependenciesResponse model constructor.
     * @property {module:model/DependencyListDependenciesResponse}
     */
    DependencyListDependenciesResponse,

    /**
     * The GooglerpcStatus model constructor.
     * @property {module:model/GooglerpcStatus}
     */
    GooglerpcStatus,

    /**
     * The ListMatricesRequestFilter model constructor.
     * @property {module:model/ListMatricesRequestFilter}
     */
    ListMatricesRequestFilter,

    /**
     * The LocalisationLocalizedText model constructor.
     * @property {module:model/LocalisationLocalizedText}
     */
    LocalisationLocalizedText,

    /**
     * The MatrixGenericType model constructor.
     * @property {module:model/MatrixGenericType}
     */
    MatrixGenericType,

    /**
     * The MatrixListMatricesRequest model constructor.
     * @property {module:model/MatrixListMatricesRequest}
     */
    MatrixListMatricesRequest,

    /**
     * The MatrixListMatricesResponse model constructor.
     * @property {module:model/MatrixListMatricesResponse}
     */
    MatrixListMatricesResponse,

    /**
     * The MatrixPriceType model constructor.
     * @property {module:model/MatrixPriceType}
     */
    MatrixPriceType,

    /**
     * The MatrixWeightType model constructor.
     * @property {module:model/MatrixWeightType}
     */
    MatrixWeightType,

    /**
     * The OptionListOptionsRequest model constructor.
     * @property {module:model/OptionListOptionsRequest}
     */
    OptionListOptionsRequest,

    /**
     * The OptionListOptionsResponse model constructor.
     * @property {module:model/OptionListOptionsResponse}
     */
    OptionListOptionsResponse,

    /**
     * The OptionSwatch model constructor.
     * @property {module:model/OptionSwatch}
     */
    OptionSwatch,

    /**
     * The ProductconfiguratorMoney model constructor.
     * @property {module:model/ProductconfiguratorMoney}
     */
    ProductconfiguratorMoney,

    /**
     * The ProductconfiguratorPropertyMode model constructor.
     * @property {module:model/ProductconfiguratorPropertyMode}
     */
    ProductconfiguratorPropertyMode,

    /**
     * The ProductconfiguratorPropertyType model constructor.
     * @property {module:model/ProductconfiguratorPropertyType}
     */
    ProductconfiguratorPropertyType,

    /**
     * The ProductconfiguratorWeightUnit model constructor.
     * @property {module:model/ProductconfiguratorWeightUnit}
     */
    ProductconfiguratorWeightUnit,

    /**
     * The ProductconfiguratorconfigurationOption model constructor.
     * @property {module:model/ProductconfiguratorconfigurationOption}
     */
    ProductconfiguratorconfigurationOption,

    /**
     * The ProductconfiguratorconfigurationStep model constructor.
     * @property {module:model/ProductconfiguratorconfigurationStep}
     */
    ProductconfiguratorconfigurationStep,

    /**
     * The ProductconfiguratorconfiguratorCopyRequest model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorCopyRequest}
     */
    ProductconfiguratorconfiguratorCopyRequest,

    /**
     * The ProductconfiguratorconfiguratorCreateRequest model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorCreateRequest}
     */
    ProductconfiguratorconfiguratorCreateRequest,

    /**
     * The ProductconfiguratorconfiguratorEntity model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorEntity}
     */
    ProductconfiguratorconfiguratorEntity,

    /**
     * The ProductconfiguratorconfiguratorStatus model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorStatus}
     */
    ProductconfiguratorconfiguratorStatus,

    /**
     * The ProductconfiguratorconfiguratorUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorUpdatePayload}
     */
    ProductconfiguratorconfiguratorUpdatePayload,

    /**
     * The ProductconfiguratorconfiguratorUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratorconfiguratorUpdateRequest}
     */
    ProductconfiguratorconfiguratorUpdateRequest,

    /**
     * The ProductconfiguratordependencyCreateRequest model constructor.
     * @property {module:model/ProductconfiguratordependencyCreateRequest}
     */
    ProductconfiguratordependencyCreateRequest,

    /**
     * The ProductconfiguratordependencyEntity model constructor.
     * @property {module:model/ProductconfiguratordependencyEntity}
     */
    ProductconfiguratordependencyEntity,

    /**
     * The ProductconfiguratordependencyType model constructor.
     * @property {module:model/ProductconfiguratordependencyType}
     */
    ProductconfiguratordependencyType,

    /**
     * The ProductconfiguratordependencyUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratordependencyUpdatePayload}
     */
    ProductconfiguratordependencyUpdatePayload,

    /**
     * The ProductconfiguratordependencyUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratordependencyUpdateRequest}
     */
    ProductconfiguratordependencyUpdateRequest,

    /**
     * The ProductconfiguratormatrixCreateRequest model constructor.
     * @property {module:model/ProductconfiguratormatrixCreateRequest}
     */
    ProductconfiguratormatrixCreateRequest,

    /**
     * The ProductconfiguratormatrixEntity model constructor.
     * @property {module:model/ProductconfiguratormatrixEntity}
     */
    ProductconfiguratormatrixEntity,

    /**
     * The ProductconfiguratormatrixStep model constructor.
     * @property {module:model/ProductconfiguratormatrixStep}
     */
    ProductconfiguratormatrixStep,

    /**
     * The ProductconfiguratormatrixUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratormatrixUpdatePayload}
     */
    ProductconfiguratormatrixUpdatePayload,

    /**
     * The ProductconfiguratormatrixUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratormatrixUpdateRequest}
     */
    ProductconfiguratormatrixUpdateRequest,

    /**
     * The ProductconfiguratoroptionBulkCreateRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkCreateRequest}
     */
    ProductconfiguratoroptionBulkCreateRequest,

    /**
     * The ProductconfiguratoroptionBulkCreateRequestCreateEntity model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkCreateRequestCreateEntity}
     */
    ProductconfiguratoroptionBulkCreateRequestCreateEntity,

    /**
     * The ProductconfiguratoroptionBulkCreateResponse model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkCreateResponse}
     */
    ProductconfiguratoroptionBulkCreateResponse,

    /**
     * The ProductconfiguratoroptionBulkDeleteRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkDeleteRequest}
     */
    ProductconfiguratoroptionBulkDeleteRequest,

    /**
     * The ProductconfiguratoroptionBulkUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkUpdateRequest}
     */
    ProductconfiguratoroptionBulkUpdateRequest,

    /**
     * The ProductconfiguratoroptionBulkUpdateRequestUpdateEntity model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkUpdateRequestUpdateEntity}
     */
    ProductconfiguratoroptionBulkUpdateRequestUpdateEntity,

    /**
     * The ProductconfiguratoroptionBulkUpdateResponse model constructor.
     * @property {module:model/ProductconfiguratoroptionBulkUpdateResponse}
     */
    ProductconfiguratoroptionBulkUpdateResponse,

    /**
     * The ProductconfiguratoroptionCopyRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionCopyRequest}
     */
    ProductconfiguratoroptionCopyRequest,

    /**
     * The ProductconfiguratoroptionCreateRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionCreateRequest}
     */
    ProductconfiguratoroptionCreateRequest,

    /**
     * The ProductconfiguratoroptionEntity model constructor.
     * @property {module:model/ProductconfiguratoroptionEntity}
     */
    ProductconfiguratoroptionEntity,

    /**
     * The ProductconfiguratoroptionUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratoroptionUpdatePayload}
     */
    ProductconfiguratoroptionUpdatePayload,

    /**
     * The ProductconfiguratoroptionUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratoroptionUpdateRequest}
     */
    ProductconfiguratoroptionUpdateRequest,

    /**
     * The ProductconfiguratorpropertyBulkCreateRequest model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkCreateRequest}
     */
    ProductconfiguratorpropertyBulkCreateRequest,

    /**
     * The ProductconfiguratorpropertyBulkCreateRequestCreateEntity model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity}
     */
    ProductconfiguratorpropertyBulkCreateRequestCreateEntity,

    /**
     * The ProductconfiguratorpropertyBulkCreateResponse model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkCreateResponse}
     */
    ProductconfiguratorpropertyBulkCreateResponse,

    /**
     * The ProductconfiguratorpropertyBulkUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkUpdateRequest}
     */
    ProductconfiguratorpropertyBulkUpdateRequest,

    /**
     * The ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity}
     */
    ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity,

    /**
     * The ProductconfiguratorpropertyBulkUpdateResponse model constructor.
     * @property {module:model/ProductconfiguratorpropertyBulkUpdateResponse}
     */
    ProductconfiguratorpropertyBulkUpdateResponse,

    /**
     * The ProductconfiguratorpropertyCreateRequest model constructor.
     * @property {module:model/ProductconfiguratorpropertyCreateRequest}
     */
    ProductconfiguratorpropertyCreateRequest,

    /**
     * The ProductconfiguratorpropertyEntity model constructor.
     * @property {module:model/ProductconfiguratorpropertyEntity}
     */
    ProductconfiguratorpropertyEntity,

    /**
     * The ProductconfiguratorpropertyGenericProperty model constructor.
     * @property {module:model/ProductconfiguratorpropertyGenericProperty}
     */
    ProductconfiguratorpropertyGenericProperty,

    /**
     * The ProductconfiguratorpropertyPriceProperty model constructor.
     * @property {module:model/ProductconfiguratorpropertyPriceProperty}
     */
    ProductconfiguratorpropertyPriceProperty,

    /**
     * The ProductconfiguratorpropertyUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratorpropertyUpdatePayload}
     */
    ProductconfiguratorpropertyUpdatePayload,

    /**
     * The ProductconfiguratorpropertyUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratorpropertyUpdateRequest}
     */
    ProductconfiguratorpropertyUpdateRequest,

    /**
     * The ProductconfiguratorpropertyWeightProperty model constructor.
     * @property {module:model/ProductconfiguratorpropertyWeightProperty}
     */
    ProductconfiguratorpropertyWeightProperty,

    /**
     * The ProductconfiguratorstepBulkCreateRequest model constructor.
     * @property {module:model/ProductconfiguratorstepBulkCreateRequest}
     */
    ProductconfiguratorstepBulkCreateRequest,

    /**
     * The ProductconfiguratorstepBulkCreateRequestCreateEntity model constructor.
     * @property {module:model/ProductconfiguratorstepBulkCreateRequestCreateEntity}
     */
    ProductconfiguratorstepBulkCreateRequestCreateEntity,

    /**
     * The ProductconfiguratorstepBulkCreateResponse model constructor.
     * @property {module:model/ProductconfiguratorstepBulkCreateResponse}
     */
    ProductconfiguratorstepBulkCreateResponse,

    /**
     * The ProductconfiguratorstepBulkDeleteRequest model constructor.
     * @property {module:model/ProductconfiguratorstepBulkDeleteRequest}
     */
    ProductconfiguratorstepBulkDeleteRequest,

    /**
     * The ProductconfiguratorstepCopyRequest model constructor.
     * @property {module:model/ProductconfiguratorstepCopyRequest}
     */
    ProductconfiguratorstepCopyRequest,

    /**
     * The ProductconfiguratorstepCreateRequest model constructor.
     * @property {module:model/ProductconfiguratorstepCreateRequest}
     */
    ProductconfiguratorstepCreateRequest,

    /**
     * The ProductconfiguratorstepEntity model constructor.
     * @property {module:model/ProductconfiguratorstepEntity}
     */
    ProductconfiguratorstepEntity,

    /**
     * The ProductconfiguratorstepUpdatePayload model constructor.
     * @property {module:model/ProductconfiguratorstepUpdatePayload}
     */
    ProductconfiguratorstepUpdatePayload,

    /**
     * The ProductconfiguratorstepUpdateRequest model constructor.
     * @property {module:model/ProductconfiguratorstepUpdateRequest}
     */
    ProductconfiguratorstepUpdateRequest,

    /**
     * The PropertyListPropertiesRequest model constructor.
     * @property {module:model/PropertyListPropertiesRequest}
     */
    PropertyListPropertiesRequest,

    /**
     * The PropertyListPropertiesResponse model constructor.
     * @property {module:model/PropertyListPropertiesResponse}
     */
    PropertyListPropertiesResponse,

    /**
     * The PropertyUpdatePayloadGenericProperty model constructor.
     * @property {module:model/PropertyUpdatePayloadGenericProperty}
     */
    PropertyUpdatePayloadGenericProperty,

    /**
     * The PropertyUpdatePayloadPriceProperty model constructor.
     * @property {module:model/PropertyUpdatePayloadPriceProperty}
     */
    PropertyUpdatePayloadPriceProperty,

    /**
     * The PropertyUpdatePayloadWeightProperty model constructor.
     * @property {module:model/PropertyUpdatePayloadWeightProperty}
     */
    PropertyUpdatePayloadWeightProperty,

    /**
     * The ProtobufAny model constructor.
     * @property {module:model/ProtobufAny}
     */
    ProtobufAny,

    /**
    * The ConfigurationApi service constructor.
    * @property {module:api/ConfigurationApi}
    */
    ConfigurationApi,

    /**
    * The ConfiguratorApi service constructor.
    * @property {module:api/ConfiguratorApi}
    */
    ConfiguratorApi,

    /**
    * The DependencyApi service constructor.
    * @property {module:api/DependencyApi}
    */
    DependencyApi,

    /**
    * The MatrixApi service constructor.
    * @property {module:api/MatrixApi}
    */
    MatrixApi,

    /**
    * The OptionApi service constructor.
    * @property {module:api/OptionApi}
    */
    OptionApi,

    /**
    * The PropertyApi service constructor.
    * @property {module:api/PropertyApi}
    */
    PropertyApi,

    /**
    * The StepApi service constructor.
    * @property {module:api/StepApi}
    */
    StepApi
};
