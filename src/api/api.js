export const API_URL = "http://localhost:1234/items";

export const getList = () =>
  fetch(`${API_URL}/`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

export const createItem = (item) =>
  fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const UpdatedItem = (item, _id) =>
  fetch(`${API_URL}/${_id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const rmItem = (_id) => {
  fetch(`${API_URL}/${_id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json({ success: true }))
    .catch((err) => alert(err));
};
