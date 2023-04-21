function calculateTip(event){
    event.preventDefault();

    let bill = document.getElementById("bill").value;
    let QoS = document.getElementById("serviceQal").value;
    let nPeople = document.getElementById("people").value;

    if(bill == "" | QoS == 0){
        alert("Por favor, preencha os valores");
        return;
    }

    //Verificando o número de pessoas
    if(nPeople == "" | nPeople <= 1){
        nPeople = 1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }

    let total = (bill*QoS)/nPeople;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML=total;
    document.getElementById('totalTips').style.display="block";
}
document.getElementById('totalTips').style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("tipsForm").addEventListener('submit', calculateTip)