 document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
        function myFunction() {
            let a = document.getElementById("1input").value;
            let b = document.getElementById("2input").value;
            let c = document.getElementById("3input").value;
            if (a != 0 || b != 0 || c != 0 || a > 0 || b > 0 || c > 0) {
                if (a > c && a > b) {
                    result = `${a} is the Largest Number Than ${b} & ${c} `;
                    document.getElementById("output").style.background = "brown"
                }
                else if (b > c && b > a) {
                    result = `${b} is the Largest Number Than ${a} & ${c} `;
                    document.getElementById("output").style.background = "green"
                }
                
                else if (c > a && c > b) {
                    result = `${c} is the largest Number than ${a} & ${b}`
                }
                else {
                    result = "Please Right the Different Value"
                }
            }

            else {
                result = "Please Entered a Value Above Zero"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;

        }
   