

function autocomplete(inp,arr){
    var currentFocus;

    inp.addEventListener("input", function (e){
       var a, b,i,val = this.value;
        closeAllLists();

        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("drink-template", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++){
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase())
                b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + drinks[i] + "'>";
                }
    });
}

let searchInput =document.getElementById('search-send')
    searchInput.onkeydown =document.getElementById('search-value').value;


    searchInput.addEventListener('click', ()=>{

            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mart')
                .then((res)=>res.json())
                .then((data)=>{
                    displayText(data);
                });


            displayText = (data) =>{


    data.forEach( (function (data){
        let output = '';
        output +=`<ul>
              <li> How to : ${drinks[0].strDrink}</li>
             </ul>`;
        document.getElementById('search-value').innerHTML=output;

    }));


            }});





























