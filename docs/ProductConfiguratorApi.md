# ProductConfiguratorService.ProductConfiguratorApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateOptions**](ProductConfiguratorApi.md#productConfiguratorBulkCreateOptions) | **POST** /v1/{tenantId}/step/{stepId}/option/create/bulk | 
[**productConfiguratorBulkCreateProperties**](ProductConfiguratorApi.md#productConfiguratorBulkCreateProperties) | **POST** /v1/{tenantId}/property/create/bulk | 
[**productConfiguratorBulkCreateSteps**](ProductConfiguratorApi.md#productConfiguratorBulkCreateSteps) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create/bulk | 
[**productConfiguratorBulkDeleteOptions**](ProductConfiguratorApi.md#productConfiguratorBulkDeleteOptions) | **POST** /v1/{tenantId}/option/delete/bulk | 
[**productConfiguratorBulkDeleteSteps**](ProductConfiguratorApi.md#productConfiguratorBulkDeleteSteps) | **POST** /v1/{tenantId}/step/delete/bulk | 
[**productConfiguratorBulkUpdateOptions**](ProductConfiguratorApi.md#productConfiguratorBulkUpdateOptions) | **PUT** /v1/{tenantId}/option/bulk | 
[**productConfiguratorBulkUpdateProperties**](ProductConfiguratorApi.md#productConfiguratorBulkUpdateProperties) | **PUT** /v1/{tenantId}/properties/bulk | 
[**productConfiguratorCopyConfigurator**](ProductConfiguratorApi.md#productConfiguratorCopyConfigurator) | **POST** /v1/{tenantId}/product/{sourceConfiguratorId}/copy | 
[**productConfiguratorCopyOption**](ProductConfiguratorApi.md#productConfiguratorCopyOption) | **POST** /v1/{tenantId}/option/{sourceOptionId}/copy | 
[**productConfiguratorCopyStep**](ProductConfiguratorApi.md#productConfiguratorCopyStep) | **POST** /v1/{tenantId}/step/{sourceStepId}/copy | 
[**productConfiguratorCreateDependency**](ProductConfiguratorApi.md#productConfiguratorCreateDependency) | **POST** /v1/{tenantId}/step/{stepId}/dependency/create | 
[**productConfiguratorCreateMatrix**](ProductConfiguratorApi.md#productConfiguratorCreateMatrix) | **POST** /v1/{tenantId}/matrix/create | 
[**productConfiguratorCreateOption**](ProductConfiguratorApi.md#productConfiguratorCreateOption) | **POST** /v1/{tenantId}/step/{stepId}/option/create | 
[**productConfiguratorCreateProperty**](ProductConfiguratorApi.md#productConfiguratorCreateProperty) | **POST** /v1/{tenantId}/property/create | 
[**productConfiguratorCreateStep**](ProductConfiguratorApi.md#productConfiguratorCreateStep) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create | 
[**productConfiguratorDeleteConfigurator**](ProductConfiguratorApi.md#productConfiguratorDeleteConfigurator) | **DELETE** /v1/{tenantId}/configurator/{configuratorId} | 
[**productConfiguratorDeleteDependency**](ProductConfiguratorApi.md#productConfiguratorDeleteDependency) | **DELETE** /v1/{tenantId}/dependency/{dependencyId} | 
[**productConfiguratorDeleteMatrix**](ProductConfiguratorApi.md#productConfiguratorDeleteMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId} | 
[**productConfiguratorDeleteOption**](ProductConfiguratorApi.md#productConfiguratorDeleteOption) | **DELETE** /v1/{tenantId}/option/{optionId} | 
[**productConfiguratorDeleteStep**](ProductConfiguratorApi.md#productConfiguratorDeleteStep) | **DELETE** /v1/{tenantId}/step/{stepId} | 
[**productConfiguratorGetAvailableConfiguration**](ProductConfiguratorApi.md#productConfiguratorGetAvailableConfiguration) | **GET** /v1/{tenantId}/product/{productId}/configuration | 
[**productConfiguratorGetAvailableConfiguration2**](ProductConfiguratorApi.md#productConfiguratorGetAvailableConfiguration2) | **POST** /v1/{tenantId}/product/{productId}/configuration | 
[**productConfiguratorGetConfigurationFromSelections**](ProductConfiguratorApi.md#productConfiguratorGetConfigurationFromSelections) | **POST** /v1/{tenantId}/product/{productId}/configuration-from-selections | 
[**productConfiguratorGetMatrix**](ProductConfiguratorApi.md#productConfiguratorGetMatrix) | **GET** /v1/{tenantId}/matrix/{matrixId} | 
[**productConfiguratorListDependencies**](ProductConfiguratorApi.md#productConfiguratorListDependencies) | **POST** /v1/{tenantId}/page-size/{pageSize}/dependencies | 
[**productConfiguratorListMatrices**](ProductConfiguratorApi.md#productConfiguratorListMatrices) | **POST** /v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/matrices | 
[**productConfiguratorListOptions**](ProductConfiguratorApi.md#productConfiguratorListOptions) | **POST** /v1/{tenantId}/step/{stepId}/page-size/{pageSize}/options | 
[**productConfiguratorListProperties**](ProductConfiguratorApi.md#productConfiguratorListProperties) | **POST** /v1/{tenantId}/matrix/{matrixId}/page-size/{pageSize}/properties | 
[**productConfiguratorRemovePricelistFromMatrix**](ProductConfiguratorApi.md#productConfiguratorRemovePricelistFromMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId}/pricelist/{pricelistGrn} | 
[**productConfiguratorUpdateConfigurator**](ProductConfiguratorApi.md#productConfiguratorUpdateConfigurator) | **PUT** /v1/{tenantId}/configurator/{configuratorId} | 
[**productConfiguratorUpdateDependency**](ProductConfiguratorApi.md#productConfiguratorUpdateDependency) | **PUT** /v1/{tenantId}/dependency/{dependencyId} | 
[**productConfiguratorUpdateMatrix**](ProductConfiguratorApi.md#productConfiguratorUpdateMatrix) | **PUT** /v1/{tenantId}/matrix/{matrixId} | 
[**productConfiguratorUpdateOption**](ProductConfiguratorApi.md#productConfiguratorUpdateOption) | **PUT** /v1/{tenantId}/option/{optionId} | 
[**productConfiguratorUpdateProperty**](ProductConfiguratorApi.md#productConfiguratorUpdateProperty) | **PUT** /v1/{tenantId}/property/{propertyId} | 
[**productConfiguratorUpdateStep**](ProductConfiguratorApi.md#productConfiguratorUpdateStep) | **PUT** /v1/{tenantId}/step/{stepId} | 



## productConfiguratorBulkCreateOptions

> ProductconfiguratoroptionBulkCreateResponse productConfiguratorBulkCreateOptions(tenantId, stepId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionBulkCreateRequest(); // ProductconfiguratoroptionBulkCreateRequest | 
apiInstance.productConfiguratorBulkCreateOptions(tenantId, stepId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionBulkCreateRequest**](ProductconfiguratoroptionBulkCreateRequest.md)|  | 

### Return type

[**ProductconfiguratoroptionBulkCreateResponse**](ProductconfiguratoroptionBulkCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkCreateProperties

> ProductconfiguratorpropertyBulkCreateResponse productConfiguratorBulkCreateProperties(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorpropertyBulkCreateRequest(); // ProductconfiguratorpropertyBulkCreateRequest | 
apiInstance.productConfiguratorBulkCreateProperties(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratorpropertyBulkCreateRequest**](ProductconfiguratorpropertyBulkCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorpropertyBulkCreateResponse**](ProductconfiguratorpropertyBulkCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkCreateSteps

> ProductconfiguratorstepBulkCreateResponse productConfiguratorBulkCreateSteps(tenantId, configuratorId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequest(); // ProductconfiguratorstepBulkCreateRequest | 
apiInstance.productConfiguratorBulkCreateSteps(tenantId, configuratorId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 
 **body** | [**ProductconfiguratorstepBulkCreateRequest**](ProductconfiguratorstepBulkCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepBulkCreateResponse**](ProductconfiguratorstepBulkCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkDeleteOptions

> Object productConfiguratorBulkDeleteOptions(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionBulkDeleteRequest(); // ProductconfiguratoroptionBulkDeleteRequest | 
apiInstance.productConfiguratorBulkDeleteOptions(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionBulkDeleteRequest**](ProductconfiguratoroptionBulkDeleteRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkDeleteSteps

> Object productConfiguratorBulkDeleteSteps(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorstepBulkDeleteRequest(); // ProductconfiguratorstepBulkDeleteRequest | 
apiInstance.productConfiguratorBulkDeleteSteps(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratorstepBulkDeleteRequest**](ProductconfiguratorstepBulkDeleteRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkUpdateOptions

> ProductconfiguratoroptionBulkUpdateResponse productConfiguratorBulkUpdateOptions(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionBulkUpdateRequest(); // ProductconfiguratoroptionBulkUpdateRequest | 
apiInstance.productConfiguratorBulkUpdateOptions(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionBulkUpdateRequest**](ProductconfiguratoroptionBulkUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratoroptionBulkUpdateResponse**](ProductconfiguratoroptionBulkUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkUpdateProperties

> ProductconfiguratorpropertyBulkUpdateResponse productConfiguratorBulkUpdateProperties(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorpropertyBulkUpdateRequest(); // ProductconfiguratorpropertyBulkUpdateRequest | 
apiInstance.productConfiguratorBulkUpdateProperties(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratorpropertyBulkUpdateRequest**](ProductconfiguratorpropertyBulkUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorpropertyBulkUpdateResponse**](ProductconfiguratorpropertyBulkUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCopyConfigurator

> ProductconfiguratorconfiguratorEntity productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let sourceConfiguratorId = "sourceConfiguratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorconfiguratorCopyRequest(); // ProductconfiguratorconfiguratorCopyRequest | 
apiInstance.productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **sourceConfiguratorId** | **String**|  | 
 **body** | [**ProductconfiguratorconfiguratorCopyRequest**](ProductconfiguratorconfiguratorCopyRequest.md)|  | 

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCopyOption

> ProductconfiguratoroptionEntity productConfiguratorCopyOption(tenantId, sourceOptionId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let sourceOptionId = "sourceOptionId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionCopyRequest(); // ProductconfiguratoroptionCopyRequest | 
apiInstance.productConfiguratorCopyOption(tenantId, sourceOptionId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **sourceOptionId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionCopyRequest**](ProductconfiguratoroptionCopyRequest.md)|  | 

### Return type

[**ProductconfiguratoroptionEntity**](ProductconfiguratoroptionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCopyStep

> ProductconfiguratorstepEntity productConfiguratorCopyStep(tenantId, sourceStepId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let sourceStepId = "sourceStepId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorstepCopyRequest(); // ProductconfiguratorstepCopyRequest | 
apiInstance.productConfiguratorCopyStep(tenantId, sourceStepId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **sourceStepId** | **String**|  | 
 **body** | [**ProductconfiguratorstepCopyRequest**](ProductconfiguratorstepCopyRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateDependency

> ProductconfiguratordependencyEntity productConfiguratorCreateDependency(tenantId, stepId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratordependencyCreateRequest(); // ProductconfiguratordependencyCreateRequest | 
apiInstance.productConfiguratorCreateDependency(tenantId, stepId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 
 **body** | [**ProductconfiguratordependencyCreateRequest**](ProductconfiguratordependencyCreateRequest.md)|  | 

### Return type

[**ProductconfiguratordependencyEntity**](ProductconfiguratordependencyEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateMatrix

> ProductconfiguratormatrixEntity productConfiguratorCreateMatrix(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratormatrixCreateRequest(); // ProductconfiguratormatrixCreateRequest | 
apiInstance.productConfiguratorCreateMatrix(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratormatrixCreateRequest**](ProductconfiguratormatrixCreateRequest.md)|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateOption

> ProductconfiguratoroptionEntity productConfiguratorCreateOption(tenantId, stepId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionCreateRequest(); // ProductconfiguratoroptionCreateRequest | 
apiInstance.productConfiguratorCreateOption(tenantId, stepId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionCreateRequest**](ProductconfiguratoroptionCreateRequest.md)|  | 

### Return type

[**ProductconfiguratoroptionEntity**](ProductconfiguratoroptionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateProperty

> ProductconfiguratorpropertyEntity productConfiguratorCreateProperty(tenantId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorpropertyCreateRequest(); // ProductconfiguratorpropertyCreateRequest | 
apiInstance.productConfiguratorCreateProperty(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratorpropertyCreateRequest**](ProductconfiguratorpropertyCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorpropertyEntity**](ProductconfiguratorpropertyEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateStep

> ProductconfiguratorstepEntity productConfiguratorCreateStep(tenantId, configuratorId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorstepCreateRequest(); // ProductconfiguratorstepCreateRequest | 
apiInstance.productConfiguratorCreateStep(tenantId, configuratorId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 
 **body** | [**ProductconfiguratorstepCreateRequest**](ProductconfiguratorstepCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteConfigurator

> Object productConfiguratorDeleteConfigurator(tenantId, configuratorId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
apiInstance.productConfiguratorDeleteConfigurator(tenantId, configuratorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorDeleteDependency

> Object productConfiguratorDeleteDependency(tenantId, dependencyId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let dependencyId = "dependencyId_example"; // String | 
apiInstance.productConfiguratorDeleteDependency(tenantId, dependencyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **dependencyId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorDeleteMatrix

> Object productConfiguratorDeleteMatrix(tenantId, matrixId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
apiInstance.productConfiguratorDeleteMatrix(tenantId, matrixId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorDeleteOption

> Object productConfiguratorDeleteOption(tenantId, optionId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let optionId = "optionId_example"; // String | 
apiInstance.productConfiguratorDeleteOption(tenantId, optionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **optionId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorDeleteStep

> Object productConfiguratorDeleteStep(tenantId, stepId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
apiInstance.productConfiguratorDeleteStep(tenantId, stepId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetAvailableConfiguration

> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration(tenantId, productId, opts)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let opts = {
  'configuratorId': "configuratorId_example" // String | 
};
apiInstance.productConfiguratorGetAvailableConfiguration(tenantId, productId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **productId** | **String**|  | 
 **configuratorId** | **String**|  | [optional] 

### Return type

[**ConfigurationGetAvailableConfigurationResponse**](ConfigurationGetAvailableConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetAvailableConfiguration2

> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration2(tenantId, productId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let body = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest(); // ConfigurationGetAvailableConfigurationRequest | 
apiInstance.productConfiguratorGetAvailableConfiguration2(tenantId, productId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **productId** | **String**|  | 
 **body** | [**ConfigurationGetAvailableConfigurationRequest**](ConfigurationGetAvailableConfigurationRequest.md)|  | 

### Return type

[**ConfigurationGetAvailableConfigurationResponse**](ConfigurationGetAvailableConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorGetConfigurationFromSelections

> ConfigurationGetConfigurationFromSelectionsResponse productConfiguratorGetConfigurationFromSelections(tenantId, productId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let body = new ProductConfiguratorService.ConfigurationGetConfigurationFromSelectionsRequest(); // ConfigurationGetConfigurationFromSelectionsRequest | 
apiInstance.productConfiguratorGetConfigurationFromSelections(tenantId, productId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **productId** | **String**|  | 
 **body** | [**ConfigurationGetConfigurationFromSelectionsRequest**](ConfigurationGetConfigurationFromSelectionsRequest.md)|  | 

### Return type

[**ConfigurationGetConfigurationFromSelectionsResponse**](ConfigurationGetConfigurationFromSelectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorGetMatrix

> ProductconfiguratormatrixEntity productConfiguratorGetMatrix(tenantId, matrixId)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
apiInstance.productConfiguratorGetMatrix(tenantId, matrixId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorListDependencies

> DependencyListDependenciesResponse productConfiguratorListDependencies(tenantId, pageSize, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let pageSize = 789; // Number | 
let body = new ProductConfiguratorService.DependencyListDependenciesRequest(); // DependencyListDependenciesRequest | 
apiInstance.productConfiguratorListDependencies(tenantId, pageSize, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **pageSize** | **Number**|  | 
 **body** | [**DependencyListDependenciesRequest**](DependencyListDependenciesRequest.md)|  | 

### Return type

[**DependencyListDependenciesResponse**](DependencyListDependenciesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorListMatrices

> MatrixListMatricesResponse productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let pageSize = "pageSize_example"; // String | 
let body = new ProductConfiguratorService.MatrixListMatricesRequest(); // MatrixListMatricesRequest | 
apiInstance.productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 
 **pageSize** | **String**|  | 
 **body** | [**MatrixListMatricesRequest**](MatrixListMatricesRequest.md)|  | 

### Return type

[**MatrixListMatricesResponse**](MatrixListMatricesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorListOptions

> OptionListOptionsResponse productConfiguratorListOptions(tenantId, stepId, pageSize, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let pageSize = 789; // Number | 
let body = new ProductConfiguratorService.OptionListOptionsRequest(); // OptionListOptionsRequest | 
apiInstance.productConfiguratorListOptions(tenantId, stepId, pageSize, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 
 **pageSize** | **Number**|  | 
 **body** | [**OptionListOptionsRequest**](OptionListOptionsRequest.md)|  | 

### Return type

[**OptionListOptionsResponse**](OptionListOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorListProperties

> PropertyListPropertiesResponse productConfiguratorListProperties(tenantId, matrixId, pageSize, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
let pageSize = "pageSize_example"; // String | 
let body = new ProductConfiguratorService.PropertyListPropertiesRequest(); // PropertyListPropertiesRequest | 
apiInstance.productConfiguratorListProperties(tenantId, matrixId, pageSize, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 
 **pageSize** | **String**|  | 
 **body** | [**PropertyListPropertiesRequest**](PropertyListPropertiesRequest.md)|  | 

### Return type

[**PropertyListPropertiesResponse**](PropertyListPropertiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorRemovePricelistFromMatrix

> ProductconfiguratormatrixEntity productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
let pricelistGrn = "pricelistGrn_example"; // String | 
apiInstance.productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 
 **pricelistGrn** | **String**|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorUpdateConfigurator

> ProductconfiguratorconfiguratorEntity productConfiguratorUpdateConfigurator(tenantId, configuratorId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorconfiguratorUpdateRequest(); // ProductconfiguratorconfiguratorUpdateRequest | 
apiInstance.productConfiguratorUpdateConfigurator(tenantId, configuratorId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 
 **body** | [**ProductconfiguratorconfiguratorUpdateRequest**](ProductconfiguratorconfiguratorUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateDependency

> ProductconfiguratordependencyEntity productConfiguratorUpdateDependency(tenantId, dependencyId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let dependencyId = "dependencyId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratordependencyUpdateRequest(); // ProductconfiguratordependencyUpdateRequest | 
apiInstance.productConfiguratorUpdateDependency(tenantId, dependencyId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **dependencyId** | **String**|  | 
 **body** | [**ProductconfiguratordependencyUpdateRequest**](ProductconfiguratordependencyUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratordependencyEntity**](ProductconfiguratordependencyEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateMatrix

> ProductconfiguratormatrixEntity productConfiguratorUpdateMatrix(tenantId, matrixId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratormatrixUpdateRequest(); // ProductconfiguratormatrixUpdateRequest | 
apiInstance.productConfiguratorUpdateMatrix(tenantId, matrixId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 
 **body** | [**ProductconfiguratormatrixUpdateRequest**](ProductconfiguratormatrixUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateOption

> ProductconfiguratoroptionEntity productConfiguratorUpdateOption(tenantId, optionId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let optionId = "optionId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratoroptionUpdateRequest(); // ProductconfiguratoroptionUpdateRequest | 
apiInstance.productConfiguratorUpdateOption(tenantId, optionId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **optionId** | **String**|  | 
 **body** | [**ProductconfiguratoroptionUpdateRequest**](ProductconfiguratoroptionUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratoroptionEntity**](ProductconfiguratoroptionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateProperty

> ProductconfiguratorpropertyEntity productConfiguratorUpdateProperty(tenantId, propertyId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let propertyId = "propertyId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorpropertyUpdateRequest(); // ProductconfiguratorpropertyUpdateRequest | 
apiInstance.productConfiguratorUpdateProperty(tenantId, propertyId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **propertyId** | **String**|  | 
 **body** | [**ProductconfiguratorpropertyUpdateRequest**](ProductconfiguratorpropertyUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorpropertyEntity**](ProductconfiguratorpropertyEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateStep

> ProductconfiguratorstepEntity productConfiguratorUpdateStep(tenantId, stepId, body)



### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';

let apiInstance = new ProductConfiguratorService.ProductConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorstepUpdateRequest(); // ProductconfiguratorstepUpdateRequest | 
apiInstance.productConfiguratorUpdateStep(tenantId, stepId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **stepId** | **String**|  | 
 **body** | [**ProductconfiguratorstepUpdateRequest**](ProductconfiguratorstepUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

