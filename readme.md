# tfv-cpe-parser
This library is used to parse cpe (common product enumerations) from NIST. Currently it will only parse
cpe 23 strings. The parser will return an object with the corresponding values from the string.

### Examples
```javascript
let cpeParser = new CpeParser();
let cpe = cpeParser.parseCpe23(`cpe:2.3:h:f5:big-ip_protocol_security_manager:10.2.3:*:*:*:*:*:*:*`);

/** 
 * cpe => 
 * 
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
```
