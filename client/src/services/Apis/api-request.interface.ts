export enum API_METHODS {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
  PATCH = "PATCH",
}

export enum RequestBodyType {
  /* If request id in application/x-www-form-urlencoded as string */
  QUERY_STRING = "QUERY_STRING",
  /* If request is in formdata */
  FORM_DATA = "FORM_DATA",
  /* If request is open */
  NO_AUTH = "NO_AUTH",
  AUTH = "AUTH",
  FILE = "FILE",
  BASIC_AUTH = "BASIC_AUTH",
}

export interface IApiDetailsJson {
  [key: string]: IApiDetails;
}

export interface IApiDetails {
  controllerName: string;
  queryKeyName: string;
  method: API_METHODS;
  requestBodyType?: RequestBodyType;
  baseUrl?: string;
}

export interface IRequestData {
  [key: string]: string | number | Array<object | string> | object;
}
