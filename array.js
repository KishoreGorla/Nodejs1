
var grades = [100,25];
var totalGrade  = 0;

grades.push(98);

grades.forEach(function (grades){

	totalGrade += grades;
	console.log('Current grade is '+ totalGrade);
});

console.log('Average grade = '+ totalGrade/grades.length);