# ProductConfiguratorService.PropertyApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateProperties**](PropertyApi.md#productConfiguratorBulkCreateProperties) | **POST** /v1/{tenantId}/property/create/bulk | Bulk Create Properties
[**productConfiguratorBulkUpdateProperties**](PropertyApi.md#productConfiguratorBulkUpdateProperties) | **PUT** /v1/{tenantId}/properties/bulk | Bulk Update Properties
[**productConfiguratorCreateProperty**](PropertyApi.md#productConfiguratorCreateProperty) | **POST** /v1/{tenantId}/property/create | Create Property
[**productConfiguratorListProperties**](PropertyApi.md#productConfiguratorListProperties) | **POST** /v1/{tenantId}/matrix/{matrixId}/page-size/{pageSize}/properties | List Properties
[**productConfiguratorUpdateProperty**](PropertyApi.md#productConfiguratorUpdateProperty) | **PUT** /v1/{tenantId}/property/{propertyId} | Update Property



## productConfiguratorBulkCreateProperties

> ProductconfiguratorpropertyBulkCreateResponse productConfiguratorBulkCreateProperties(tenantId, body)

Bulk Create Properties

Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.PropertyApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkUpdateProperties

> ProductconfiguratorpropertyBulkUpdateResponse productConfiguratorBulkUpdateProperties(tenantId, body)

Bulk Update Properties

Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.PropertyApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateProperty

> ProductconfiguratorpropertyEntity productConfiguratorCreateProperty(tenantId, body)

Create Property

Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.PropertyApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorListProperties

> PropertyListPropertiesResponse productConfiguratorListProperties(tenantId, matrixId, pageSize, body)

List Properties

Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.PropertyApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateProperty

> ProductconfiguratorpropertyEntity productConfiguratorUpdateProperty(tenantId, propertyId, body)

Update Property

Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.PropertyApi();
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

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

