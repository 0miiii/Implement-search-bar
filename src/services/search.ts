import axios from "axios";

export const searchAPI = async (query: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/sick/sick?q=${query}`,
    );
    return data;
  } catch (err) {
    throw new Error("Error");
  }
};
