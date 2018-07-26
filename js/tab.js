$(function(){
    $('.grid-team .grid-item').on('click', function(){
        var item = $(this).attr('data-tab');
        $('.team .active').removeClass('active');
        $('.team-detailed[data-tab="' + item + '"]').addClass('active');
        $(this).addClass('active');
    });
});
