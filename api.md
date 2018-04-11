# Snippet API Guidline

### javascript, javascriptreact, typescript, typescriptreact

| prefix | body | description |
| --- | --- | --- |
| log | `console.log(${1})` | Log output to console |
| clg | `console.log(${1})` | Log output to console |
| imp | `import ${2:moduleName} from '${1:module}'` | Imports entire module statement in ES6 syntax |
| imd | `import { ${2} } from '${1:module}'` | Imports only a portion of the module in ES6 syntax |
| ime | `import * as ${2:alias} from '${1:module}'` | Imports everything as alias from the module in ES6 syntax |
| enf | `export const ${1:functionName} = ${2:params} => {↩⇥↩}↩` | Export named function in ES6 syntax |
| edf | `export default ${1:params} => {↩⇥↩}↩` | Export default function in ES6 syntax |
| ecle | `export default class ${1:className} extends ${2:baseclassName} {↩⇥↩}↩` | Export default class which extends a base one in ES6 syntax |
| anfn | `${1:params} => {↩⇥${2}↩}` | Creates an anonymous function in ES6 syntax |
| confn | `const ${1:name} = ${2:params} => {↩⇥${3}↩}` | Creates a named function in ES6 syntax |
| con | `const ${1:name} = ${2:value}` | Const assignment |
| let | `let ${1:name} = ${2:value}` | Let assignment |
| if | `if (${1}) {  }` | If statement |
| else | `else {  }` | Else statement |
| ife | `if (${1:condition}) {↩⇥↩} else {↩⇥↩}` | If/else statement |
| elsei | `else if (${1}) { ${2} }` | Else if statement |
| ter | `${1:condition} ? ${2:expression} : ${3:expression}` | Ternary operator |
| for | `for (let ${1:index} = 0; ${1:index} < ${2:length}; ${1:index} += 1) {↩⇥↩}` | For loop |
| forin | `for (let ${1:key} in ${2:array}) {↩⇥if (${2:array}.hasOwnProperty(${1:key})) {↩⇥⇥↩⇥}↩}` | For in loop |
| forof | `for (let ${1:key} of ${2:array}) {↩⇥↩}` | For of loop (ES6) |
| while | `while (${1:condition}) {↩⇥↩}` | While loop |
| tryc | `try {↩⇥${1}↩} catch (err) {↩⇥↩}` | Try/catch |
| switch | `switch (${1:expr}) {↩⇥case ${2:value}:↩⇥⇥return ↩⇥default:↩⇥⇥return↩}` | Switch case |
| func | `function ${1:name} (${2:arguments}) {↩⇥↩}` | Named function |
| iife | `((${1:arguments}) => {↩⇥↩})(${2})` | Immediately-invoked function expression (IIFE) |
| fu | `(${1:arguments}) => ${2:statement}` | Simple arrow function (ES6) |
| function* | `function* ${1:name}(${2:arguments}) {↩⇥↩}` | Generator function (ES6) |
| foreach | `forEach(${1:item} => )` | ForEach loop |
| map | `map(${1:item} => )` | Map array |
| reduce | `reduce((${1:previous}, ${2:current}) => {↩⇥↩}${3:, initial})` | Reduce array |
| filter | `filter(${1:item} => {↩⇥↩})` | Filter array |
| constr | `constructor(${1:arguments}) {↩⇥super(${1:arguments})↩}` | Class constructor (ES6) |
| ret | `return ` | Return |
| returnP | `return new Promise((resolve, reject) => {↩⇥↩})` | Return Promise (ES6) |
| re | `require('${1:module}')` | Require |
| conreq | `const ${1:name} = require('${2:module}')` | Require assignment |
| exports | `exports.${1:member} = ${2:value}` | exports.member |
| module | `module.exports = ${1:name}` | module.exports |
| describe | `describe('${1:description}', () => {↩⇥↩})` | BDD describe |
| it | `it('${1:description}', () => {↩⇥↩})` | TDD it |
| setTimeout | `setTimeout(() => {↩⇥↩}, ${1:delay})` | SetTimeout |
| setInterval | `setInterval(() => {↩⇥↩}, ${1:delay})` | SetInterval |
| setImmediate | `setImmediate(() => {↩⇥↩})` | SetImmediate |
| pnt | `process.nextTick(() => {↩⇥↩})` | Process nextTick |
| us | `'use strict'` | Insert 'use strict' statement |


### html

| prefix | body | description |
| --- | --- | --- |
| doctype | `<!DOCTYPE>↩` | Defines the document type |
| a | `<a href="${1}">${2}</a>${3}` | Defines a hyperlink |
| abbr | `<abbr title="${1}">${2}</abbr>${3}` | Defines an abbreviation |
| address | `<address>↩${1}↩</address>` | Defines an address element |
| area | `<area shape="${1}" coords="${2}" href="${3}" alt="${4}">${5}` | Defines an area inside an image map |
| article | `<article>↩⇥${1}↩</article>` | Defines an article |
| aside | `<aside>↩⇥${1}↩</aside>${2}` | Defines content aside from the page content |
| audio | `<audio controls>↩⇥${1}↩</audio>` | Defines sounds content |
| b | `<b>${1}</b>${2}` | Defines bold text |
| base | `<base href="${1}" target="${2}">${3}` | Defines a base URL for all the links in a page |
| bdi | `<bdi>${1}</bdi>${2}` | Used to isolate text that is of unknown directionality |
| bdo | `<bdo dir="${1}">↩${2}↩</bdo>` | Defines the direction of text display |
| big | `<big>${1}</big>${2}` | Used to make text bigger |
| blockquote | `<blockquote cite="${2}">↩⇥${1}↩</blockquote>` | Defines a long quotation |
| body | `<body>↩⇥${1}↩</body>` | Defines the body element |
| br | `<br>` | Inserts a single line break |
| button | `<button type="${1}">${2}</button>${3}` | Defines a push button |
| canvas | `<canvas id="${1}">${2}</canvas>${3}` | Defines graphics |
| caption | `<caption>${1}</caption>${2}` | Defines a table caption |
| cite | `<cite>${1}</cite>${2}` | Defines a citation |
| code | `<code>${1}</code>${2}` | Defines computer code text |
| col | `<col>${2}` | Defines attributes for table columns |
| colgroup | `<colgroup>↩⇥${1}↩</colgroup>` | Defines group of table columns |
| command | `<command>${1}</command>${2}` | Defines a command button [not supported] |
| datalist | `<datalist>↩⇥${1}↩</datalist>` | Defines a dropdown list |
| dd | `<dd>${1}</dd>${2}` | Defines a definition description |
| del | `<del>${1}</del>${2}` | Defines deleted text |
| details | `<details>↩⇥${1}↩</details>` | Defines details of an element |
| dialog | `<dialog>${1}</dialog>${2}` | Defines a dialog (conversation) |
| dfn | `<dfn>${1}</dfn>${2}` | Defines a definition term |
| div | `<div>↩⇥${1}↩</div>` | Defines a section in a document |
| dl | `<dl>↩⇥${1}↩</dl>` | Defines a definition list |
| dt | `<dt>${1}</dt>${2}` | Defines a definition term |
| em | `<em>${1}</em>${2}` | Defines emphasized text |
| embed | `<embed src="${1}">${2}` | Defines external interactive content ot plugin |
| fieldset | `<fieldset>↩⇥${1}↩</fieldset>` | Defines a fieldset |
| figcaption | `<figcaption>${1}</figcaption>${2}` | Defines a caption for a figure |
| figure | `<figure>↩⇥${1}↩</figure>` | Defines a group of media content, and their caption |
| footer | `<footer>↩⇥${1}↩</footer>` | Defines a footer for a section or page |
| form | `<form>↩⇥${1}↩</form>` | Defines a form |
| h1 | `<h1>${1}</h1>${2}` | Defines header 1 |
| h2 | `<h2>${1}</h2>${2}` | Defines header 2 |
| h3 | `<h3>${1}</h3>${2}` | Defines header 3 |
| h4 | `<h4>${1}</h4>${2}` | Defines header 4 |
| h5 | `<h5>${1}</h5>${2}` | Defines header 5 |
| h6 | `<h6>${1}</h6>${2}` | Defines header 6 |
| head | `<head>↩⇥${1}↩</head>` | Defines information about the document |
| header | `<header>↩⇥${1}↩</header>` | Defines a header for a section of page |
| hgroup | `<hgroup>↩⇥${1}↩</hgroup>` | Defines information about a section in a document |
| hr | `<hr>` | Defines a horizontal rule |
| html | `<html>↩⇥${1}↩</html>` | Defines an html document |
| html5 | `<!DOCTYPE html>↩<html lang="${1}en">↩⇥<head>↩⇥⇥<title>${2}</title>↩⇥⇥<meta charset="UTF-8">↩⇥⇥<meta name="viewport" content="width=device-width, initial-scale=1">↩⇥⇥<link href="${3}css/style.css" rel="stylesheet">↩⇥</head>↩⇥<body>↩⇥${4}↩⇥</body>↩</html>` | Defines a template for a html5 document |
| i | `<i>${1}</i>${2}` | Defines italic text |
| iframe | `<iframe src="${1}">${2}</iframe>${3}` | Defines an inline sub window |
| img | `<img src="${1}" alt="${2}">${3}` | Defines an image |
| input | `<input type="${1}" name="${2}" value="${3}">${4}` | Defines an input field |
| ins | `<ins>${1}</ins>${2}` | Defines inserted text |
| keygen | `<keygen name="${1}">${2}` | Defines a generated key in a form |
| kbd | `<kbd>${1}</kbd>${2}` | Defines keyboard text |
| label | `<label for="${1}">${2}</label>${3}` | Defines an inline window |
| legend | `<legend>${1}</legend>${2}` | Defines a title in a fieldset |
| li | `<li>${1}</li>${2}` | Defines a list item |
| link | `<link rel="${1}" type="${2}" href="${3}">${4}` | Defines a resource reference |
| main | `<main>↩⇥${1}↩</main>` | Defines an image map |
| map | `<map name="${1}">↩⇥${2}↩</map>` | Defines an image map |
| mark | `<mark>${1}</mark>${2}` | Defines marked text |
| menu | `<menu>↩⇥${1}↩</menu>` | Defines a menu list |
| menuitem | `<menuitem>${1}</menuitem>${2}` | Defines a menu item [firefox only] |
| meta | `<meta name="${1}" content="${2}">${3}` | Defines meta information |
| meter | `<meter value="${1}">${2}</meter>${3}` | Defines measurement within a predefined range |
| nav | `<nav>↩⇥${1}↩</nav>` | Defines navigation links |
| noscript | `<noscript>↩${1}↩</noscript>` | Defines a noscript section |
| object | `<object width="${1}" height="${2}" data="${3}">${4}</object>${5}` | Defines an embedded object |
| ol | `<ol>↩⇥${1}↩</ol>` | Defines an ordered list |
| optgroup | `<optgroup>↩⇥${1}↩</optgroup>` | Defines an option group |
| option | `<option value="${1}">${2}</option>${3}` | Defines an option in a drop-down list |
| output | `<output name="${1}" for="${2}">${3}</output>${4}` | Defines some types of output |
| p | `<p>${1}</p>${2}` | Defines a paragraph |
| param | `<param name="${1}" value="${2}">${3}` | Defines a parameter for an object |
| pre | `<pre>${1}</pre>` | Defines preformatted text |
| progress | `<progress value="${1}" max="${2}">${3}</progress>${4}` | Defines progress of a task of any kind |
| q | `<q>${1}</q>${2}` | Defines a short quotation |
| rp | `<rp>${1}</rp>${2}` | Used in ruby annotations to define what to show browsers that do not support the ruby element |
| rt | `<rt>${1}</rt>${2}` | Defines explanation to ruby annotations |
| ruby | `<ruby>↩${1}↩</ruby>` | Defines ruby annotations |
| s | `<s>${1}</s>${2}` | Used to define strikethrough text |
| samp | `<samp>${1}</samp>${2}` | Defines sample computer code |
| script | `<script>↩⇥${1}↩</script>` | Defines a script |
| section | `<section>↩⇥${1}↩</section>` | Defines a section |
| select | `<select>↩⇥${1}↩</select>` | Defines a selectable list |
| small | `<small>${1}</small>${2}` | Defines small text |
| source | `<source src="${1}" type="${2}">${3}` | Defines media resource |
| span | `<span>${1}</span>${2}` | Defines a section in a document |
| strong | `<strong>${1}</strong>${2}` | Defines strong text |
| style | `<style>↩${1}↩</style>` | Defines a style definition |
| sub | `<sub>${1}</sub>${2}` | Defines sub-scripted text |
| sup | `<sup>${1}</sup>${2}` | Defines super-scripted text |
| summary | `<summary>${1}</summary>${2}` | Defines a visible heading for the detail element [limited support] |
| table | `<table>↩⇥${1}↩</table>` | Defines a table |
| tbody | `<tbody>↩⇥${1}↩</tbody>` | Defines a table body |
| td | `<td>${1}</td>${2}` | Defines a table cell |
| textarea | `<textarea rows="${1}" cols="${2}">${3}</textarea>${4}` | Defines a text area |
| tfoot | `<tfoot>↩⇥${1}↩</tfoot>` | Defines a table footer |
| thead | `<thead>↩${1}↩</thead>` | Defines a table head |
| th | `<th>${1}</th>${2}` | Defines a table header |
| time | `<time datetime="${1}">${2}</time>${3}` | Defines a date/time |
| title | `<title>${1}</title>` | Defines the document title |
| tr | `<tr>${1}</tr>${2}` | Defines a table row |
| track | `<track src="${1}" kind="${2}" srclang="${3}" label="${4}">${5}` | Defines a table row |
| u | `<u>${1}</u>${2}` | Used to define underlined text |
| ul | `<ul>↩⇥${1}↩</ul>` | Defines an unordered list |
| var | `<var>${1}</var>${2}` | Defines a variable |
| video | `<video width="${1}" height="${2}" controls>↩⇥${3}↩</video>` | Defines a video |


### shellscript

| prefix | body | description |
| --- | --- | --- |
| bash | `#!/bin/bash↩` | executer |
| echo | `echo ${0:massage}` | echo message |
| read | `read ${0:VAR}` | read input |
| if | `if ${0:condition} ↩then↩⇥${1}↩fi` | if |
| elseif | `elif ${0:condition} ↩then↩⇥${1}` | elseif |
| else | `else↩⇥` | else |
| test_string_empty | `test -z $${0:VAR}` | test string empty |
| test_string_equal | `test $${0:VAR1} = $${1:VAR2}` | test string equal |
| test_string_not_empty | `test -n $${0:VAR}` | test string not empty |
| test_string_not_equal | `test $${0:VAR1} != $${1:VAR2}` | test string not equal |
| test_int_equal | `test $${0:VAR1} -eq $${1:VAR2}` | test int equal |
| test_int_great_equal | `test $${0:VAR1} -ge $${1:VAR2}` | test int great equal |
| test_int_great_than | `test $${0:VAR1} -gt $${1:VAR2}` | test int great than |
| test_int_less_equal | `test $${0:VAR1} -le $${1:VAR2}` | test int less equal |
| test_int_less_than | `test $${0:VAR1} -lt $${1:VAR2}` | test int less than |
| test_int_not_equal | `test $${0:VAR1} -ne $${1:VAR2}` | test int not equal |
| test_exist | `test -e $${0:VAR}` | test exist |
| test_exist_file | `test -f $${0:VAR}` | test exist file |
| test_exist_directory | `test -d $${0:VAR}` | test exist directory |
| test_exist_readable | `test -r $${0:VAR}` | test exist readable |
| test_exist_writeable | `test -w $${0:VAR}` | test exist writeable |
| test_exist_executable | `test -x $${0:VAR}` | test exist executable |
| test_exist_link | `test -h $${0:VAR}` | test exist link |
| test_file_equal | `test $${0:VAR} -ef $${1:VAR}` | test file equal |
| test_file_new_than | `test $${0:VAR} -nt $${1:VAR}` | test file new than |
| test_file_old_than | `test $${0:VAR} -ot $${1:VAR}` | test file old than |
| for_in | `for ${0:VAR} in $${1:LIST}↩do↩⇥echo $${0:VAR}↩done↩` | for loop in list |
| for_i | `for((${0:i}=0;${0:i}<${1:10};${0:i}++));↩do↩⇥echo $${0:i}↩done↩` | for loop by index |
| while | `while ${0:condition} ↩do↩⇥${1}↩done↩` | while loop by condition |
| until | `until ${0:condition} ↩do↩⇥${1}↩done↩` | until loop by condition |
| function | `function ${0:name}()↩{↩⇥${1}↩}` | define a function |
| case | `case $${0:VAR} in↩⇥${1:1}) echo 1↩⇥;;↩⇥${2:2|3}) echo 2 or 3↩⇥;;↩⇥*) echo default↩⇥;;↩esac↩` | switch case |
| break | `break ` | break loop or (n) loops |
| expr | `expr ${0:1 + 1}` | calculate numbers |


