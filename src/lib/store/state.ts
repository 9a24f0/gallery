import { writable } from "svelte/store";

export const isHomePage = writable(false);
export const albumId = writable('');