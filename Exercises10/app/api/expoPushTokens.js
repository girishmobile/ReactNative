import apiClient from "./client";

//body of object we passed here like {token:pushToken}
//our apiClient modual automatic includes authenetication token in request header

const register = (pushToken) =>
    apiClient.post('/expoPushTokens', { token: pushToken });
export default {
    register
}