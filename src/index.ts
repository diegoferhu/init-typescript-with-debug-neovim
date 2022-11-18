import { MyClass } from "./MyClass";

export const handler = async (): Promise<any> => {
  const myInstance = new MyClass();
  myInstance;
  console.log(`My Class executed`);
  return "SUCCES!";
};
