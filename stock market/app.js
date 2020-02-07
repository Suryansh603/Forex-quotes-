const p = document.getElementById('price')

var url = 'https://api.exchangeratesapi.io/latest?base='

const find= document.getElementById('find')

const text = document.getElementById('text')
const ul = document.getElementById('list')
var array=['INR','USD','EUR','GBP','AUD','HKD','JPY']
var options=document.getElementById('options')

find.addEventListener('click',function(){

ul.innerHTML=''    
fetch(url+text.value.toUpperCase()).then(function(response){
const data = response.json()
console.log(data)
return data

}).then(function(data){
     options.innerHTML=''   ;
    for( i =0;i<array.length;i++){
        const li = document.createElement('li');
        li.className='li'
        li.innerText=  array[i]+' : '+data.rates[array[i]]
        list.append(li)

    }

})

});








