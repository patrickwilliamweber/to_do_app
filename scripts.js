let button = $('#button');
button.on('click', newItem);

function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(text);

    if (inputValue === '') {
        alert("It's gotta say something")
    } else {
        let list = $('#list');
        list.append(li);
    }

    function crossOut() {
        li.toggleClass("strike");
    }

    li.on('dblclick', crossOut);

    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);
}



// function newItem() {

//     //javascript
//     //1. Adding a new item to the list of items: 
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("input").value;
//     let text = document.createTextNode(inputValue);
//     li.appendChild(text);

//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         let list = document.querySelector('#list');
//         list.appendChild(li);
//     }

//     //2. Crossing out an item from the list of items:
//     function crossOut() {
//         li.classList.toggle("strike");
//     }

//     li.addEventListener("dblclick", crossOut);

//     //3(i). Adding the delete button "X": 
//     let crossOutButton = document.createElement("crossOutButton");
//     crossOutButton.appendChild(document.createTextNode("X"));
//     li.appendChild(crossOutButton);

//     crossOutButton.addEventListener("click", deleteListItem);
//     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//     function deleteListItem() {
//         li.classList.add("delete")
//     }
//     // 4. Reordering the items: 
//     $('#list').sortable();

// }