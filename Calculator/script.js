const input = document.querySelector('.input-box')
const buttons = document.querySelectorAll('button')

let string = ""; //calculation stored in string

let arr = Array.from(buttons); //nodelist -> array
arr.forEach(button=>{
    button.addEventListener('click', (e)=>{  //event object pass into callback function 
        if(e.target.innerHTML == '='){
          //e.target :-> button that was clicked
          string = eval(string); // evaluates string
          input.value = string;  
        }else if(e.target.innerHTML == 'AC'){
            string = ""; 
            input.value = string;

        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length -1)
            input.value = string;
        }
        else{
            string += e.target.innerHTML;  //adding string 
            input.value = string;
        }
    })
})
 
