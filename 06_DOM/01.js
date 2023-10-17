// console.log(Window) in browser
// console.dir(document)
// console.log(Window.document)
// console.log(document)

//HTML Collection is differnet from Arrays 
//Node Collection is also diff from Arrays

//document.getElementById('firstHeading').innerHTML = "<h1>Sasanka</h1>"

//document.getElementById("title").class is undefined 
// in html we write as class but can be accessed only by className
// document.getElementById("title").className
// document.getElementById("title").id
// document.getElementById("title").getAttribute

//document.getElementById("title").getAttribute('id')

// const title = document.getElementById('title')
// title.style.backgroundColor='green'

//title.style.padding = "15px"  
//title.style.borderRadius = "15px"

// title.textContent, title.innerText are considered to be same but 
// when we add a span in the h1 tag and add a style to not display the text in the span
// textContent displays it but innerText doesnt
// When we use setAttribute we change the innerHTML

// document.querySelector('h1') selects the first h1 tag

// document.querySelector('#title') same as getElementById

// document.querySelector('.heading') same as getElementByClassName

// document.querySelector('input[type="password"]')

// ul>li*3  shortcut to get ul with 3 elements

// ! shortcut to get basic 

// const ul = document.querySelector('ul')
// ul.querySelector('li')
// const list = document.querySelectorAll('li')
// list.forEach((i) => (console.log(i)))
// list.forEach((i) => (i.style.color='green'))

// querySelectorAll returns a NodeList
// document.getElementsByClassName('listItem') this returns a HTML Collection
// Convert to array using Array.from(list)

