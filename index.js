import dotenv from "dotenv";
import cowsay from "cowsay";

dotenv.config();

const name = process.env.NAME;

console.log(
  cowsay.say({
    text: `Bonjour ${name} REMOTE!`,
    e: "oO",
    T: "U",
  })
);
