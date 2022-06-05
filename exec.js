const cp = require("child_process");

/*cp.exec("open https://www.linkedin.com/learning/");*/

/*cp.exec("open -a Terminal .");*/

cp.exec( "node readStream", (err, data,stderr) => {
    //if (err) {
    //    throw err;
    //}
    console.log(data);
});


