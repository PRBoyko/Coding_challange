(async ()=>{
 let res = await  fetch('./data.json');
    let data = await res.json();
    let dataForTable = data.listings.filter(item=>item.vehicleType.maxPassengers>2).
    sort((a,b)=>a.pricePerPassenger-b.pricePerPassenger);
    let table = document.querySelector('tbody');
    dataForTable.map(el=>{
        let row = document.createElement('tr');
        let name = document.createElement('td');
        let pricePerPassenger = document.createElement('td');
        let vehicleType = document.createElement('td');
        name.textContent = el.name;
        pricePerPassenger.textContent = el.pricePerPassenger;
        vehicleType.textContent = el.vehicleType.name;
        row.appendChild(name);
        row.appendChild(vehicleType);
        row.appendChild(pricePerPassenger);        
        table.appendChild(row);
    });
    let totalNumbersOfListings = data.listings.length;
    let prices = data.listings.map(prices=>prices.pricePerPassenger)
    let maxPrice = Math.max(...prices);
    let minPrice = Math.min(...prices);
    let avaragePrice = prices.reduce((a, b) => a + b, 0)/prices.length;
    let listingNumbersElement = document.createElement('div');
    let maxPriceElement = document.createElement('div');
    let minPriceElement = document.createElement('div');
    let avaragePriceElement = document.createElement('div');
    listingNumbersElement.textContent = `total number of listings: ${totalNumbersOfListings}`;
    maxPriceElement.textContent = `maximum price: ${maxPrice}`;
    minPriceElement.textContent = `minimum price: ${minPrice}`;
    avaragePriceElement.textContent = `average price: ${avaragePrice}`;
    document.body.appendChild(listingNumbersElement);
    document.body.appendChild(maxPriceElement);
    document.body.appendChild(minPriceElement);
    document.body.appendChild(avaragePriceElement);
})();




