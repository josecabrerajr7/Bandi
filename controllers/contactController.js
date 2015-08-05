angular.module('bandiApp').controller('contactController', ['$scope', '$http', function($scope, $http){

	$scope.head = 'LETS DISCUSS';
	$scope.image = 'img/heart-image.png';
	$scope.des = 'Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore';
	$scope.hello = 'Say hello!';
	$scope.dessecond = 'Cras at ultrices erat, sed vulputate!';
	$scope.street = '2345 Setwant natrer, 1234,';
	$scope.state = 'Washington. United States.';
	$scope.phoneNumber = '(401) 1234 567';
	$scope.email = 'hello@brandi.com';
	$scope.website = 'ww.brandi.com';

	$scope.socialIcon = [
		{ image: 'img/contact-be-icon.png', alt: 'Be Icon', link: '#' },
		{ image: 'img/contact-twitter-icon.png', alt: 'Twitter Icon', link: '#' },
		{ image: 'img/contact-ball-icon.png', alt: 'Ball Icon', link: '#' },
		{ image: 'img/contact-triangle-icon.png', alt: 'Triangle Icon', link: '#' },
		{ image: 'img/contact-google-plus-icon.png', alt: 'Be Icon', link: '#' }
	];

}]);