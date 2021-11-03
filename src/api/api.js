import axios from "axios";

const instance = axios.create({
  baseURL: "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com",
});

const sortAndStripData = (data) => {
  var steps = [];

  data.sort((a, b) => parseInt(a.stepNumber) - parseInt(b.stepNumber));
  data.forEach((element) => {
    element.versionContent.sort((a, b) => {
      return Date(b.effectiveDate) - Date(a.effectiveDate);
    });

    let step = {
      stepNumber: element.stepNumber,
      title: element.versionContent[0].title,
      description: element.versionContent[0].body,
    };

    steps.push(step);
  });

  return steps;
};

const methods = {
  getData: () =>
    instance({
      method: "GET",
      url: "/default/FrontEndCodeChallenge",

      transformResponse: [
        function (rawData) {
          var data = JSON.parse(rawData);
          var sortedData = sortAndStripData(data);
          return sortedData;
        },
      ],
    }),
};

export default methods;
