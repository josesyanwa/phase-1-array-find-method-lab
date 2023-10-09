// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];
  
  function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Example usage:
  const superBowlYear = superbowlWin(record);
  if (superBowlYear !== undefined) {
    console.log(`The Denver Broncos won the Superbowl in ${superBowlYear}`);
  } else {
    console.log("The Denver Broncos have not won the Superbowl.");
  }
  
