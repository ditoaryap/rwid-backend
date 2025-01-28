import { createServer } from "http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server berjalan di http://127.0.0.1:3000/");
});
