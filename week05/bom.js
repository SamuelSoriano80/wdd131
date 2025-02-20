const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', () => {
    if (input.value != '') {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      input.value = '';
      input.focus();
    }
  });

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

function setChapterList() {
    localStorage.setItem("list", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("list"));
}

// Function to delete a chapter from the list and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
