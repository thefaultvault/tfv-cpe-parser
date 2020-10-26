# tfv-cpe-parser
This library is used to parse cpe (common product enumerations) strings according to NIST standards. It can parse either uri binding cpe values or formatted binding cpe values. The parser will return an object with the corresponding values from the string.

### Examples
```javascript
const CPEParser = require('@thefaultvault/tfv-cpe-parser');
const cpeParser = new CPEParser.CpeParser();
//'formatted' binding
let cpe = cpeParser.parse(`cpe:2.3:h:f5:big-ip_protocol_security_manager:10.2.3:*:*:*:*:*:*:*`);
/** 
 * cpe => 
 *  {
 *       part: 'h',
 *       vendor: 'f5',
 *       product: 'big-ip protocol security manager',
 *       version: '10.2.3',
 *       update: '*',
 *       edition: '*',
 *       language: '*',
 *       sw_edition: '*',
 *       target_sw: '*',
 *       target_hw: '*',
 *       other: '*' 
 *   }
 * */
//'uri' binding
let cpe = cpeParser.parse(`cpe:/a:search_autocomplete_project:search_autocomplete:7.x-3.0:rc3:~~~drupal~~`);
/** 
 * cpe => 
 *  {
 *       part: 'a',
 *       vendor: 'search autocomplete project',
 *       product: 'search autocomplete',
 *       version: '7.x-3.0',
 *       update: 'rc3',
 *       edition: '*',
 *       language: '*',
 *       sw_edition: '*',
 *       target_sw: 'drupal',
 *       target_hw: '*',
 *       other: '*' 
 *   }
 * */
```
Default values are returned as asterisks '*' that represent ANY.

### NIST Documentation
This library follows the guidelines outline here: 
https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir7695.pdf
