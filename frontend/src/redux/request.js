import axios from "axios";

export const Get_event_info = (number, size) =>
  new Promise((re, rej) => {
    if (number == 0) {
      number = 1;
    }
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


  export const Get_event_by_id = (id) =>
    new Promise((re, rej) => {
      const GET = async () => {
        await axios({
          method: "GET",
          url: `http://127.0.0.1:8000/api/events/${id}`,
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

export const POST_event_info = (data) =>
  new Promise((re, rej) => {
    const POST = async () => {
      await axios({
        method: "POST",
        url: `http://127.0.0.1:8000/api/events`,
        data: data,
      })
        .then((response) => {
          re(response);
        })
        .catch(function (error) {
          rej(error);
        });
    };
    POST();
  });

export const PUT_event_info = (data, id) =>
  new Promise((re, rej) => {
    const PUT = async () => {
      await axios({
        method: "PUT",
        url: `http://127.0.0.1:8000/api/events/${id}`,
        data: data,
      })
        .then((response) => {
          re(response);
        })
        .catch(function (error) {
          rej(error);
        });
    };
    PUT();
  });

export const DELETE_event_info = (id) =>
  new Promise((re, rej) => {
    const DELETE = async () => {
      await axios({
        method: "delete",
        url: `http://127.0.0.1:8000/api/events/${id}`,
      })
        .then((response) => {
          re(response);
        })
        .catch(function (error) {
          rej(error);
        });
    };
    DELETE();
  });
