const axios = require("axios");
const config = require("../config");

const API_URL = "https://chromeuxreport.googleapis.com/v1/records:queryRecord";
const FORM_FACTOR = "DESKTOP"; //default dimension, can be phone, tablet

exports.fetchCruxData = async (urls) => {
  try {
    const requests = urls.map((url) =>
      axios.post(`${API_URL}?key=${config.googleApiKey}`, {
        url,
        formFactor: FORM_FACTOR,
      })
    );

    const responses = await Promise.all(requests);

    return responses.map((response, index) => {
      if (!response.data.record) {
        return {
          url: urls[index],
          error: "No CrUX data available for this URL",
        };
      }

      return {
        url: urls[index],
        ...response.data.record.metrics,
      };
    });
  } catch (error) {
    console.error("Error fetching CrUX data:", error);
    throw new Error("Failed to fetch CrUX data from Google API");
  }
};
