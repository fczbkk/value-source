# Value Source

Getter for values from various sources, with JSON-friendly config.

[![npm](https://img.shields.io/npm/v/@fczbkk/value-source.svg?maxAge=2592000)](https://www.npmjs.com/package/@fczbkk/value-source)
[![npm](https://img.shields.io/github/license/fczbkk/value-source.svg?maxAge=2592000)](https://github.com/fczbkk/value-source/blob/master/LICENSE)
[![David](https://img.shields.io/david/fczbkk/value-source.svg?maxAge=2592000)](https://david-dm.org/fczbkk/value-source)
[![Travis](https://img.shields.io/travis/fczbkk/value-source.svg?maxAge=2592000)](https://travis-ci.org/fczbkk/value-source)

## How to use

Install the library via NPM:

```shell
npm install @fczbkk/value-source --save
```

Then use in your project like this:

```javascript
import {constructSourceGetter} from '@fczbkk/value-source';

// create getter with default sources 
const my_sources = constructSourceGetter();

// get simple value
my_sources.getValue({source: 'direct', parameters: ['aaa']}); // "aaa"

// get value of global property
window.aaa = {bbb: 'ccc'};
my_sources.getValue({source: 'global', parameters: ['aaa.bbb']}); // "ccc"

// get element
my_sources.getValue({source: 'element', parameters: ['body']}); // document.body
```

You can set your own sources:

```javascript
my_sources.addSources({
  square: function (input) {return input * input;}
});

my_sources.getValue({source: 'square', parameters: [2]}); // 4
```

You can remove sources:

```javascript
my_sources.removeSources(['square']);
```

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### SourcesList

Object containing getter functions. The keys are names, the values are either functions or other SourcesList objects.

**Parameters**

-   `value`  

### SourcePathList

Single path or list of paths to sources properties.

**Parameters**

-   `value`  

### GetValueConfig

**Parameters**

-   `value`  

**Properties**

-   `source` **[SourcePathList](#sourcepathlist)** First non-null value returned by getters will be returned.
-   `parameters` **(any | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))** List of parameters to be used when calling source getters. Single item of any other type than Array will be converted to Array.
-   `default_value` **\[any]** Value to be returned when sources do not produce any non-null value.

### SourcePath

Dot separated path to a property inside SourcesList.

**Parameters**

-   `value`  

### getValueFromSource

Returns value from selected source(s).

**Parameters**

-   `sources` **\[[SourcesList](#sourceslist)](default {})** 
-   `config` **[GetValueConfig](#getvalueconfig)** 
-   `$1` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `$1.source`   (optional, default `[]`)
    -   `$1.parameters`   (optional, default `[]`)
    -   `$1.default_value`   (optional, default `null`)

Returns **any** 

### constructSourceGetter

Constructs object with methods for working with sources and `getValue` method to execute `getValueFromSource` on them.

**Parameters**

-   `sources` **\[[SourcesList](#sourceslist)]**  (optional, default `default_sources`)

Returns **{getSources: [getSources](#getsources), setSources: [setSources](#setsources), addSources: [addSources](#addsources), removeSources: [removeSources](#removesources), getValue: [getValue](#getvalue)}** 

### getSources

Returns currently set sources list.

Returns **[SourcesList](#sourceslist)** 

### setSources

Replaces existing sources with new ones.

**Parameters**

-   `sources` **[SourcesList](#sourceslist)** 

Returns **[SourcesList](#sourceslist)** 

### addSources

Adds sources to existing ones.

**Parameters**

-   `sources` **[SourcesList](#sourceslist)** 

Returns **[SourcesList](#sourceslist)** 

### removeSources

Removes specific sources by paths.

**Parameters**

-   `sources` **\[[SourcePathList](#sourcepathlist)](default \[])** 

Returns **[SourcesList](#sourceslist)** 

### getValue

Applies `getValueFromSource` on currently set sources.

**Parameters**

-   `config` **[GetValueConfig](#getvalueconfig)** 

Returns **any** 

### default_sources

Source of predefined source getters.

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/value-source/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

Value Source is published under the [MIT license](https://github.com/fczbkk/value-source/blob/master/LICENSE).
