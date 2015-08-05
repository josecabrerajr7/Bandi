$(document).ready(function() {
	var footer = document.getElementsByClassName('hello')[0];

    if ( document.URL == 'http://localhost:8000/#/') {
    	footer.style.display = 'none';
    } else if(document.URL == 'http://localhost:8000/#/features'){
    	footer.style.display = 'show';
    	
    }

    
});