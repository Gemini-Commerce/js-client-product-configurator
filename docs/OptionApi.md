# ProductConfiguratorService.OptionApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateOptions**](OptionApi.md#productConfiguratorBulkCreateOptions) | **POST** /v1/{tenantId}/step/{stepId}/option/create/bulk | Bulk Create Options
[**productConfiguratorBulkDeleteOptions**](OptionApi.md#productConfiguratorBulkDeleteOptions) | **POST** /v1/{tenantId}/option/delete/bulk | Bulk Delete Options
[**productConfiguratorBulkUpdateOptions**](OptionApi.md#productConfiguratorBulkUpdateOptions) | **PUT** /v1/{tenantId}/option/bulk | Bulk Update Options
[**productConfiguratorCopyOption**](OptionApi.md#productConfiguratorCopyOption) | **POST** /v1/{tenantId}/option/{sourceOptionId}/copy | Copy Option
[**productConfiguratorCreateOption**](OptionApi.md#productConfiguratorCreateOption) | **POST** /v1/{tenantId}/step/{stepId}/option/create | Create Option
[**productConfiguratorDeleteOption**](OptionApi.md#productConfiguratorDeleteOption) | **DELETE** /v1/{tenantId}/option/{optionId} | Delete Option
[**productConfiguratorListOptions**](OptionApi.md#productConfiguratorListOptions) | **POST** /v1/{tenantId}/step/{stepId}/page-size/{pageSize}/options | List Options
[**productConfiguratorUpdateOption**](OptionApi.md#productConfiguratorUpdateOption) | **PUT** /v1/{tenantId}/option/{optionId} | Update Option



## productConfiguratorBulkCreateOptions

> ProductconfiguratoroptionBulkCreateResponse productConfiguratorBulkCreateOptions(tenantId, stepId, body)

Bulk Create Options

Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkDeleteOptions

> Object productConfiguratorBulkDeleteOptions(tenantId, body)

Bulk Delete Options

Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkUpdateOptions

> ProductconfiguratoroptionBulkUpdateResponse productConfiguratorBulkUpdateOptions(tenantId, body)

Bulk Update Options

Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCopyOption

> ProductconfiguratoroptionEntity productConfiguratorCopyOption(tenantId, sourceOptionId, body)

Copy Option

Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateOption

> ProductconfiguratoroptionEntity productConfiguratorCreateOption(tenantId, stepId, body)

Create Option

Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteOption

> Object productConfiguratorDeleteOption(tenantId, optionId)

Delete Option

Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorListOptions

> OptionListOptionsResponse productConfiguratorListOptions(tenantId, stepId, pageSize, body)

List Options

Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateOption

> ProductconfiguratoroptionEntity productConfiguratorUpdateOption(tenantId, optionId, body)

Update Option

Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.OptionApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

