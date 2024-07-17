const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,string){
    const sameDrivers = drivers.filter(function (driver){
        return string.toUpperCase() === driver.toUpperCase() 
  } );
  return sameDrivers;
}
   console.log(sameDrivers);

    

    function fuzzyMatch(drivers, beginningLetters) {
      const matchingDrivers = [];
      for (let i = 0; i < drivers.length; i++) {
          if (drivers[i].startsWith(beginningLetters)) {
              matchingDrivers.push(drivers[i]);
          }
      }
      return matchingDrivers;
    } 

    const  newdrivers = [
      {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
    ];

    function matchName(drivers, name){
      const newDrivers = drivers.filter(
        function(driver){
          return driver.name.toLowerCase() === name.toLowerCase();
    
        })
      return newDrivers;
    }