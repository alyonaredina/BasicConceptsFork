function compareArrays(arr1, arr2) {

    if (arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index])) {

      return true;

    }
    return false;
}
    // compareArrays([1,2,3],[1,2,3])
    

  


function getUsersNamesInAgeRange(users, gender) {

  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, user, gender) => (acc + user), 0);
  //console.log(result);
  let numberOfPeople = users.reduce ((acc, user) => {
    return user.gender === gender ? acc + 1 : acc;
  }, 0)
  //console.log(numberOfPeople);

  if(numberOfPeople > 0) {
    return result/numberOfPeople; 
  
  } else {
    return 0;
  }
    
 

}