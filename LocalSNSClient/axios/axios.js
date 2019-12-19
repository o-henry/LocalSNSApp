import axios from "axios";
import { Alert } from "react-native";

const getLocationData = async () => {
  try {
    await axios.get("http://localhost:4500/data/location").then(res => {
      console.log("Click res", res.data);
      res.data;
    });
  } catch (err) {
    Alert.alert("Can't get any Data");
  }
};

export default getLocationData;
