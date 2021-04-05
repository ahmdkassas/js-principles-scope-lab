const leastFavoriteCustomer = "john";
var  customerName = "bob";

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    globalThis.bestCustomer = "not bob"
    return bestCustomer;    
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob";
    return leastFavoriteCustomer;
}