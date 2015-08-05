angular.module('bandiApp').controller('worksController', ['$scope', '$http', function($scope, $http){
	$scope.head = 'WORKS';
	$scope.image = 'img/heart-image.png';
	$scope.des = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore';
	$scope.work = [
		{ image: 'img/work/img-1.jpg', style: 'photography', alt: 'Guerrilla' },
		{ image: 'img/work/img-2.jpg', style: 'logo-design', alt: 'Pelican Bird' },
		{ image: 'img/work/img-3.jpg', style: 'photography', alt: 'Photography' },
		{ image: 'img/work/img-4.jpg', style: 'branding', alt: 'LLUEVE SOBRE STGO' },
		{ image: 'img/work/img-5.jpg', style: 'photography', alt: 'soldiers' },
		{ image: 'img/work/img-6.jpg', style: 'web', alt: 'cartoon website' },
		{ image: 'img/work/img-7.jpg', style: 'logo-design', alt: 'weird picture' },
		{ image: 'img/work/img-8.jpg', style: 'web', alt: 'cartoon picture' },
	];
	
		$(document).ready(function() {
  			$('ul#filter a').click(function() {
    			$(this).css('outline','none');
    			$('ul#filter .current').removeClass('current');
    			$(this).parent().addClass('current');
    			
    			var filterVal = $(this).text().toLowerCase().replace(' ','-');
        
    		if(filterVal == 'all') {
      			$('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
    		} else {
      		$('ul#portfolio li').each(function() {
        			if(!$(this).hasClass(filterVal)) {
          				$(this).fadeOut('normal').addClass('hidden');
        			} else {
          				$(this).fadeIn('slow').removeClass('hidden');
        			}
      			});
    		}
    			return false;
  			});
		});

}]);

