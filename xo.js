let title =document.getElementById("title")
let turn = 'x'
let box=[]
for(let i=1;i<10;i++){
    box[i]=document.getElementById(`item${i}`)
}

function end(num1,num2,num3){
    
    document.getElementById('item'+num1).style.backgroundColor="#fa0"
    document.getElementById('item'+num2).style.backgroundColor="#fa0"
    document.getElementById('item'+num3).style.backgroundColor="#fa0"
    title.innerHTML= `${box[num1].innerHTML} Is Win`
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},4000)

}
function winner(){

    if(box[1].innerHTML==box[2].innerHTML&&box[2].innerHTML==box[3].innerHTML&&box[3].innerHTML!=""){
    end(1,2,3)

}
    else{ if(box[4].innerHTML==box[5].innerHTML&&box[5].innerHTML==box[6].innerHTML&&box[6].innerHTML!=""){
        end(4,5,6)}
    else{ if(box[7].innerHTML==box[8].innerHTML&&box[8].innerHTML==box[9].innerHTML&&box[9].innerHTML!=""){
        end(7,8,9)}
    else{ if(box[4].innerHTML==box[5].innerHTML&&box[5].innerHTML==box[6].innerHTML&&box[6].innerHTML!=""){
        end(4,5,6)}
    else{ if(box[1].innerHTML==box[4].innerHTML&&box[4].innerHTML==box[7].innerHTML&&box[7].innerHTML!=""){
        end(1,4,7)}
    else{ if(box[2].innerHTML==box[5].innerHTML&&box[5].innerHTML==box[8].innerHTML&&box[5].innerHTML!=""){
        end(2,5,8)}
    else{ if(box[3].innerHTML==box[6].innerHTML&&box[6].innerHTML==box[9].innerHTML&&box[6].innerHTML!=""){
        end(3,6,9)}
    else{ if(box[1].innerHTML==box[5].innerHTML&&box[5].innerHTML==box[9].innerHTML&&box[9].innerHTML!=""){
        end(1,5,9)}
    else{ if(box[3].innerHTML==box[5].innerHTML&&box[5].innerHTML==box[7].innerHTML&&box[5].innerHTML!=""){
        end(3,5,7)}
        }}

        }
            }
            
            }
        
        }
    }
}   

    

}

function gameX(id){
    let element= document.getElementById(id)
    if(turn==='x'&& element.innerHTML==''){
        element.innerHTML='x'
        turn='o'
        title.innerHTML='o'

    }else{
        if(turn==='o'&& element.innerHTML==''){
            element.innerHTML='o'
            turn='x'
            title.innerHTML='x'
    }

}winner()}
