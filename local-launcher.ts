import { handler } from "./src/index";

const callAsyncMethod = async (): Promise<any> => {
  const response = await handler();
  console.log("Response", response);
};
callAsyncMethod();
