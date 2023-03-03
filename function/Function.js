export const calculateNumberPathAndArhetip = (selectedDate) => {
    const date = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear().toString();
    const yearSum = year.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    let digitPath = (date + month + yearSum).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  
    while (digitPath > 9) {
      digitPath = digitPath.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
  
    // вычисляем архетип
    let arhetip;
    if (date < 10) {
      arhetip = date;
    } else if (date === 29) {
      arhetip = 2;
    } else {
      const firstDigit = date.toString().charAt(0);
      const secondDigit = date.toString().charAt(1);
      arhetip = parseInt(firstDigit) + parseInt(secondDigit);
    }
  
    while (arhetip > 9) {
      arhetip = arhetip.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
  
    return { digitPath, arhetip };
  };
  