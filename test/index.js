const path = require('path');
const fs = require('fs');
const Ajv = require('ajv');
const msg = {
  ok: ':) Test passed, OK!',
  error: ':( Test failed, ERROR!',
  missingType: ';| Test DID NOT PASS but only because example is missing a "type" property' +
    ' somewhere!\nActivityPub (!) says "All objects have the following properties: type"'
}
const color = {
  yellow: '\x1b[33m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m'
}
/* NOTE
  We test every schema anyway, so we preload all and validate them synchronous here,
  in production: do asynchronous validation with a loader
*/
const basePath = path.join(__dirname,'../');
const baseSchemas = [`${basePath}/JSONLD.json`, `${basePath}/ActivityPub.json`];
const typeSchemas = fs.readdirSync(`${basePath}/type`)
  .filter((f) => /^[a-z]+[.]json$/i.test(f)).map((f) => `${basePath}/type/${f}`);
const schemas = [...baseSchemas, ...typeSchemas].map((f) => require(f));

const ajv = new Ajv({schemas, allErrors: true});
console.log('Testing all the examples from ');
console.log('https://www.w3.org/TR/activitystreams-vocabulary : ');
const examples = require('./examples/ActivityVocabularyExamples.json').map((a) => {
  var V = ajv.validate('http://www.w3.org/ns/activitystreams/ActivityPub.json', a[1]);
  a[1] = V || ajv.errors[0];
  console.log(' '); console.log(a[0]);
  if (a[1] === true) {
    console.log(color.green, msg.ok);
  } else if (typeof a[1] === 'object') {
    if (a[1].keyword === 'type' || (a[1].params.missingProperty === 'type')) {
      console.log(color.yellow, msg.missingType);
    } else {
      console.log(color.red, msg.error);
      if (a[0] === 'Example 146') {
        console.log(color.green, 'BUT ISSUE EXISTS : github.com/w3c/activitystreams/issues/445');
      }
      console.log(JSON.stringify(ajv.errors));
    }
  }
  return a;
});
//console.log(JSON.stringify(examples))


/*
// The examples from https://www.w3.org/TR/activitystreams-vocabulary :
// HTML markup to JSON were made with :
// FIXME https://github.com/w3c/activitystreams/issues/448
  var a = [];
  $('.example').each((i,ex) => {
  	var exTitle = ex.querySelector('.example-title').textContent;
  	var exText = ex.querySelector('.highlight.json').textContent;
    a = a.concat([[exTitle, JSON.parse(exText)]]);
  });
  console.log(JSON.stringify(a))
*/
