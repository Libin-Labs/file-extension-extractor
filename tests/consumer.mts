import * as api from '@lp-labs/file-extension-extractor';
import { fileExtension } from '@lp-labs/file-extension-extractor';
console.log(fileExtension('C:/images/Photo.PNG'));
// @ts-expect-error invalid argument must be rejected by declarations
api.fileExtension(1);
