

//STRING CONCATENATION WITH "BACK-TICK" CHARACTER

const icon = '👋';

// Template Strings
`hi ${icon}`;

// join() Method
['hi', icon].join(' ');

// Concat() Method
''.concat('hi ', icon);

// + Operator
'hi ' + icon;

// RESULT
// hi 👋