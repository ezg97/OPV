const Sheet = require('./sheet');

(async function() {

    // (GET) pull from sheet
    const sheet = new Sheet();
    await sheet.load();
    const results = await sheet.getRows();

    console.log(results[0].sku);
    console.log(results[0].post_id);
    console.log(results[0].title);
    console.log(results[0].body);
    console.log(results[0].image);

    // add rows
    await sheet.load();
    await sheet.addRows([
        {
            sku: "1", 
            post_id: "1", 
            title: "new oils!", 
            body: "Great new improved oils coming soon!"
        }]
    );


})();

