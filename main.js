const $btn = document.getElementById('btn-kick');
const $btnOtherAttack = document.getElementById('btn-other-attack');

const character = {
  name: 'Picachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,  
}

const enemy = {
  name: 'Charmander', 
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,
}

function random(num){
  return Math.ceil(Math.random()*num);
}

function changeHP(count, person){
  if(person.damageHP < count){
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл бой!');
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
  
}

$btn.addEventListener('click', function(){
  console.log('Kick');
  changeHP(random(20), character);
  changeHP(random(20), enemy);
})

$btnOtherAttack.addEventListener('click', function(){
  console.log('Kick two');
  changeHP(random(70), character);
  changeHP(random(70), enemy);
})

function renderHPLife(person){
  person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person){
  person.elProgressbar.style.width = person.damageHP + '%'; 
  renderHPLife(person); 
}

function renderHP(person){
  if(person.elHP) {
    renderHPLife(person);
  }

  if(person.elProgressbar) {
    renderProgressbarHP(person); 
  }
}

function init(){
  console.log('Start Game!');
  
  character.elHP = document.getElementById('health-character');
  character.elProgressbar = document.getElementById('character-progressbar');
  
  enemy.elHP = document.getElementById('health-enemy');
  enemy.elProgressbar = document.getElementById('enemy-progressbar');

  renderHP(character);
  renderHP(enemy);
}

init();