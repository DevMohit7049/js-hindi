const button = document.querySelectorAll('.button');
const bodyPage = document.querySelector('body');
const heading = document.querySelector('h1');
const headingText = heading.innerText;

const main = document.querySelector('.main');
console.log(main);

function headingChange (e){

    heading.style.color="greenyellow"
    heading.innerText = "This is green Color"
}


const mainElement=()=>{
  main.style.border="1px solid red"
}

//    main.addEventListener('mouseover',mainElement)

function colorMove(e){
        heading.style.color=""
        heading.innerText = headingText
    }


heading.addEventListener('mouseover',headingChange);
heading.addEventListener('mouseout',colorMove);
// const para = document.querySelector('.para');

// console.log(heading);

// function handleClick(event){

//     // console.log(event.target);
//     if( event.target.id === 'green'){
//         bodyPage.style.backgroundColor=event.target.id;

//     }
// }

// button.forEach( function (button){
//     button.addEventListener('click', handleClick)
// })

// button.forEach( function (button) {
//     // button.addEventListener('click', handleClick)
//     button.addEventListener('click',function (e){
//         if(e.target.id ==='blue'){
//             bodyPage.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'orange'){
//             bodyPage.style.backgroundColor = e.target.id;
//         }

//         if(e.target.id === 'red'){
//             bodyPage.style.backgroundColor = e.target.id;
//         }

//         if(e.target.id === 'green'){
//             bodyPage.style.backgroundColor = e.target.id;
//         }
//     })

// })

button.forEach( (button)=>{
    
    button.addEventListener('click',(e)=>{
        if(e.target.id  === 'blue'){
            bodyPage.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'orange'){
            bodyPage.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'red'){
            bodyPage.style.backgroundColor = e.target.id;
        }
        else{
            bodyPage.style.backgroundColor = e.target.id;
        }

    })
} )