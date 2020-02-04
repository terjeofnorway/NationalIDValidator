[![](https://img.shields.io/npm/v/@deploythenscotch/national-id-validator?style=flat-square)](https://github.com/terjeofnorway/NationalIDValidator)
[![](https://img.shields.io/static/v1?label=coverage&message=96%&color=limegreen&style=flat-square)](https://github.com/terjeofnorway/NationalIDValidator)
[![](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/bundlephobia/minzip/@deploythenscotch/national-id-validator)](https://opensource.org/licenses/MIT)

# National Id

Allows you to both validate and create mock national IDs.

## Installation

```javascript
yarn add @deploythenscotch/national-id-validator
```

or

```javascript
npm install @deploythenscotch/national-id-validator
```

## Usage

### ES5

```javascript
const nationalID = require('@deploythenscotch/national-id-validator');
const isValidID = nationalID.isValid('18100749331');
```

### ES2016+

```javascript
import nationalID from @deploythenscotch/national-id-validator;
const isValidID = nationalID.isValid('18100749331');
```

## Methods

```javascript
import nationalID from @deploythenscotch/national-id-validator;

// Check if the ID is valid. Works with both "fødselsnummer" and "d-nummer".
// Returns true || false.
nationalID.isValid('18100749331'); // true;

// Get the type based on the ID.
// Returns 'FNUMBER' || 'DNUMBER'
nationalID.getTypeFromID('18100749331'); // 'FNUMBER'

// Get the gender based on the ID.
// Returns 'MALE' OR 'FEMALE'
nationalID.getGenderFromID('18100749331'); // 'MALE'

// Get the date from ID. Will return a native date object.
// Returns Date object
nationalID.getDateFromID('18100749331'); // Fri Oct 18 1907 01:00:00 GMT+0100
```
