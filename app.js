const express = require('express');
const app = express();
app.use(express.json());

const user = require("./src/routes/user");

app.use(user)




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
