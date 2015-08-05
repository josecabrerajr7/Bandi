angular.module('bandiApp').controller('teamController', ['$scope', '$http', function($scope, $http){
	$scope.head = 'MEET OUR TEAM';
	$scope.image = 'img/heart-image.png';
	$scope.des = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore';
	$scope.teaminfo = [
		{ image: 'img/team/team1.jpg', alt: 'John Filmr Doe', name: 'John Filmr Doe', position: 'Managing Director' },
		{ image: 'img/team/team2.jpg', alt: 'Chystine Hinue', name: 'Chystine Hinue', position: 'Lead Designer' },
		{ image: 'img/team/team3.jpg', alt: 'Martin Matrone', name: 'Chystine Hinue', position: 'Lead Developer' },
		{ image: 'img/team/team4.jpg', alt: 'Steve Flaulkin', name: 'Chystine Hinue', position: 'Sr. UI Designer' }
	];


	$(document).ready(function() {
		$('ul.slider-team').children('li');
	});

	// Some Fun Facts Js coding
	$scope.funhead = 'SOME FUN FACTS';
	$scope.whiteHeart = 'img/team/white-heart.png';
	$scope.facts = [
		{ image: 'img/team/hours-work-img.png', number: '3200', head: 'HOURS OF WORK', alt: 'Image' },
		{ image: 'img/team/sfClients-img.png', number: '120', head: 'SATISFIED CLIENTS', alt: 'Image' },
		{ image: 'img/team/project-delivered-img.png', number: '360', head: 'PROJECTS DELIVERED', alt: 'Image' },
		{ image: 'img/team/rewards-img.png', number: '42', head: 'AWARDS WON', alt: 'Image' }
	];
}]);