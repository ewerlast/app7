document.querySelector('.push').onclick = function () {

    // данные из input type = radio
    // console.log(document.querySelector('.radio-input[checked="checked"]').value);

    let radio = document.querySelectorAll('.radio-input');
    //console.log(radio);
    //radio[0].hidden = true;
    for (let i = 0; i < radio.length; i = i + 1) {
        //console.log(radio[i].checked);
        if (radio[i].checked) {
            console.log(radio[i].value);
        }
    }

    let p = document.querySelectorAll('p');
    console.log(p);
    for (let i = 0; i < p.length; i = i + 1) {
        p[i].style.color = 'red';
    }

    let option = document.querySelectorAll('#my-select option');
    console.log(option);
    for (let i = 0; i < option.length; i = i + 1) {
        // console.log(option[i].selected);
        if (option[i].selected) {
            console.log(option[i].innerHTML);
        }
    }
}


// my cod

// дз1
document.querySelector('#run_number').onclick = runNumber;

function runNumber(){
let dz1 ='<h2> список от 0 до 100 </h2>';
for(let i = 0; i<=100; i++){
    dz1 += `<p id="${i}"> номер :${i}</p>`;
    
} 

document.querySelector('.dz1').innerHTML = dz1;
}





// дз2
document.querySelector('#run_number_even').onclick = runNumberEven;

function runNumberEven(){
let dz2 ='<h2> список четных чисел от 0 до 101 </h2>';
for(let i = 0; i<=101; i++){
    if(i % 2 ==0){

    dz2 += `<p class="${i}"> номер :${i}</p>`;
}
} 

document.querySelector('.dz2').innerHTML = dz2;
}




// дз3
document.querySelector('#run_number_reverse').onclick = runNumberReverse;

function runNumberReverse(){
let dz3 ='<h2> список от 200 до 0 </h2>';
for(let i = 200; i>=0; i--){

    dz3 += `<p"> номер :${i}</p>`;

} 

document.querySelector('.dz3').innerHTML = dz3;
}




// дз 4

document.querySelector('#button_power').onclick = runPower;
 //let numberPower = document.querySelectorAll('.number_power');
 let inPower = document.querySelector('#in_power');
 let powerPower = document.querySelector('#power_power');
 
     
function runPower(){
 let numberInPower = inPower.value;
 let numberPowerPower = powerPower.value;
if(!isNaN(numberInPower && numberPowerPower)){
    let result = 1;
for(let i = 1; i <= numberPowerPower; i++){
    
    result = result * numberInPower;
}
document.querySelector('.result_power').innerHTML = result;
}
else{
    alert("введите число");
}
      
  }



  // дз 5

   document.querySelector('#run_multiplication_table').onclick = multiplicationTable;
  let numTable = document.querySelector('#num_table');

   

  function multiplicationTable(){
        numTable = numTable.value;
        
        let dz5 =`<h2> таблица умножения на ${numTable}</h2>`;
        
        for(let i = 0; i<=10; i++){
            dz5 += `<p >${numTable} * ${i} = ${numTable*i}</p>`;
          
           }
          
           document.querySelector('.dz5').innerHTML = dz5;
        } 



        

   document.querySelector('#run_multiplication_table').onclick = multiplicationTable;
  
  // дз 7
    document.querySelector('#run_composition').onclick = composition;
 
   function composition(){
         numTable = numTable.value;
         
         let dz7 =`<h2> произведени чисел от 1 до 50 ${numTable}</h2>`;
         
         for(let i = 0; i<=50; i++){
             dz7 += `<p >${i} * ${i} = ${i*i}</p>`;
           
            }
           
            document.querySelector('.dz7').innerHTML = dz7;
         } 




         // дз 8

   document.querySelector('#run_special_character').onclick = specialСharacter;
  
 
    
 
   function  specialСharacter(){
         numTable = numTable.value;
         
         let dz8 =`<h2> спецсимвол ${numTable}</h2>`;
         
         for(let i = 1000; i<+2000; i++){
             dz8 += `<p > спецсимвол &#(${i}) = &#${i} </p>`;
           
            }
           
            document.querySelector('.dz8').innerHTML = dz8;
         } 
       
       

        
        
  // дз 9
  document.querySelector('#run_number_p').onclick = runNumberP;


  function runNumberP(){
      let p = document.querySelectorAll('.main p');
      for(i = 0; i<p.length; i++){
          
        p[i].insertAdjacentHTML('beforebegin', i);
        
              }
      
  }
  

    // дз 10

    let dayBirht = document.querySelector('#day_birht');
    let monthBirht = document.querySelector('#month_birht');
    let resultBirth =document.querySelector('.result_birth');
    let runSign = document.querySelector('#run_sign');
    let  source = [
        [21,3,20,4,"овен"],
        [21,4,20,5,"телец"],
        [21,5,20,6,"близнецы"],
        [21,6,22,7,"рак"],
        [23,7,22,8,"лев"],
        [23,8,23,9,"дева"],
        [24,9,23,10,"весы"],
        [24,10,21,11,"скорпион"],
        [22,11,21,12,"стрелец"],
        [22,12,19,01,"козерог"],
        [22,1,18,2,"водолей"],
        [19,2,20,3,"рыбы"]
    ]
    
    
    
    function resultSign(){
        dayBirht =+ dayBirht.value;
        monthBirht =+ monthBirht.value;

        for(i = 0; i < source.length; i++){
                   // console.log( source[i]);
                if(monthBirht == source[i][1]  || monthBirht == source[i][3] && 
                    (dayBirht >= source[i][0] || dayBirht <= source[i][2])){
                        resultBirth.innerHTML = source[i][4];
                        return false;
        }
    }
    }

      
runSign.onclick = resultSign;
        
   
      

  // дз 11

  document.querySelector('#run_colot_span').onclick = runColorSpan;


  function runColorSpan(){
  
  
   let spanArr = document.querySelectorAll('span');
   for(i = 0; i <spanArr.length; i++){
       spanArr[i].style.color = '#ADFF2F';
   }

 
}

  // дз 12


  document.querySelector('#run_p_footer').onclick = runPFooter;

let resultPFooter = document.querySelector('result_p_footer');

let footerPArr = document.querySelectorAll('p');
function runPFooter(){
    for (let i = 0; i < footerPArr.length; i++){
  
        document.querySelector('.result_p_footer').innerHTML = 'количество параграфов: ' + footerPArr.length;
    }   
    
}   
              
    

// дз 13

document.querySelector('#run_pus').onclick = runPlus;
document.querySelector('#run_minus').onclick = runMinus;

let dz13 = [1,0,0,0];
let d =0;
 document.querySelector('.result_arr_pluses').innerHTML = dz13;



function runPlus(){
    if(d + 1 < 4){
   dz13[d] = 0;
    dz13[d + 1] = 1
    d++;
    document.querySelector('.result_arr_pluses').innerHTML = dz13;
    }
   
}

function runMinus(){
    if(d + 1){
        dz13[d] = 0;
        dz13[d - 1] = 1
        d--;
    }
    document.querySelector('.result_arr_pluses').innerHTML = dz13;
}


// дз 14

let ayArrrbitrar = [];
let ayArrrbitrar2 = [];

function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function isBigEnough(value) {
    return value < 0;
  }


 for(i = 0; i < 30; i++){
      ayArrrbitrar[i] =  randomInteger(-2, 2);
     
      ayArrrbitrar2 = ayArrrbitrar.filter(isBigEnough)
   
 }
 console.log("домашнее задание 14")
 console.log(ayArrrbitrar);
 console.log( ayArrrbitrar2.length);


 // дз 15
 console.log("домашнее задание 15")
 console.log( ayArrrbitrar2);



// дз 16

document.querySelector('#run_in_arrey').onclick = RunInArrey;
let inArr = [];
let inArrey = document.querySelector('#in_arrey');
let resultArrInput =document.querySelector('.result_in_arrey');
function RunInArrey(){
    inArrey = inArrey.value;
  if(inArrey > 10){
                alert("введите число не больше 10");
            }
   
            if(inArrey <= 10){
                
          
        for(let i = 0; i < inArrey; i++){
            inArr[i] = 1+' ';
            }
        }
            resultArrInput .innerHTML =inArr ;
  
}    


// дз 17

document.querySelector('#run_out_arrey').onclick = runOutArrey;
let outArrey = document.querySelector('#out_arrey');
let uutarr2 = [];


function runOutArrey(){
    outArrey =+ outArrey.value;
    for(let i = 0; i < outArrey; i++ ){
        let rangomNumber = randomInteger(0, 100);// взял с дз 14
        uutarr2[i] = rangomNumber + " ";
    }
    //console.log(uutarr2);
    document.querySelector('.result_out_arrey').innerHTML = uutarr2
}


// дз 18

console.log("домашнее задание 18")
function filterArr(value) {
    return value = Number.isInteger(value) ;
  }
let q =[1,5,10,"солнце",55,"воздух"];
let filterQ = q.filter(filterArr);
console.log(filterQ);

// дз 19
console.log("домашнее задание 19")
let w = [];
let max= 0;
for( let i = 0; i <=10; i++){
    let rand2 = Math.floor(Math.random() * 10) + 1;
    w[i] = rand2;
    
}
console.log(w);
console.log( Math.max.apply(null, w));


//дз 20
console.log("домашнее задание 20")
let r = [22, 3, 1, 22, 3, 5, 67, 32, 1, 3];
let t = {} // наш массив для результатов
for (let i = 0; i < r.length; i++) {
if (t[r[i]] == undefined) {
	t[r[i]] = 1;
}
else {
	t[r[i]]++;
}
}
console.log(t);