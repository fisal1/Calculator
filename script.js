(function(document,window,undefined){
    const gridContainer1 = document.getElementById("operator");
    gridContainer1.style.gridTemplateColumns = `repeat(4, 1fr)`;
    const symbols = ["+","-","*","/"];
    for(let i=0;i<4;i++){
        let butt = document.createElement("button");
        butt.classList.add(symbols[i]);
        butt.innerText = symbols[i];
        gridContainer1.appendChild(butt);
        
    }
    const gridContainer = document.getElementById("butt1");
    gridContainer.style.gridTemplateColumns = `repeat(3, 1fr)`;
    const nums = [1,2,3,4,5,6,7,8,9,0,"clear","="];
    for(let i=0;i<=11;i++){
        let butt = document.createElement("button");
        const str = nums[i];
        butt.classList.add(str);
        butt.innerText = nums[i];
        gridContainer.appendChild(butt);
        
    }
    let expression = "";

    const buttons = document.querySelectorAll("#butt1 button, #operator button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = event.target.innerText;
            const val = document.getElementById("display1");
                 
            if (value === "=") {
                try {
                    expression = eval(expression); // ⚠️ Note: `eval` can be dangerous!
                    val.innerText=expression;
                    expression="";
                } catch (e) {
                    alert("Invalid expression");
                    expression = "";
                }
            } else if (value === "clear") {
                expression = "";
                 val.innerText=expression;
            } else {
                expression += value;
                 val.innerText=expression;
            }
           
            console.log("Current expression:", expression);
        });
    });
    
})(document,window)