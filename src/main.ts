import { serve } from "./deps.ts";

const PORT = 8000;

const server = serve({ port: PORT });



console.log(`Server started on port ${PORT}`);


for await (const req of server) {
  const body = new TextEncoder().encode("Hello World from Deno! " + "(" + new Date().toString() + ")\n");
  req.respond({ body });
}