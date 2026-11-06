import * as api from '@lp-labs/unicode-scalar-iterator';
import { unicodeScalars } from '@lp-labs/unicode-scalar-iterator';
console.log(unicodeScalars('A😀é'));
// @ts-expect-error invalid argument must be rejected by declarations
api.unicodeScalars(1);
