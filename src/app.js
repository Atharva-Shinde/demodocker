const app = require('express')();

app.get('/', (req, res) => 
    res.send('This is a docker containerised application')
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));