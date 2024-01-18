import { API_METHODS, IApiDetailsJson } from "./api-request.interface";

const apiDetails: IApiDetailsJson = {
  login: {
    controllerName: "",
    queryKeyName: "",
    method: API_METHODS.POST,
  },
  register: {
    controllerName: "",
    queryKeyName: "",
    method: API_METHODS.POST,
  },
};

export default apiDetails;
