import { treaty } from "@elysiajs/eden";
import type { App } from "../../apps/be/src/index";

const client = treaty<App>("localhost:3000");
const { data: index } = await client.index.get();
console.log(index);
const { data: ping } = await client.ping.get();
console.log(ping);
