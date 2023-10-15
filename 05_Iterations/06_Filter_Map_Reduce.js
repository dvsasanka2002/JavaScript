// const arr = ["js","ruby","java","python","cpp"]

// const values = arr.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]
const n = nums.filter((num)=> num >4) // Filter we need to give a callback function

// const new1 = nums.filter((i)=>{
//     return i > 4
// })
const new1 = nums.filter((i)=>(
    i > 4 // When using {} must give a return else wont work nut can wrap in ()
))
// console.log(new1);

const newnums = []

nums.forEach((num) =>{
    if(num > 4)
    {
        newnums.push(num)
    }
})
// console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const val = books.filter((b) =>{
    return b.genre === "History"
  })

  const val1 = books.filter((b) => b.publish >= 1995 && b.genre === "History")
  console.log(val1);