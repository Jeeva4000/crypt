
var container=document.createElement("div");
container.className="container";
var row =document.createElement("div");
row.className="row"
container.append(row)

var res=fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1.coins);
    for(var i=0;i<data1.coins.length;i++){
        row.innerHTML +=`
 <div class="col-lg-3">
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"> ${data1.coins[i].id.toUpperCase()}</div>
         <img src="${data1.coins[i].icon}" class="card-img-top" alt="crypto">
        <div class="card-body">
         <p class="card-text">Name: ${data1.coins[i].name}</p>
         <p class="card-text1">Symbol: ${data1.coins[i].symbol}</p>
         <p class="card-text2">Rank: ${data1.coins[i].rank}</p>
         <p class="card-text2">price: ${Math.floor(data1.coins[i].price)}</p>
        </div>  
    </div>
</div> 


       
        
        ` 
    }

    document.body.append(container)
}