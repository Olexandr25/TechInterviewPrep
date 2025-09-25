// Truthiness in TypeScript/JavaScript

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    // If numUsersOnline is truthy (not 0, not NaN, not undefined, not null)
    return `There are ${numUsersOnline} online now!`;
  }
  // If numUsersOnline is falsy (0, NaN, undefined, null)
  return "Nobody's here. :(";
}

// Additional examples of truthy/falsy
const values = [0, 1, '', 'hello', null, undefined, [], {}, NaN, false, true];

values.forEach((val) => {
  if (val) {
    console.log(`${JSON.stringify(val)} is truthy`);
  } else {
    console.log(`${JSON.stringify(val)} is falsy`);
  }
});
