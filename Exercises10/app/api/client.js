import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";
//http://10.0.10.151:19002/api'
const apiClient = create({
    baseURL: settings.apiUrl,
});
const get = apiClient.get;
apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});
apiClient.get = async (url, params, axiosConfig) => {
    //Before
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }
    //When server is offline or No internet we get data from cache memory and send to it
    const data = await cache.get(url);
    return data ? { ok: true } : response; //(while data not it response with content error )
}
export default apiClient;
// apiClient.get('/listings').then(response => {
//     if (!response.ok) {
//         response.problem
//     }
// })