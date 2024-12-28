const user = 'https://api.jsonbin.io/v3/b/67630fe1e41b4d34e467a677';
const api = 'https://dummyjson.com/products';
const table  =  document.getElementById('table1');
const mod0 =  document.getElementById('mod1');
const mod2 =  document.getElementById('mod2');
const mod3 =  document.getElementById('mod3');
let count = 0;
let cons = 0;
let ss;
let mod;


let pagination = {
  limit: 20,
  skip: 0,
  total: 0
}


async function load(pagination)
{
  let {limit, skip, total} = pagination;
     limit = prompt("kil:")
  let query =  `${api}?limit=${limit}&skip=${skip}` ;

  let res = await fetch(query)
  let data = await res.json();
    console.log(data)
    for (const person1 of data.products) { 
      mod0.innerHTML += `
      <ul>
      ${person1.brand}
      </ul>
      `
      if (person1.brand == undefined) {
        continue 
       }
       else{
        mod2.innerHTML += `
        <ul>
        ${person1.brandbrand}
        </ul>
        `
       }
      if (person1.brand == undefined) {
       continue 
      }
      else{
        mod3.innerHTML += `
        <ul>
        ${person1.brand}
        </ul>
        
        `
      }
    }
        for (const person of data.products) { 
            table.innerHTML += `
                <tr >
                  
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}"><img src="${person.images
                      }" alt=""></td>
                      
                        <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}" >${person.brand
                        }</td>
                        <td data-bs-toggle="modal" data-bs-target="#exampleModal${count}">${person.category}</td>       
              </tr>
                <div class="modal fade" id="exampleModal${count}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">CHINASIS</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" id="mod${count}">
                  <p class = "sw">price:${person.price}</p>
                   <p class = "sw">rating:${person.price}</p>
                     <p class = "sw">sku:${person.sku}</p>
                      <p class = "sw">tags:${person.tags}</p>
                  </div>
                </div>
              </div>
            </div>
                        


            `;

          
            count++;
            }// }

    
    }
   

load(pagination);

