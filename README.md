# product_configurator_service

ProductConfiguratorService - JavaScript client for product_configurator_service
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: v1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install product_configurator_service --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your product_configurator_service from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/gemini-commerce/js-client-product-configurator
then install it via:

```shell
    npm install gemini-commerce/js-client-product-configurator --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProductConfiguratorService = require('product_configurator_service');

var defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
var standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = "YOUR ACCESS TOKEN"

var api = new ProductConfiguratorService.ConfiguratorApi()
var tenantId = "tenantId_example"; // {String} 
var productId = "productId_example"; // {String} 
var body = new ProductConfiguratorService.ProductconfiguratorconfiguratorCreateRequest(); // {ProductconfiguratorconfiguratorCreateRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.productConfiguratorCreateConfigurator(tenantId, productId, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://product-configurator.api.gogemini.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProductConfiguratorService.ConfiguratorApi* | [**productConfiguratorCreateConfigurator**](docs/ConfiguratorApi.md#productConfiguratorCreateConfigurator) | **POST** /v1/{tenantId}/product/{productId}/create | Create Product Configurator
*ProductConfiguratorService.ConfiguratorApi* | [**productConfiguratorGetConfiguratorByProductId**](docs/ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId) | **GET** /v1/{tenantId}/product/{productId} | Get Product Configurator by Product ID
*ProductConfiguratorService.ConfiguratorApi* | [**productConfiguratorGetConfiguratorByProductId2**](docs/ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId2) | **GET** /v1/{tenantId}/product/{productId}/status/{status} | Get Product Configurator by Product ID
*ProductConfiguratorService.ConfiguratorApi* | [**productConfiguratorListConfigurators**](docs/ConfiguratorApi.md#productConfiguratorListConfigurators) | **POST** /v1/{tenantId}/product/{productId}/page-size/{pageSize}/configurators | List Product Configurators
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkCreateOptions**](docs/ProductConfiguratorApi.md#productConfiguratorBulkCreateOptions) | **POST** /v1/{tenantId}/step/{stepId}/option/create/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkCreateProperties**](docs/ProductConfiguratorApi.md#productConfiguratorBulkCreateProperties) | **POST** /v1/{tenantId}/property/create/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkCreateSteps**](docs/ProductConfiguratorApi.md#productConfiguratorBulkCreateSteps) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkDeleteOptions**](docs/ProductConfiguratorApi.md#productConfiguratorBulkDeleteOptions) | **POST** /v1/{tenantId}/option/delete/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkDeleteSteps**](docs/ProductConfiguratorApi.md#productConfiguratorBulkDeleteSteps) | **POST** /v1/{tenantId}/step/delete/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkUpdateOptions**](docs/ProductConfiguratorApi.md#productConfiguratorBulkUpdateOptions) | **PUT** /v1/{tenantId}/option/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorBulkUpdateProperties**](docs/ProductConfiguratorApi.md#productConfiguratorBulkUpdateProperties) | **PUT** /v1/{tenantId}/properties/bulk | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCopyConfigurator**](docs/ProductConfiguratorApi.md#productConfiguratorCopyConfigurator) | **POST** /v1/{tenantId}/product/{sourceConfiguratorId}/copy | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCopyOption**](docs/ProductConfiguratorApi.md#productConfiguratorCopyOption) | **POST** /v1/{tenantId}/option/{sourceOptionId}/copy | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCopyStep**](docs/ProductConfiguratorApi.md#productConfiguratorCopyStep) | **POST** /v1/{tenantId}/step/{sourceStepId}/copy | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCreateDependency**](docs/ProductConfiguratorApi.md#productConfiguratorCreateDependency) | **POST** /v1/{tenantId}/step/{stepId}/dependency/create | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCreateMatrix**](docs/ProductConfiguratorApi.md#productConfiguratorCreateMatrix) | **POST** /v1/{tenantId}/matrix/create | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCreateOption**](docs/ProductConfiguratorApi.md#productConfiguratorCreateOption) | **POST** /v1/{tenantId}/step/{stepId}/option/create | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCreateProperty**](docs/ProductConfiguratorApi.md#productConfiguratorCreateProperty) | **POST** /v1/{tenantId}/property/create | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorCreateStep**](docs/ProductConfiguratorApi.md#productConfiguratorCreateStep) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorDeleteConfigurator**](docs/ProductConfiguratorApi.md#productConfiguratorDeleteConfigurator) | **DELETE** /v1/{tenantId}/configurator/{configuratorId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorDeleteDependency**](docs/ProductConfiguratorApi.md#productConfiguratorDeleteDependency) | **DELETE** /v1/{tenantId}/dependency/{dependencyId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorDeleteMatrix**](docs/ProductConfiguratorApi.md#productConfiguratorDeleteMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorDeleteOption**](docs/ProductConfiguratorApi.md#productConfiguratorDeleteOption) | **DELETE** /v1/{tenantId}/option/{optionId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorDeleteStep**](docs/ProductConfiguratorApi.md#productConfiguratorDeleteStep) | **DELETE** /v1/{tenantId}/step/{stepId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorGetAvailableConfiguration**](docs/ProductConfiguratorApi.md#productConfiguratorGetAvailableConfiguration) | **GET** /v1/{tenantId}/product/{productId}/configuration | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorGetAvailableConfiguration2**](docs/ProductConfiguratorApi.md#productConfiguratorGetAvailableConfiguration2) | **POST** /v1/{tenantId}/product/{productId}/configuration | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorGetConfigurationFromSelections**](docs/ProductConfiguratorApi.md#productConfiguratorGetConfigurationFromSelections) | **POST** /v1/{tenantId}/product/{productId}/configuration-from-selections | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorGetMatrix**](docs/ProductConfiguratorApi.md#productConfiguratorGetMatrix) | **GET** /v1/{tenantId}/matrix/{matrixId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorListDependencies**](docs/ProductConfiguratorApi.md#productConfiguratorListDependencies) | **POST** /v1/{tenantId}/page-size/{pageSize}/dependencies | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorListMatrices**](docs/ProductConfiguratorApi.md#productConfiguratorListMatrices) | **POST** /v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/matrices | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorListOptions**](docs/ProductConfiguratorApi.md#productConfiguratorListOptions) | **POST** /v1/{tenantId}/step/{stepId}/page-size/{pageSize}/options | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorListProperties**](docs/ProductConfiguratorApi.md#productConfiguratorListProperties) | **POST** /v1/{tenantId}/matrix/{matrixId}/page-size/{pageSize}/properties | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorRemovePricelistFromMatrix**](docs/ProductConfiguratorApi.md#productConfiguratorRemovePricelistFromMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId}/pricelist/{pricelistGrn} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateConfigurator**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateConfigurator) | **PUT** /v1/{tenantId}/configurator/{configuratorId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateDependency**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateDependency) | **PUT** /v1/{tenantId}/dependency/{dependencyId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateMatrix**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateMatrix) | **PUT** /v1/{tenantId}/matrix/{matrixId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateOption**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateOption) | **PUT** /v1/{tenantId}/option/{optionId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateProperty**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateProperty) | **PUT** /v1/{tenantId}/property/{propertyId} | 
*ProductConfiguratorService.ProductConfiguratorApi* | [**productConfiguratorUpdateStep**](docs/ProductConfiguratorApi.md#productConfiguratorUpdateStep) | **PUT** /v1/{tenantId}/step/{stepId} | 


## Documentation for Models

 - [ProductConfiguratorService.ConfigurationConfigurationStep](docs/ConfigurationConfigurationStep.md)
 - [ProductConfiguratorService.ConfigurationConfigurator](docs/ConfigurationConfigurator.md)
 - [ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest](docs/ConfigurationGetAvailableConfigurationRequest.md)
 - [ProductConfiguratorService.ConfigurationGetAvailableConfigurationResponse](docs/ConfigurationGetAvailableConfigurationResponse.md)
 - [ProductConfiguratorService.ConfigurationGetConfigurationFromSelectionsRequest](docs/ConfigurationGetConfigurationFromSelectionsRequest.md)
 - [ProductConfiguratorService.ConfigurationGetConfigurationFromSelectionsResponse](docs/ConfigurationGetConfigurationFromSelectionsResponse.md)
 - [ProductConfiguratorService.ConfigurationOptionProperty](docs/ConfigurationOptionProperty.md)
 - [ProductConfiguratorService.ConfigurationProperty](docs/ConfigurationProperty.md)
 - [ProductConfiguratorService.ConfigurationPropertyFilter](docs/ConfigurationPropertyFilter.md)
 - [ProductConfiguratorService.ConfigurationPropertyFilterGenericProperty](docs/ConfigurationPropertyFilterGenericProperty.md)
 - [ProductConfiguratorService.ConfigurationSelection](docs/ConfigurationSelection.md)
 - [ProductConfiguratorService.ConfigurationStepOption](docs/ConfigurationStepOption.md)
 - [ProductConfiguratorService.ConfiguratorListRequest](docs/ConfiguratorListRequest.md)
 - [ProductConfiguratorService.ConfiguratorListResponse](docs/ConfiguratorListResponse.md)
 - [ProductConfiguratorService.DependencyCondition](docs/DependencyCondition.md)
 - [ProductConfiguratorService.DependencyListDependenciesRequest](docs/DependencyListDependenciesRequest.md)
 - [ProductConfiguratorService.DependencyListDependenciesResponse](docs/DependencyListDependenciesResponse.md)
 - [ProductConfiguratorService.GooglerpcStatus](docs/GooglerpcStatus.md)
 - [ProductConfiguratorService.ListMatricesRequestFilter](docs/ListMatricesRequestFilter.md)
 - [ProductConfiguratorService.LocalisationLocalizedText](docs/LocalisationLocalizedText.md)
 - [ProductConfiguratorService.MatrixGenericType](docs/MatrixGenericType.md)
 - [ProductConfiguratorService.MatrixListMatricesRequest](docs/MatrixListMatricesRequest.md)
 - [ProductConfiguratorService.MatrixListMatricesResponse](docs/MatrixListMatricesResponse.md)
 - [ProductConfiguratorService.MatrixPriceType](docs/MatrixPriceType.md)
 - [ProductConfiguratorService.MatrixWeightType](docs/MatrixWeightType.md)
 - [ProductConfiguratorService.OptionListOptionsRequest](docs/OptionListOptionsRequest.md)
 - [ProductConfiguratorService.OptionListOptionsResponse](docs/OptionListOptionsResponse.md)
 - [ProductConfiguratorService.OptionSwatch](docs/OptionSwatch.md)
 - [ProductConfiguratorService.ProductconfiguratorMoney](docs/ProductconfiguratorMoney.md)
 - [ProductConfiguratorService.ProductconfiguratorPropertyMode](docs/ProductconfiguratorPropertyMode.md)
 - [ProductConfiguratorService.ProductconfiguratorPropertyType](docs/ProductconfiguratorPropertyType.md)
 - [ProductConfiguratorService.ProductconfiguratorWeightUnit](docs/ProductconfiguratorWeightUnit.md)
 - [ProductConfiguratorService.ProductconfiguratorconfigurationOption](docs/ProductconfiguratorconfigurationOption.md)
 - [ProductConfiguratorService.ProductconfiguratorconfigurationStep](docs/ProductconfiguratorconfigurationStep.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorCopyRequest](docs/ProductconfiguratorconfiguratorCopyRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorCreateRequest](docs/ProductconfiguratorconfiguratorCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorEntity](docs/ProductconfiguratorconfiguratorEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorStatus](docs/ProductconfiguratorconfiguratorStatus.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorUpdatePayload](docs/ProductconfiguratorconfiguratorUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratorconfiguratorUpdateRequest](docs/ProductconfiguratorconfiguratorUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratordependencyCreateRequest](docs/ProductconfiguratordependencyCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratordependencyEntity](docs/ProductconfiguratordependencyEntity.md)
 - [ProductConfiguratorService.ProductconfiguratordependencyType](docs/ProductconfiguratordependencyType.md)
 - [ProductConfiguratorService.ProductconfiguratordependencyUpdatePayload](docs/ProductconfiguratordependencyUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratordependencyUpdateRequest](docs/ProductconfiguratordependencyUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratormatrixCreateRequest](docs/ProductconfiguratormatrixCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratormatrixEntity](docs/ProductconfiguratormatrixEntity.md)
 - [ProductConfiguratorService.ProductconfiguratormatrixStep](docs/ProductconfiguratormatrixStep.md)
 - [ProductConfiguratorService.ProductconfiguratormatrixUpdatePayload](docs/ProductconfiguratormatrixUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratormatrixUpdateRequest](docs/ProductconfiguratormatrixUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkCreateRequest](docs/ProductconfiguratoroptionBulkCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkCreateRequestCreateEntity](docs/ProductconfiguratoroptionBulkCreateRequestCreateEntity.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkCreateResponse](docs/ProductconfiguratoroptionBulkCreateResponse.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkDeleteRequest](docs/ProductconfiguratoroptionBulkDeleteRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkUpdateRequest](docs/ProductconfiguratoroptionBulkUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkUpdateRequestUpdateEntity](docs/ProductconfiguratoroptionBulkUpdateRequestUpdateEntity.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionBulkUpdateResponse](docs/ProductconfiguratoroptionBulkUpdateResponse.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionCopyRequest](docs/ProductconfiguratoroptionCopyRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionCreateRequest](docs/ProductconfiguratoroptionCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionEntity](docs/ProductconfiguratoroptionEntity.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionUpdatePayload](docs/ProductconfiguratoroptionUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratoroptionUpdateRequest](docs/ProductconfiguratoroptionUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkCreateRequest](docs/ProductconfiguratorpropertyBulkCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkCreateRequestCreateEntity](docs/ProductconfiguratorpropertyBulkCreateRequestCreateEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkCreateResponse](docs/ProductconfiguratorpropertyBulkCreateResponse.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkUpdateRequest](docs/ProductconfiguratorpropertyBulkUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity](docs/ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyBulkUpdateResponse](docs/ProductconfiguratorpropertyBulkUpdateResponse.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyCreateRequest](docs/ProductconfiguratorpropertyCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyEntity](docs/ProductconfiguratorpropertyEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty](docs/ProductconfiguratorpropertyGenericProperty.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyPriceProperty](docs/ProductconfiguratorpropertyPriceProperty.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyUpdatePayload](docs/ProductconfiguratorpropertyUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyUpdateRequest](docs/ProductconfiguratorpropertyUpdateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorpropertyWeightProperty](docs/ProductconfiguratorpropertyWeightProperty.md)
 - [ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequest](docs/ProductconfiguratorstepBulkCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity](docs/ProductconfiguratorstepBulkCreateRequestCreateEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorstepBulkCreateResponse](docs/ProductconfiguratorstepBulkCreateResponse.md)
 - [ProductConfiguratorService.ProductconfiguratorstepBulkDeleteRequest](docs/ProductconfiguratorstepBulkDeleteRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorstepCopyRequest](docs/ProductconfiguratorstepCopyRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorstepCreateRequest](docs/ProductconfiguratorstepCreateRequest.md)
 - [ProductConfiguratorService.ProductconfiguratorstepEntity](docs/ProductconfiguratorstepEntity.md)
 - [ProductConfiguratorService.ProductconfiguratorstepUpdatePayload](docs/ProductconfiguratorstepUpdatePayload.md)
 - [ProductConfiguratorService.ProductconfiguratorstepUpdateRequest](docs/ProductconfiguratorstepUpdateRequest.md)
 - [ProductConfiguratorService.PropertyListPropertiesRequest](docs/PropertyListPropertiesRequest.md)
 - [ProductConfiguratorService.PropertyListPropertiesResponse](docs/PropertyListPropertiesResponse.md)
 - [ProductConfiguratorService.PropertyUpdatePayloadGenericProperty](docs/PropertyUpdatePayloadGenericProperty.md)
 - [ProductConfiguratorService.PropertyUpdatePayloadPriceProperty](docs/PropertyUpdatePayloadPriceProperty.md)
 - [ProductConfiguratorService.PropertyUpdatePayloadWeightProperty](docs/PropertyUpdatePayloadWeightProperty.md)
 - [ProductConfiguratorService.ProtobufAny](docs/ProtobufAny.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### standardAuthorization


- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://iambackoffice.gogemini.io/iambackoffice.IamBackoffice/Login
- **Scopes**: N/A

