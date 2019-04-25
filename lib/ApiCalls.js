import axios from "axios";

//const baseURL = "http://192.168.1.9:5000";
const baseURL = "http://localhost:5000";

export const getCities = () => {
  try {
    axios
      .get(`${baseURL}/api/cities?name`)
      .then(res => {
        return res.data;
      })
  } catch (err) {
    console.log(err);
  }
}
export const getActivities = (city) => {
  try {
    axios
      .get(`${baseURL}/api/activities?city=${city}`)
      .then(res => {
        return res.data;
      })
  } catch (err) {
    console.log(err);
  }
}

export const getUser = (user) => {
  try {
    axios
      .get(`${baseURL}/api/users/getInfo?username=${user}`)
      .then(res => {
        return res.data;
      })
      .catch(err =>
        console.log(err)
      );
  } catch (error) {
    console.log(error);
  }
}

export const searchUsers = (user) => {
  try {
    axios
      .get(`${baseURL}/api/users/search?name=&username=${user}`)
      .then(res => {
        return res.data;
      })
      .catch(err =>
        console.log(err)
      );
  } catch (error) {
    console.log(error);
  }
}

