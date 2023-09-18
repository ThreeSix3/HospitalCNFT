import AsyncStorage from "@react-native-async-storage/async-storage";
export async function storeData(key, value){
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e.message);
    }
  };
  export async function getData (key){
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e.message);
    }
  };

  export async function deleteData (key){
    try{
        await AsyncStorage.removeItem(key);
    }catch (error) {
        console.error("Error:", error.message);
      }
  }