const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    if(id){   
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
    }
};


const deleteButton = document.querySelectorAll('.delete-blog');

if (document.querySelector('.delete-blog')) {
	deleteButton.forEach((b) => {
		b.addEventListener('click', delButtonHandler);
	})

}  
