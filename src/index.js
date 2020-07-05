import './index.css';//eslint-disable-line 
import numeral from 'numeral';
const courseval= numeral(1000).format('$0,0.00');
console.log(`the course value is ${courseval} for this awesome course`) //eslint-disable-line no-console