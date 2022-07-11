var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://aml-dr.yomabank.org/grid/getGridLoggedUser?_dc=1657511061738&start=0&limit=10&page=1&sort=%5B%7B%22property%22%3A%22userName%22%2C%22direction%22%3A%22ASC%22%7D%5D',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    alert(this.responseText); 
};