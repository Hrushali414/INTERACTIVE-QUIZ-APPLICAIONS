let count = 0;

function addToCart(){
    count++;
    document.getElementById("count").innerText = count;
    alert("Product Added to Cart!");
}

function showNotification(){
    if(Notification.permission === "granted"){
        new Notification("Big Sale! 50% OFF");
    } else {
        Notification.requestPermission().then(permission=>{
            if(permission === "granted"){
                new Notification("Welcome to ShopWave!");
            }
        });
    }
}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js")
    .then(()=>console.log("Service Worker Registered"));
}