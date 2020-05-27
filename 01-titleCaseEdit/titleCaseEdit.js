function titleCaseEdit(title) {
  // Insert code here;
  let titleCase = title.split(" ");

 
  for (let i=0; i<titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].substr(1);
  }


  return titleCase.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
