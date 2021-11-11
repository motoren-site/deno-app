import { serve } from "./deps.ts";

const PORT = 8000;

const server = serve({ port: PORT });

const body = new TextEncoder().encode("Hello World from Deno! " + "(" + Date.now() + ")\n");

console.log(`Server started on port ${PORT}`);


for await (const req of server) {
  req.respond({ body });
}