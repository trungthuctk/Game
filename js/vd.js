var spaceData;
function settup(){
    loadJSON('https://api.thecoffeehouse.com/api/v2/menu',gotData,'jsonp');
}
function gotData(data){
    console.log(data);
} 

settup();