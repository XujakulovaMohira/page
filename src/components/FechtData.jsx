

function FetchData(page = 1) {
  return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((response) => response.json())
    // .then((result) => result.data)
    .catch((err) => {
      console.log(err);
    });
}

export default FetchData;
