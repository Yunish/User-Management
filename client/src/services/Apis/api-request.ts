import axios from "axios";
import { IApiDetails, IRequestData } from "./api-request.interface";

interface IApiRequest {
  apiDetails: IApiDetails;
  requestData: IRequestData;
}

const apiRequest = async ({ apiDetails, requestData }: IApiRequest) => {
  try {
    return await axios({
      method: apiDetails.method,
      url: import.meta.env.VITE_API_ENDPOINT,
      data: requestData,
    }).then(function (response) {
      console.log(response);
      return response;
    });
  } catch (err) {
    console.log(err);
  }
};

export default apiRequest;
