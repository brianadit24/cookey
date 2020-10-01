const axios = require('axios').default;

class DataSource {
  static searchMeal(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => {
        return response.data.meals;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default DataSource;
