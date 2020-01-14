import { assert } from 'chai';

import { Cpe } from '../src/cpe';
import { CpeParser } from '../src/cpe_parser';

const cpeParser = new CpeParser();

describe("Testing cpe parser", () => {
    it(`can parse valid 2.3 cpe string with an 'a' type`, function () {
        const actual = cpeParser.parseCpe23(`cpe:2.3:a:subscribe2_project:subscribe2:10.17.2:*:*:*:*:wordpress:*:*`);
        const expected = new Cpe();
        expected.part = 'a';
        expected.vendor = 'subscribe2 project';
        expected.product = 'subscribe2';
        expected.version = '10.17.2';
        expected.update = '*';
        expected.edition = '*';
        expected.language = '*';
        expected.sw_edition = '*';
        expected.target_sw = 'wordpress';
        expected.target_hw = '*';
        expected.other = '*';
        assert.deepEqual(actual, expected);
    });

    it(`can parse valid 2.3 cpe string with an 'o' type`, function () {
        const actual = cpeParser.parseCpe23(`cpe:2.3:o:juniper:netscreen_screenos:3.0.3r3:*:*:*:*:*:*:*`);
        const expected = new Cpe();
        expected.part = 'o';
        expected.vendor = 'juniper';
        expected.product = 'netscreen screenos';
        expected.version = '3.0.3r3';
        expected.update = '*';
        expected.edition = '*';
        expected.language = '*';
        expected.sw_edition = '*';
        expected.target_sw = '*';
        expected.target_hw = '*';
        expected.other = '*';
        assert.deepEqual(actual, expected);
    });

    it(`can parse valid 2.3 cpe string with an 'h' type`, function () {
        const actual = cpeParser.parseCpe23(`cpe:2.3:h:f5:big-ip_protocol_security_manager:10.2.3:*:*:*:*:*:*:*`);
        const expected = new Cpe();
        expected.part = 'h';
        expected.vendor = 'f5';
        expected.product = 'big-ip protocol security manager';
        expected.version = '10.2.3';
        expected.update = '*';
        expected.edition = '*';
        expected.language = '*';
        expected.sw_edition = '*';
        expected.target_sw = '*';
        expected.target_hw = '*';
        expected.other = '*';
        console.dir(actual);
        assert.deepEqual(actual, expected);
    });
});