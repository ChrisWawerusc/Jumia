var Phone1={
    Image: "/images/p1.jpg",
    name: "XIAOMI Redmi A2+, 6.52...",
    discountedPrice: "Ksh 11,599",
    originalPrice: "Ksh 15,999",
    itemId: "I001",
};
document.getElementById("img1").src=Phone1.Image;
document.getElementById("phoneName").innerText=Phone1.name;
document.getElementById("discountPrice").innerText=Phone1.discountedPrice;
document.getElementById("originalPrice").innerText=Phone1.originalPrice;

var Phone2={
    Image: "/images/p2.jpg",
    name: "Oppo A17k, 6.56...",
    discountedPrice: "Ksh 13,589",
    originalPrice: "Ksh 19,999",
    itemId: "I002",
};
document.getElementById("img2").src=Phone2.Image;
document.getElementById("phoneName2").innerText=Phone2.name;
document.getElementById("discountPrice2").innerText=Phone2.discountedPrice;
document.getElementById("originalPrice2").innerText=Phone2.originalPrice;

var Phone3={
    Image: "/images/p3.jpg",
    name: "Tecno Spark 10 , 6.6...",
    discountedPrice: "Ksh 13,589",
    originalPrice: "Ksh 19,999",
    itemId: "I003",
};
document.getElementById("img3").src=Phone3.Image;
document.getElementById("phoneName3").innerText=Phone3.name;
document.getElementById("discountPrice3").innerText=Phone3.discountedPrice;
document.getElementById("originalPrice3").innerText=Phone3.originalPrice;

var Phone4={
    Image: "/images/p4.jpg",
    name: "Infinix Smart 8, 6.6...",
    discountedPrice: "Ksh 17,999",
    originalPrice: "Ksh 19,499",
    itemId: "I004",
};
document.getElementById("img4").src=Phone4.Image;
document.getElementById("phoneName4").innerText=Phone4.name;
document.getElementById("discountPrice4").innerText=Phone4.discountedPrice;
document.getElementById("originalPrice4").innerText=Phone4.originalPrice;

var Phone5={
    Image: "/images/p5.jpg",
    name: "XIAOMI Redmi A2+, 6.52...",
    originalPrice: "Ksh 17,999",
    itemId: "I005",
};
document.getElementById("img5").src=Phone5.Image;
document.getElementById("phoneName5").innerText=Phone5.name;
document.getElementById("originalPrice5").innerText=Phone5.originalPrice;

var Phone6={
    Image: "/images/p6.jpg",
    name: "Tecno Camon 20 6.67...",
    discountedPrice: "Ksh 28,599",
    originalPrice: "Ksh 30,000",
    itemId: "I006",
};
document.getElementById("img6").src=Phone6.Image;
document.getElementById("phoneName6").innerText=Phone6.name;
document.getElementById("discountPrice6").innerText=Phone6.discountedPrice;
document.getElementById("originalPrice6").innerText=Phone6.originalPrice;




document.getElementById("myClickableDiv").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone1.itemId; // Replace with your desired URL
});
document.getElementById("myClickableDiv2").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone2.itemId; // Replace with your desired URL
});
document.getElementById("myClickableDiv3").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone3.itemId; // Replace with your desired URL
});
document.getElementById("myClickableDiv4").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone4.itemId; // Replace with your desired URL
});
document.getElementById("myClickableDiv5").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone5.itemId; // Replace with your desired URL
});
document.getElementById("myClickableDiv6").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/phone.html" + "?" + Phone6.itemId; // Replace with your desired URL
});

function toggleDropdown(element) {
    element.classList.toggle('active');
  }