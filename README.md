# regex-jmbg

Regular expression for [JMBG](http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number).

## Installation

```sh
npm install regex-jmbg --save
```

## Examples

```js
var jmbg = require('regex-jmbg');

jmbg().test('1304005111059'); // => true
jmbg().test('3213973392147'); // => false

jmbg().exec('1304005111059');
// => [0] '1304005111059'
// => [1] '13'
// => [2] '04'
// => [3] '005'
// => [4] '11'
// => [5] '105'
// => [6] '9'
```

### Match groups

* `[0]`: full JMBG
* `[1]`: day of birth
* `[2]`: month of birth
* `[3]`: last three digits of the year of birth
* `[4]`: political region of birth
* `[5]`: unique number of the particular political region
* `[6]`: control number

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
