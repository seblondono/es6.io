import { uniq } from 'lodash'; // importing a named export
import insane from 'insane';
import jsonp from 'jsonp'; // json.fetch does not work with jsonp, so we need to import this library
import { apiKey } from './src/config'; // or if export default use a name other than apiKey

console.log(apiKey);


const ages = [1,1,4,52,1];
console.log(uniq(ages));


