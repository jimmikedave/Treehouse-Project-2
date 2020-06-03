/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const pageLimit = 10;

//this function filters each item according to the assigned page number
const showPage = (list, page) => {
  //startIndex is the first item on the page
  const startIndex = parseInt((page * pageLimit) - pageLimit);
  //endIndex is the last item on the page
  const endIndex = parseInt((page * pageLimit));
  //for loop creates assigns a number to each list item
  for (i = 0; i < list.length; i += 1) {
    //if else filters each item based on page number
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  };
}
/*this function creates pagination and loads a set of items
when pagination buttons are clicked*/
const appendPageLinks = (list) => {
  //creates the total amount of pages needed as a variable
  const totalPages = studentList.length / pageLimit;
  const div = document.createElement('div');
  const page = document.querySelector('.page');
  console.log(page)
  const ul = document.createElement('ul');
    //gives div the class name pagination
    div.className = 'pagination';
    //assigns ul to div and div to div
    div.appendChild(ul);
    page.appendChild(div);
  //for loop creates each page for pagination
  for(i = 0; i < totalPages; i += 1){
    const li = document.createElement('li');
    const a = document.createElement('a');
    //brings the page to the top when clicked
    a.href = '#';
    //assigns the page it's number
    a.textContent = i + 1;
    li.appendChild(a);
    ul.appendChild(li);
    //sets the first page as active
    if (i == 0 ){
      a.className = 'active';
    }
    /*clears all a element classes when clicked and
    assigns the clicked a element's class as 'active'*/
    a.addEventListener('click', (e) => {
      const pagination = document.querySelectorAll('a');
      for(i = 0; i < totalPages; i += 1){
        pagination[i].className = '';
      }
      showPage(studentList, e.target.textContent);
      e.target.className = 'active';
        });
      }
    }
//need to call the showPage function to show the first page
showPage(studentList, 1);
appendPageLinks(studentList);
