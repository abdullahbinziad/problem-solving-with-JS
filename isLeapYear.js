function isLeapYear(year) {
  return year % 400 == 0 ? `${year} is Leay Year`
    : year % 4 == 0 && year % 100 !== 0
    ? `${year} is Leay Year`
    : `${year} is Not Leay Year`
}

document.write(isLeapYear(prompt("Enter the year")));
