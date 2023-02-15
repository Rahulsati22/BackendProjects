
let mainContainer = document.getElementById('main_submit');
let ingredient_list = document.querySelectorAll('.ingredient_list')[0];
let button = document.getElementById('ingredientButton');
button.addEventListener('click', function(){
     const tag = mainContainer.cloneNode(true);
     const inpuet = tag.getElementsByTagName('input')[0];
     inpuet.value = '';
     mainContainer.appendChild(inpuet);
})