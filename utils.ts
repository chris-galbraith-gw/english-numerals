/*
    Improvements that could be made:
        - Add a heuristic that can guess at the closeness of a word. This could catch
          small mistakes like 'thousan' or 'hunred' and still return a valid number.
*/

export const stringTrim = (str: string): string[] => {

    const replacedWords = str.replace(/-/g, " ").replace(/ and /gi, " ").replace(/,/gi, "");

    // split the string into words on spaces creating new array
    const splitWords = replacedWords.split(/[" "]/g)

    return splitWords;
};

// Iterating over the keys to check if the element exists there
export const checkElement = (element: string) => {
    let keys = dictionary.keys()
    for (let key of keys) {
        if (element === key) {
            return element
        }
    }

    return false
}

/*
  Use Array.every() to check each element with a callbackFn, if any element is not
  in the dictionary then we return false and the validation fails. Use every() instead of a
  forEach because we can exit early and not waste iterating after a falsy hit.
*/
export const validateInput = (str: string[]): boolean => {

    return str.every(checkElement)
};

export const convNums = (str: string[]): number => {
    let total: number = 0
    let cur: number = 0

    // map here possibly?
    str.forEach(element => {
        if (dictionary.has(element)) {
            cur += dictionary.get(element) as number
        }

        if (element === "hundred") {
            cur *= 100;
        } 
        
        if (element === "thousand") {
            cur *= 1000
            total += cur
            cur = 0
        } 

        if (element === 'million') {
            cur *= 1000000
            total += cur
            cur = 0
        }
    });

    total += cur
    cur = 0

    if (str[0] === 'negative' || str[0] === 'minus') {
        return -total
    }

    return total
};

const dictionary = new Map<string, number> (
[
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
    ['ten', 10],
    ['eleven', 11],
    ['twelve', 12],
    ['thirteen', 13],
    ['fourteen', 14],
    ['fifteen', 15],
    ['sixteen', 16],
    ['seventeen', 17],
    ['eighteen', 18],
    ['nineteen', 19],
    ['twenty', 20],
    ['thirty', 30],
    ['forty', 40],
    ['fifty', 50],
    ['sixty', 60],
    ['seventy', 70],
    ['eighty', 80],
    ['ninety', 90],
    ['hundred', 0],
    ['thousand', 0],
    ['million', 0],
    ['negative', 0],
    ['minus', 0]
])
