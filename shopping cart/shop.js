
function plus (id){

    inputN = document.getElementById("inputNumber"+id).value;

    var newVal = parseInt(inputN)+1;
    document.getElementById("inputNumber"+id).value = newVal;

    inputN1 = document.getElementById("inputNumber1").value;
    inputN2 = document.getElementById("inputNumber2").value;
    inputN3 = document.getElementById("inputNumber3").value;
    price1 = document.getElementById("price1").value;
    price2 = document.getElementById("price2").value;
    price3 = document.getElementById("price3").value;


    totalPrice1 = parseInt(price1) * parseInt(inputN1);
    totalPrice2 = parseInt(price2) * parseInt(inputN2);
    totalPrice3 = parseInt(price3) * parseInt(inputN3);

    if(document.getElementById("Product1").style.display == "none"){
        totalPrice1=0;
    }
    if(document.getElementById("Product2").style.display == "none"){
        totalPrice2=0;
    }
    if(document.getElementById("Product3").style.display == "none"){
        totalPrice3=0;
    }

    var totalPrice =  totalPrice1 + totalPrice2 +totalPrice3;

    document.getElementById("priceTotal").value = totalPrice;

}


function moins (id){

    inputN = document.getElementById("inputNumber"+id).value;

   
    if(parseInt(inputN)>0){
        var newVal = parseInt(inputN)-1;

        document.getElementById("inputNumber"+id).value = newVal;
    }

    inputN1 = document.getElementById("inputNumber1").value;
    inputN2 = document.getElementById("inputNumber2").value;
    inputN3 = document.getElementById("inputNumber3").value;
    price1 = document.getElementById("price1").value;
    price2 = document.getElementById("price2").value;
    price3 = document.getElementById("price3").value;

    totalPrice1 = parseInt(price1) * parseInt(inputN1);
    totalPrice2 = parseInt(price2) * parseInt(inputN2);
    totalPrice3 = parseInt(price3) * parseInt(inputN3);

    if(document.getElementById("Product1").style.display == "none"){
        totalPrice1=0;
    }
    if(document.getElementById("Product2").style.display == "none"){
        totalPrice2=0;
    }
    if(document.getElementById("Product3").style.display == "none"){
        totalPrice3=0;
    }

    var totalPrice =  totalPrice1 + totalPrice2 +totalPrice3;
    document.getElementById("priceTotal").value = totalPrice;

}

function hideDiv (id) {
    console.log("hide hide ");

    div = document.getElementById("Product"+id);
    div.style.display = "none";

    inputN1 = document.getElementById("inputNumber1").value;
    inputN2 = document.getElementById("inputNumber2").value;
    inputN3 = document.getElementById("inputNumber3").value;
    price1 = document.getElementById("price1").value;
    price2 = document.getElementById("price2").value;
    price3 = document.getElementById("price3").value;

    totalPrice1 = parseInt(price1) * parseInt(inputN1);
    totalPrice2 = parseInt(price2) * parseInt(inputN2);
    totalPrice3 = parseInt(price3) * parseInt(inputN3);

    if(document.getElementById("Product1").style.display == "none"){
        totalPrice1=0;
    }
    if(document.getElementById("Product2").style.display == "none"){
        totalPrice2=0;
    }
    if(document.getElementById("Product3").style.display == "none"){
        totalPrice3=0;
    }

    var totalPrice =  totalPrice1 + totalPrice2 +totalPrice3;
    document.getElementById("priceTotal").value = totalPrice;
    
}

function likeColor(id){

    icon  = document.getElementById("icon-heart"+id);

    if(icon.style.color == "red"){
        icon.style.color = "grey"
    }else{
        icon.style.color = "red";
    }
    

}