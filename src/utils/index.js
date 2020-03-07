export const findAreaApi = async data => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  return responseData;
};
