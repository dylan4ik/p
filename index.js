// const average = require ("./average.js");

// const gitb = [1, 2, 3, 4, 5];
// const xd = average(gitb);
// console.log(xd);




fetch("l.hbs") 
  .then(res => res.text())
  .then(hbsText => {
    const template = Handlebars.compile(hbsText);
    const context = {products: [{expressJS: "гоблинский страж", textidshers: "сильнейший гоблин",timberbest: './shredder.jpg' }]}
    const html = template(context);
    document.getElementById("55").innerHTML = html;

})