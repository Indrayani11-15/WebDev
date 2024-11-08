//example 1

 document
 .getElementById("changeTextButton")
 .addEventListener('click',function(){ 
    let paragraph = document.getElementById
    ("myParagraph");
    paragraph.textContent = "the paragraph is changed";
    
 });


//example 2

document.getElementById('highlightFirstCity').addEventListener('click',
   function(){
     let cititesList =  document.getElementById("citiesList");
     cititesList.firstElementChild.classList.add("highlight");
   }
)

//example 3

document.getElementById("changeOrder").addEventListener('click',
   function(){
      let coffeeType = document.getElementById("coffeeType");
      coffeeType.textContent = "Espresso";
      coffeeType.style.backgroundColor = "red";
   }
)


//example 4

document.getElementById("addNewItem").addEventListener('click',
   function(){

      let newItem = document.createElement('li');
      newItem.textContent = "Eggs";
      document.getElementById("ShoppingList").appendChild(newItem);
   }
)


//example 5

document.getElementById("removeLastTask").addEventListener('click',
   function(){
      let taskList = document.getElementById("taskList");
      taskList.lastElementChild.remove();
   }
)

//example 6

