angular.module('bandiApp').controller('mainController', ['$scope', '$http', function($scope, $http){
	var $$ = $.fn;

	$$.extend({ // .extend() merge the contents of two or more objects together into the first object
    	SplitID: function() {
        	return this.attr('id').split('-').pop(); 
        	// .split() a string into an array of substrings, and returns the new array 
        	// .pop() removes the last element of an array
    	},
    
    	timerID: null,
    	Slideshow: {
        
        Ready: function() {
            $('div.tmpSlideshowControl').hover(
                function() {
                    $(this).addClass('tmpSlideshowControlOn');
                }, function() {
                    $(this).removeClass('tmpSlideshowControlOn');
                }
            ).click(
                function() {
                    $$.Slideshow.Interrupted = true;

                    $('div.tmpSlide').fadeOut(1000);
                    $('div.tmpSlideshowControl').removeClass('tmpSlideshowControlActive');

                    $('div#tmpSlide-' + $(this).SplitID()).fadeIn(1000);
                    $(this).addClass('tmpSlideshowControlActive');

                    $$.Slideshow.Counter = parseInt($(this).SplitID());

                    if ($$.Slideshow.timerID  != null) {
                        clearTimeout($$.Slideshow.timerID);
                    }
                    
                    $$.Slideshow.timerID = setTimeout(function() {
                        $$.Slideshow.Resume.call($$.Slideshow)
                    }, 5000); // Resume after 5 seconds  
                }
            );

            this.Counter = 1;
            this.Interrupted = false;

            this.Transition();
        },

        Resume: function() {
            this.Interrupted = false;
            this.Transition();
        },

        Transition: function() {
            if (this.Interrupted) {               
                return;
            }

            this.Last = this.Counter - 1;

            if (this.Last < 1) {
                this.Last = 3;
            }

            $('div#tmpSlide-' + this.Last).fadeOut(1000);

            $('div#tmpSlide-' + $$.Slideshow.Counter).fadeIn(1000, function() {
                $('div#tmpSlideshowControl-' + $$.Slideshow.Last).removeClass('tmpSlideshowControlActive');
                $('div#tmpSlideshowControl-' + $$.Slideshow.Counter).addClass('tmpSlideshowControlActive');


                $$.Slideshow.Counter++;

                if ($$.Slideshow.Counter > 3) {
                    $$.Slideshow.Counter = 1;
                }

                setTimeout(function () {
                    $$.Slideshow.Transition.call($$.Slideshow)
                }, 10000);
            });
        }
    }
});

$(document).ready(function() {
    $$.Slideshow.Ready();
});
	
	

	
}]);








