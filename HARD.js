const Person = function(){
    
    let pii ={
        name:"Tyra",
        ssn:""
    };
    
    const getName= () => pii.name
  const setName= name => pii.name = name;
  return function() {
      return {
          getName,
          setName
      }
  }
}();

getName