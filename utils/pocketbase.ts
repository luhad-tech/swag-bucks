import PocketBase from "pocketbase";
import { POCKETBASE_URL } from "@env";

export const client = new PocketBase(POCKETBASE_URL);
