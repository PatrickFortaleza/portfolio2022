import axios from "axios";

export const sendEmail = async ({ email, name, body }) => {
  try {
    const response = await axios.post(
      `https://email-server-pf.herokuapp.com/api/email`,
      { email, name, body }
    );

    return response.data;
  } catch (error) {
    return {
      error: error.response,
    };
  }
};
