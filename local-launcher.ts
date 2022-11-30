import { handler } from "./src/index";

const callAsyncMethod = async (): Promise<any> => {
  const untidyElements = [10, 8, 3, 7, 2, 5];
  const response = await handler(untidyElements);
  console.log("Response", response);
};
callAsyncMethod();
