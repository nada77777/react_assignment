import { arrayOf, exact, string, number } from "prop-types";

export const plansType = arrayOf(exact({ id: number, plan: string }));

export const profileDataType = exact({
  name: string,
  gender: string,
  address: string,
  age: number,
});

export const favoriteFoodType = string;
