import axios from "axios";

const getLocationData = async () => {
  try {
    await axios.get("http://localhost:4500/data/location").then(res => {
      console.log("res", res.data);
      this.setState({ location: res.data, isLoading: false });
    });
  } catch (err) {
    Alert.alert("Can't get any Data");
  }
};

export default getLocationData;
