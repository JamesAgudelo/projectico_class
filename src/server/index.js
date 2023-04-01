const App = require('./App.js')

const host = 'http://localhost:'
const port = 8000;

App.listen(port,()=>{
    console.log(`${host}${port}`);
})





