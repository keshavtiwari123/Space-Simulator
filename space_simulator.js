(function($)
{
	$.fn.space_simulator = function(density, speed)
	{	
			if(density > 10){density = 10;}
			var density = 60*density;
			var time = 10/speed;
			if(time < 1){time = 1;}
			var main = $(this);
			var i = 0;
			var center_x = (main.innerWidth() + main.position().left)/2;
			var center_y = (main.innerHeight() + main.position().top)/2;
			
			$(document).ready(function(){
				main.prepend($('<div id="stars"></div>')).css('background', 'black');
				$('#stars').css('width', '99%').css('height', '99%').css('overflow', 'hidden').css('position', 'absolute');
				dots(density);
			});
				
			function move(name)
			{
				var x = Math.sign(Math.random() - Math.random())*(Math.random()*main.width()/20);
				var y = Math.sign(Math.random() - Math.random())*(Math.random()*main.height()/20);
				var w = Math.random();
				$(name).css("transform", 'translateX('+ x +'px) translateY(' + y + 'px) scale('+w+')');
				var pos_x = $(name).position().left;
				var pos_y = $(name).position().top;
				var move_x = (pos_x-center_x)*main.width()/25;
				var move_y = (pos_y-center_y)*main.height()/25;
				console.log(pos_y);
				$(name).css('transition', time+'s');
					$(name).css("transform", 'translateX('+ move_x +'px) translateY(' + move_y + 'px)');
					setTimeout(function(){
						add_dot();
					}, Math.sign(move_x+move_y)*(move_x+move_y));
					setTimeout(function(){
						$(name).remove();
					}, Math.sign(move_y+move_x)*(move_y+move_x));
			}
			
		
		function dots(no)
		{
			for(i=1; i<=no; i++)
			{
				$('#stars').prepend($('<div id="dot'+ i +'" class="star" style="left: '+center_x+'px; top: '+center_y+'px;"></div>'));
			}
			for(i=1; i<=no; i++)
			{
				var name = "#dot" + i;
				move(name);
			}
		}
		function add_dot(){
		if(i> 10000){i = 1};
			i++;
			$('#stars').prepend($('<div id="dot'+ i +'" class="star" style="left: '+center_x+'px; top: '+center_y+'px"></div>'));
			move('#dot' + i);
			
		}
	}
}
)(jQuery);