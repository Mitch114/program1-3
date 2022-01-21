/* one birth every 7 seconds */
/* one death every 30 seconds */
/* Every 60 seconds, a new immigrant entered the country */
/* Display what the population will be ten years from now. The current population is 412,000,000 */

population = 412,000,000
let m = 60 /* seconds in a minute*/
let h = 60 /* minutes in an hour*/
let d = 24  /* hours in a day*/
let y = 365 /* days in a year */
let x = 10 /* years to multiply */

 /* multiply each answer by x to get to 10 yr population */

immigrants = y * d * h * m
immigrants = immigrants * x

minutes = d * m
deaths = minutes * y * 2 /* multiply by 2 bc deaths happen every 30 seconds, not every minute */
deaths = deaths * x

births = population + y * d * h * m
births = births * x

population = population + births + immigrants - deaths

console.log("The total populaation after 10 years is: ", population)
