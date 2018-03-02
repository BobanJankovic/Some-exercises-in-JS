const getSleepHours = (day) => {
 if (day === 'Monday') {
    return 4;
  } else if (day ==="Tuesday") {
    return 5;
  }else if (day ==="Wednesday") {
    return 4;
  }else if (day ==="Thursday") {
    return 4;
  }else if (day ==="Friday") {
    return 5;
  }else if (day ==="Saturday") {
    return 10;
  }else if (day ==="Sunday") {
    return 10;
  } else   {
    console.log ("ne spavas");
  }
  };


const getActualSleepHours = () => {
return getSleepHours('Monday')+
getSleepHours("Tuesday")+
getSleepHours("Wednesday")+
getSleepHours("Thursday")+
getSleepHours("Friday")+
getSleepHours("Saturday")+
getSleepHours("Sunday");
};

const getIdealSleepHours = () => {
 let idealHours = 7.5;
  return idealHours * 7; 
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
if (actualSleepHours === idealSleepHours) {
  console.log('dobro je');
}

if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}

if (actualSleepHours > idealSleepHours) {
  console.log('mnogo spavas');
}
  
};

calculateSleepDebt();










