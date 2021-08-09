//N0-1
/* function feetToMile(feet) {
    return feet/5280;
}
var mile=feetToMile(100);

console.log(mile); */
/*
function seerToMon(seer){
    if(typeof seer != 'number' || seer<0)
    {
        return "please input a valid number";
    }
    var mon = seer/40;
    return mon;     
}

const outputMon = seerToMon(400);
console.log(outputMon);
*/

/*
function totalSales(shirt, pant, shoe){

    if(typeof shirt != 'number' || shirt<0)
    {
        return "please input a valid number";
    }
    if(typeof pant != 'number' || pant<0)
    {
        return "please input a valid number";
    }
    if(typeof shoe != 'number' || shoe<0)
    {
        return "please input a valid number";
    }

    shirtPrice = shirt * 100;
    pantPrice = pant * 200;
    shoePrice = shoe * 500;

    totalPrice = shirtPrice + pantPrice + shoePrice;
    return totalPrice;
}

var sellingItem = totalSales(1,5,8);
console.log(sellingItem);
*/

/*
function deliveryCost(totalShirt){
    if(typeof totalShirt != 'number' || totalShirt<=0)
    {
        return "please input a valid number";
    }

    else if(totalShirt <= 100)
    {
        cost = totalShirt * 100;
    }
    else if(totalShirt < 200)
    {
        cost = 10000 + ((totalShirt-100) * 80);
    }
    else{
        cost= 18000 + ((totalShirt-200)*50);
    }

    return cost;
}

const deliveryItem = deliveryCost(201);
console.log(deliveryItem);
*/



function perfectFriend(names){
    
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if(element.length == 5){
            for (let j = 0; j < element.length; j++) {
                const element2 = element[j];
                if (element2==" ")
                return 'please use name without space'
            }
            return element;
            
        }
        
    }
    return "There is no five length name";
}
const friends = ['rashid', 'ayan', 'bappy', 'jim', 'chan', 'tibro','dipu '];

const findName = perfectFriend(friends);
console.log(findName);