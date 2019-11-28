$(document).ready(function(){

    //menu buttons
    var allBtn = $('#menu-all');
    var meatBtn = $('#menu-meat');
    var sandwichBtn = $('#menu-sandwich');
    var saladBtn = $('#menu-salad');

    //menu items
    // const all = $('.all');
    const salad = $('.salad');
    const sandwich = $('.sandwich');
    const meat = $('.meat');
    
    allBtn.click(()=>{
        $('.menu-sec').removeClass('active');
        allBtn.addClass('active');
        saladBtn.removeClass('active');
        sandwichBtn.removeClass('active');
        meatBtn.removeClass('active');
        salad.show();
        sandwich.show();
        meat.show();
    });

    saladBtn.click(()=>{
        $('.menu-sec').addClass('active');
        allBtn.removeClass('active');
        sandwichBtn.removeClass('active');
        meatBtn.removeClass('active');
        saladBtn.addClass('active');
        salad.show();
        sandwich.hide();
        meat.hide();
    });

    sandwichBtn.click(()=>{
        $('.menu-sec').addClass('active');
        allBtn.removeClass('active');
        saladBtn.removeClass('active');
        meatBtn.removeClass('active');
        sandwichBtn.addClass('active');
        sandwich.show();
        salad.hide();
        meat.hide();
    });

    meatBtn.click(()=>{
        $('.menu-sec').removeClass('active');
        allBtn.removeClass('active');
        saladBtn.removeClass('active');
        sandwichBtn.removeClass('active');
        meatBtn.addClass('active');
        meat.show();
        sandwich.hide();
        salad.hide();
    });
  
  });