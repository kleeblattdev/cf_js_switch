const myList = document.getElementById("mylist");


function showtxt(){
    let myListInput = myList.value;
    console.log(myListInput);
    let output = "";

    switch(myListInput){
        case "0":
            output = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case "1":
            output = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
            break;
        case "2":
            output = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        case "3":
            output = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm ";
            break;
        default:
        output= "<b>Extra große Größe</b>";
    }

    document.getElementById("masse").innerHTML=output;
}