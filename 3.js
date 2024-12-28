const user = 'https://api.jsonbin.io/v3/b/67630fe1e41b4d34e467a677';
const table  =  document.getElementById('table1')

const mod0 =  document.getElementById('mod1');
const mod2 =  document.getElementById('mod2');
const mod3 =  document.getElementById('mod3');
let count = 0;
let cons = 0;
let ss;
let mod;
// async function sd(){
//      const response  =  await fetch(user);
//      const data  = response.json();
//     console.log(data);
// }

// fetch("https://api.jsonbin.io/v3/b/67630fe1e41b4d34e467a677").then(response=>{
//     const data  = response.json();
//    console.log(data);

// })
fetch(user).then(res=> res.json()).then(data=>{
console.log(data);
for (const person1 of data.record) { 

  mod0.innerHTML += `
  <ul>
  
  ${person1.job[0]}

  </ul>
  
  `
  if (person1.job[1] == undefined) {
    continue 
   }
   else{

    mod2.innerHTML += `
    <ul>
    ${person1.job[1]}
    </ul>
    
  
    `
   }
  if (person1.job[2] == undefined) {
   continue 
  }
  else{
    mod3.innerHTML += `
    <ul>
    ${person1.job[2]}
    </ul>
    
    `
  }



}
// for (const person1 of data.record) { 

//   mod2.innerHTML += `
//   <ul>
//   ${person1.job[1]}
//   </ul>
  
//   `



// }
// for (const person1 of data.record) { 
//   mod3.innerHTML += `
//   <ul>
//   ${person1.job[2]}
//   </ul>
  
//   `



// }


    for (const person of data.record) { 

        table.innerHTML += `
            <tr >
                
                     
                  <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}"><img src="${person.foto}" alt=""></td>
                  
                    <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}" >${person.name}</td>
                    <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}">${person.surname}</td>
                   
          </tr>
          
        `;
      
        count++;
        }
        

    // }



})



