var section = $('.board section');
var tab = $('.tab');

var ul = $('.menu li ul');
var subMenu = $('.btn-menu');


tab.on('click', function(e){
  e.preventDefault();
  section.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
})

subMenu.on('mouseover focusin', function(e){
  e.preventDefault();
  ul.parent().removeClass('menu-act');
  $(this).parent().addClass('menu-act');
})