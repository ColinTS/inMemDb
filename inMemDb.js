 /*jshint esversion: 6*/

const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

function byId(id) {
  return users[id];
}

function youngest() {
  let youngestUser = users['1'];
  Object.keys(users).forEach(function(key,index){
    let young = users[key].age;

      if(users[key].age < youngestUser.age  ){
        youngestUser = users[key];
      }
   });
  return youngestUser;
}

function oldest() {
  let oldestUser = users['1'];
   Object.keys(users).forEach(function(key,index){
      let young = users[key].age;

      if(users[key].age > oldestUser.age  ){
        oldestUser = users[key];
      }
   });
  return oldestUser;
}

function males () {
  let males = [];
  Object.keys(users).forEach(function(key,index){
    if(users[key].gender === 'm'  ){
        males.push(users[key]);
      }
   });
    return males;
}

function females() {
  let females = [];
  Object.keys(users).forEach(function(key,index){
    if(users[key].gender === 'f'  ){
        females.push(users[key]);
      }
   });
  return females;
}

function employees(employer) {
  let employed = [];

  Object.keys(users).forEach(function(key,index){
    if(users[key].jobType === emp  ){
      employed.push(users[key]);
    }
 });
   return employed;

}

//SUPER STRETCH GOAL
function groupEmployees(){
   let group = [
    'st': [ads],

  ];
}

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees
};

module.exports = functions;
