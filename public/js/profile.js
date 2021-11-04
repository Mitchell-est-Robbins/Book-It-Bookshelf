const newFormHandler = async (event) => {
    event.preventDefault();
    //=======ADD A BOOK ==================================================================
    
    const inputTitle = document.querySelector('#inputTitle').value.trim();
    const inputComment = document.querySelector('#inputComment').value.trim();
    const inputAuthor = document.querySelector('#inputAuthor').value.trim();

    console.log(inputTitle, inputComment, inputAuthor);
    if (inputTitle && inputComment && inputAuthor) {
       fetch('/api/books/', { //-------this location needs to be figured out
            method: 'POST',
            body: JSON.stringify({ title:inputTitle, author:inputAuthor, comment:inputComment  }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response =>{
            console.log(response)
            if (response.ok) {
                return response.json()
                // document.location.replace('/myLibrary');//-----------what does this do
            } else {
                alert('Failed to create book');
            } 
        }).then(book =>{
            console.log(book)
        }).catch( err => {
            console.log(err)
        })

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
    .querySelector('#addBtn')          //---------------we need a name
    .addEventListener('click', newFormHandler); //for adding new book
  
  document
    .querySelector('#dltBtn')              //-----same ------?
    .addEventListener('click', delButtonHandler);
  