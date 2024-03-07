const baseURL = "http://localhost:3020";
const url = `${baseURL}/categories/makanan`;

const translateStatusToErrorMessage = (status) => {
  switch (status) {
    case 401:
      return "Please Login Again";
    case 403:
      return "You don't have permission to view the project";
    default:
      return "There was an error retrieving the projects please try again";
  }
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error : ${JSON.stringify(httpErrorInfo)}`);

    let errorMsg = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMsg);
  }
};

const parseJSON = (response) => {
  return response.json();
};

const searchByName = async (name) => {
  try {
    const queryLowerCase = name.toLowerCase();

    // Make requests to all URLs concurrently
    const responses = await Promise.all(
      Object.values(url).map(() =>
        fetch(`${url}?name=${queryLowerCase}`).then(checkStatus).then(parseJSON)
      )
    );

    // Combine results from all APIs
    let combinedResults = responses.flatMap((data, index) =>
      data.map((item) => ({ ...item, source: Object.keys(url)[index] }))
    );

    return combinedResults;
  } catch (error) {
    console.log(`Log client error: ${error}`);
    throw new Error(
      "There was an error searching for the data. Please try again"
    );
  }
};

const globalAPI = {
  searchByName,
};

export { globalAPI };
