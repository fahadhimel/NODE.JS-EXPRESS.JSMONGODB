const app = require("./app");
const PORT = 3000;
const hostName = "127.0.0.1";

app.listen(PORT, () => {
  console.log(`Server is raning at http://${hostName}:${PORT}`);
});
