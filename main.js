document.getElementById('search').addEventListener('input', function () { 
    const keyword = this.value.toLowerCase(); 
    const projects = document.querySelectorAll('.project'); 
    projects.forEach(project => { 
      if (project.textContent.toLowerCase().includes(keyword)) { 
        project.style.display = 'block'; 
      } else { 
        project.style.display = 'none'; 
      } 
    }); 
  }); 