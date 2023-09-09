document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.querySelector('#navbar-checkbox');
    
    navbarToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('navbar-open');
      } else {
        document.body.classList.remove('navbar-open');
      }
    });
  });
  