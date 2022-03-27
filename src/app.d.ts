/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces

interface SessionData {
  // Your session data
  views: number;
}

declare namespace App {
	interface Locals {
    session: import("svelte-kit-cookie-session").Session<SessionData>;
    cookies: Record<string, string>; // all parsed cookies are automatically set from handleSession to avoid overhead
  }

  interface Platform {}

  interface Session extends SessionData {}

  interface Stuff {}
}
