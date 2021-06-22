const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#title').value.trim();
    const description = document.querySelector('#title-desc').value.trim();
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
  };
  
  document.querySelector('.update-project-form').addEventListener('submit', updateFormHandler);