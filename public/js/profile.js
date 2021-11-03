const newFormHandler = async (event) => {
    event.preventDefault();
    //=======ADD A BOOK ==================================================================
    
    const inputTitle = document.querySelector('#inputTitle').value.trim();
    const inputComment = document.querySelector('#inputComment').value.trim();
    const inputAuthor = document.querySelector('#inputAuthor').value.trim();

    if (inputTitle && inputComment && inputAuthor) {
        const response = await fetch(`/api/books`, { //-------this location needs to be figured out
            method: 'POST',
            body: JSON.stringify({ inputTitle, inputComment, inputAuthor }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');//-----------what does this do
        } else {
            alert('Failed to create book');
        }
    }
};


//============DELETE ==========================================================================
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/books/${id}`, {//------------route needs to match something 
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');//----there it is again, this must be hbs
        } else {
            alert('Failed to delete book');
        }
    }
};
  
  document
    .querySelector('.new-project-form')          //---------------we need a name
    .addEventListener('submit', newFormHandler); //for adding new book
  
  document
    .querySelector('.project-list')              //-----same ------?
    .addEventListener('click', delButtonHandler);
  