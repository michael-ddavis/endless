// import React from "react";
// import axios from "axios";
// import { render, findElement, cleanup } from "@testing-library/react";
// import { BASE_URL, getData } from "./api.js";

// afterEach(cleanup);
// jest.mock("axios");

// describe("fetchData", () => {
//   describe("when API call for HowItWorks is successful", () => {
//     it("should return list of steps", async () => {
//       const steps = [
//         {
//           stepNumber: 1,
//           title: "title",
//           description: "body",
//         },
//         {
//           stepNumber: 2,
//           title: "title2",
//           description: "body2",
//         },
//       ];
//       axios.get.mockResolvedValueOnce(steps);

//       const result = await getData();

//       expect(axios.get).toHaveBeenCalledWith(BASE_URL);
//       expect(result).toEqual(steps);
//     });
//   });
// });
