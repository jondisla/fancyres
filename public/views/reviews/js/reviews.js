$(document).ready(()=>{

const star = $('.stars');
const twoStar = "<i class='fas fa-star'></i><i class='fas fa-star'></i>"
const threeStar = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
const fourStar = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
const fiveStar = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"

$('.revOne > p.score').append(fourStar);
console.log();
$('.revTwo > p.score').append(fiveStar);

});