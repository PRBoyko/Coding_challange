(async ()=>{
 let res = await  fetch('./data.json');
    let data = await res.json();
    console.log (data);
})();




