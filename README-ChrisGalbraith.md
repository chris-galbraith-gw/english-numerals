# Notes on the task

## Installation

- Run `npm i` and then `npm test` in order to run the jest test suite that works through a few examples.

- You can edit the first test input to check whichever number you like from -999 million to 999 million

## Finding a solution

- First approach to the problem was to spend time-gated 30 minutes browsing other solutions online.
  After reading for a while, I came to the understanding that when it comes right down to it, for these
  specifications you dont need any NLP. You only really need to build an accumulator.

- Approach:
    We create a map of strings to numbers e.g. { "fifty", 50 }. This map acts as a list of approved words that will pass
    a validation check to ensure the program can handle the string that the user has presented. We also include multipliers like
    "hundred" and "million" as well as signs like "negative" or "minus" in order to make sure those are not registered as invalid.

    We remove unnecessary characters like "and" "-" or "," and set the string to lowercase. Once this is done we can begin to
    process the numbers from left to right. First we map them to the values they have in the dictionary map and begin accumulating. When we encounter a
    string that is a multiplier, we multiply the current accumulation by that amount and then reset the accumulator back to 0.
    This approach handles situations like "five hundred and sixteen thousand and one" where you might not have a number in each order
    of magnitude.

    After we have reached the end of the string we sum up our accumulation and we check if there was a negative or minus string at the beginning, if there was we return -total.

