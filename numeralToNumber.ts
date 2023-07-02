import { convNums, stringTrim, validateInput } from "./utils";

export const numeralToNumber = (str: string): number => {

  // set entire string to lowercase
  const newString = str.toLowerCase()

  // trim away [ 'and' ',' '-' ] characters
  const trimmedString = stringTrim(newString)

  // check each element in the array against the dictionary
  if (!validateInput(trimmedString)) {
    console.log("Output: Input was not validated, please ensure all of your numbers are correct")
    return NaN
  }

  const total = convNums(trimmedString)
  console.log("Output: ", total)

  return total;
};
