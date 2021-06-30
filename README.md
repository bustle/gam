# gam
Typescript library for interfacing with Google Ad Manager

## Usage
Find full parameter documentation at https://support.google.com/admanager/answer/2623168
```typescript
import { createTaglessRequest } from 'gam'

const response = await createTaglessRequest({
  iu: '/1234/homepage', // Google Ad Manager ad unit code, including your Google Ad Manager network code
  sz: '320x50|300x50', // Creative size. To include multiple sizes use the pipe (|) character as a separator between them.
  c: 8362527364, // Correlator (or, cache-busting) value
  tile: 1, // Position of the tag on a webpage.
})

const creative = await response.body()
console.log({ creative })
```
