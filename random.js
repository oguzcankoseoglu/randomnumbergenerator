maxValueInput

wholeArray = Array.from(Array(maxValueInput).keys());

except = [];

leftOverArray = wholeArray.filter(x => !except.includes(x)).concat(except.filter(x => !wholeArray.includes(x)));

randomNumber = leftover[Math.floor(Math.random() * leftover.length)];

