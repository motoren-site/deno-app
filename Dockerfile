FROM hayd/alpine-deno:1.0.0

EXPOSE 8000

WORKDIR /src

USER deno

COPY /src/deps.ts .
RUN deno cache deps.ts

COPY src .
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]