import { uploadPhoto, createUser } from "./utils"

export default async function handleProfileSignup() {
Promise.all([ uploadPhoto, createUser ])
  .then((results) => {
    // results[0] → ?
    // results[1] → ?
    console.log( ??? );
  })
  .catch(() => {
    console.log("Signup system offline");
  });

}   