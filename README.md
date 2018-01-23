
<img src="https://raw.githubusercontent.com/redaktor/style/master/assets/readme/logo.png" width="36" height="auto" align="right">

### ActivityPub JSON Schema
an inofficial proposal (JSON Schema, draft 07)<br>
[![-](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/lineBlue.png)](#)<br>

Specifications: <br>
https://www.w3.org/TR/activitypub/ <br>
https://www.w3.org/TR/activitystreams-vocabulary/ <br>
https://www.w3.org/TR/activitystreams-core/ <br>

**Work in Progress**

## Story

Any implementor of ActivityPub wants to validate incoming data or build forms for any ActivityPub type.<br>
[JSON Schema](http://json-schema.org) is a language independent way to describe, document and validate the Specification.

 `/ActivityPub.json` is the JSON Schema you start with … <br>
 All the other schemas are in `/type/`

## How do I use this package?

With any software consuming JSON Schema draft 07 … <br>
A node.js script to validate all the examples from [activitystreams-vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) is included:<br>
- `cd` to the project root
- `npm i`
- `npm test`


## How do I contribute?

Fork, edit, pull ...
Raise issues ...

**NOTE**
There are blocking issues that need to be resolved before we can go on:<br>
https://github.com/w3c/activitystreams/issues/437 <br>
https://github.com/w3c/activitystreams/issues/443 <br>
https://github.com/w3c/activitystreams/issues/157 <br>
https://github.com/w3c/activitypub/issues/290 <br>
https://github.com/w3c/activitypub/issues/291 <br>



## Licensing information

MIT
