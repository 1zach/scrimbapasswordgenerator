let pw = ["A","B","C","D","E","F","G","H","I","1","2","3", "*", "?", "<", "!", "@","j", "k", "l", "m", "n", "o", "p", "q", "r"]
let random = 0
let random2 = 0
let random3 = 0
let random4 = 0
let randomPW = 0


    let randomPW1 = document.getElementById("password1")
    let randomPW2 = document.getElementById("password2")
    let randomPW3 = document.getElementById("password3")
    let randomPW4 = document.getElementById("password4")

function genPW() {
    randomPW1.textContent = ""
    randomPW2.textContent = ""
    randomPW3.textContent = ""
    randomPW4.textContent = ""
i=0
    do {
    //Get a Random Number
       random =  Math.floor(Math.random() * (pw.length))
    //Pass that random number to a position in the array
       let randomPWA = pw[random]
    //Add that random number to the password  
       randomPW1.textContent += randomPWA
       
       
       random2 =  Math.floor(Math.random() * (pw.length))
       let randomPWB = pw[random2]
       randomPW2.textContent += randomPWB
       

       random3 =  Math.floor(Math.random() * (pw.length))
       let randomPWC = pw[random3]
       randomPW3.textContent += randomPWC
       

       random4 =  Math.floor(Math.random() * (pw.length))
       let randomPWD = pw[random4]
       randomPW4.textContent += randomPWD
       //count
       
       i++
    } while 
    (i < 12)
    
}


