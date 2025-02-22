# JavaScript: Handling Non-Numeric Input in Functions

This repository demonstrates a common bug in JavaScript: the failure to handle non-numeric input in functions.  The `bug.js` file shows the original code with the bug, while `bugSolution.js` provides a corrected version.

## Bug Description
The original code doesn't validate the input type before performing arithmetic operations. Passing non-numeric values leads to unexpected behavior or runtime errors. The corrected code adds input validation to prevent these issues.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it. Note the unexpected result when providing a non-numeric input to the `bar` function.
3. Open `bugSolution.js` and run it. Observe the improved error handling with NaN for non-numeric input.

## Solution
The solution involves adding explicit checks for the input type (`typeof`) and returning `NaN` or throwing an error (depending on the desired behavior) when non-numeric input is detected.