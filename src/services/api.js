import { create } from 'apisauce'
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = create({
  baseURL: "http://10.0.20.236:3000/",
  timeout: 30000
})

api.addAsyncRequestTransform((response) => async () => {
  const token = await AsyncStorage.getItem("@TOKEN");
  if (token)
    response.headers["Authorization"] = `Bearer ${token}`;

});

export default api