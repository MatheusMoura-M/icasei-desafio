import "dotenv/config";
import app from "./app";

app.listen(8080, () => {
  console.log(`Running as http://localhost:8080`);
});
