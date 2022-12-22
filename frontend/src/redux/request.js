import axios from "axios";

export const Get_event_info = (number, size) =>
  new Promise((re, rej) => {
    const GET = async () => {
      await axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/events?page[number]=${number}&page[size]=${size}`,
      })
        .then((response) => {
          re(response);
        })
        .catch(function (error) {
          rej(error);
        });
    };
    GET();
  });
