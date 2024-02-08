import { create } from 'apisauce'
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = create({
  baseURL: "http://192.168.0.22:9999/",
  timeout: 30000
})

api.addAsyncRequestTransform((response) => async () => {
  const token = await AsyncStorage.getItem("@TOKEN");
  if (token)
    response.headers["Authorization"] = `Bearer ${token}`;

});

export default api