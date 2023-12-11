var Phone1={
    Image: "/images/p1.jpg",
    name: "XIAOMI Redmi A2+, 6.52, 3GB RAM + 64GB (Dual SIM), 5000mAh, Black",
    bname:"XIAOMI",
    discountedPrice: "Ksh 11,599",
    originalPrice: "Ksh 15,999",
    itemId: "I001",
};
var Phone2={
    Image: "/images/p2.jpg",
    name: "Oppo A17k, 6.56, 64GB + 3GB RAM (Dual SIM), 5,000mAh, Blue",
    bname:"OPPO",
    discountedPrice: "Ksh 13,589",
    originalPrice: "Ksh 19,999",
    itemId: "I002",
};
var Phone3={
    Image: "/images/p3.jpg",
    name: "Tecno Spark 10 , 6.6 FHD,128GB ROM+8GB RAM (4G-LTE Dual SIM),5000mAh,Meta Black",
    bname:"TECNO",
    discountedPrice: "Ksh 13,589",
    originalPrice: "Ksh 19,999",
    itemId: "I003",
};
var Phone4={
    Image: "/images/p4.jpg",
    name: "Infinix Smart 8, 6.6, 128GB + 4GB RAM, 5000mAh, 4G (Dual SIM) - Timber Black",
    bname:"INFINIX",
    discountedPrice: "Ksh 17,999",
    originalPrice: "Ksh 19,499",
    itemId: "I004",
};
var Phone5={
    Image: "/images/p5.jpg",
    name: "XIAOMI Redmi A2+, 6.52, 3GB RAM + 64GB (Dual SIM), 5000mAh, Black",
    bname:"XIAOMI",
    originalPrice: "Ksh 17,999",
    itemId: "I005",
};

var Phone6={
    Image: "/images/p6.jpg",
    name: "Tecno Camon 20 6.67-inch 256GB+8GB RAM-64 MP-battery-5000mAh-+ALL GIFTS,./CY//",
    bname:"TECNO",
    discountedPrice: "Ksh 28,599",
    originalPrice: "Ksh 30,000",
    itemId: "I006",
};


var selectId = decodeURIComponent(window.location.search);
var selectedItem = selectId.substring(1);
document.getElementById('display').innerText= selectedItem;

if(selectedItem == Phone1.itemId){
    document.getElementById("image").src=Phone1.Image;
    document.getElementById("name").innerText=Phone1.name;
    document.getElementById("brandName").innerText=Phone1.bname;
    document.getElementById("discountedPrice").innerText=Phone1.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone1.originalPrice;
    var cost=11599;
    buyPhone(cost)
}
else if(selectedItem == Phone2.itemId){
    document.getElementById("image").src=Phone2.Image;
    document.getElementById("name").innerText=Phone2.name;
    document.getElementById("brandName").innerText=Phone2.bname;
    document.getElementById("discountedPrice").innerText=Phone2.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone2.originalPrice;
    var cost=13589;
    buyPhone(cost)
}
else if(selectedItem == Phone3.itemId){
    document.getElementById("image").src=Phone3.Image;
    document.getElementById("name").innerText=Phone3.name;
    document.getElementById("brandName").innerText=Phone3.bname;
    document.getElementById("discountedPrice").innerText=Phone3.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone3.originalPrice;
    var cost=17999;
    buyPhone(cost)
}
else if(selectedItem == Phone4.itemId){
    document.getElementById("image").src=Phone4.Image;
    document.getElementById("name").innerText=Phone4.name;
    document.getElementById("brandName").innerText=Phone4.bname;
    document.getElementById("discountedPrice").innerText=Phone4.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone4.originalPrice;
    var cost=14799;
    buyPhone(cost)
}
else if(selectedItem == Phone5.itemId){
    document.getElementById("image").src=Phone5.Image;
    document.getElementById("name").innerText=Phone5.name;
    document.getElementById("brandName").innerText=Phone5.bname;
    document.getElementById("discountedPrice").innerText=Phone5.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone5.originalPrice;
    var cost=11599;
    buyPhone(cost)
}
else if(selectedItem == Phone6.itemId){
    document.getElementById("image").src=Phone6.Image;
    document.getElementById("name").innerText=Phone6.name;
    document.getElementById("brandName").innerText=Phone6.bname;
    document.getElementById("discountedPrice").innerText=Phone6.discountedPrice;
    document.getElementById("originalPrice").innerText=Phone6.originalPrice;
    var cost=28599;
    buyPhone(cost)
}

function buyPhone(){
    let quant= document.getElementById("quantity");
    let q = quant.value;
    let color = document.getElementById("colors");
    let c = color.value;
    let finalQuant = cost * q;
    let rec=document.getElementById('receipt').innerText = 'Your order comes to Ksh ' + finalQuant + ' and it will come in ' + c + ' color.';
}


