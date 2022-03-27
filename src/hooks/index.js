import dotenv from 'dotenv'
import { handleSession } from "svelte-kit-cookie-session";

dotenv.config();

export async function getSession({ locals }) {
  return locals.session.data;
}

export const handle = handleSession({
  secret: process.env.SESSION_SECRET,
});
