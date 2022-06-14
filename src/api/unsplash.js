import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3f05_TkRgxWRVvhWa21ZfvmtjqbP6wigtIPdnIOrjJs",
  },
});
