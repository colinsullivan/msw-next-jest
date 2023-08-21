# Test repo for msw@next with Jest import issues

This repository validates the latest msw version running in a jest environment.

## Setup

* Use Node.js 18
* `npm install`
* `npm run test`

## Results

```
npm run test

> test
> jest --no-cache ./src/

watchman warning:  Recrawled this watch 21 times, most recently because:
MustScanSubDirs UserDroppedTo resolve, please review the information on
https://facebook.github.io/watchman/docs/troubleshooting.html#recrawl
To clear this warning, run:
`watchman watch-del '/Users/colinsullivan/projects/msw-import-fail' ; watchman watch-project '/Users/colinsullivan/projects/msw-import-fail'`

 FAIL  src/test.test.ts
  ● Test suite failed to run

    Cannot find module 'msw/node' from 'src/testServer.ts'

    Require stack:
      src/testServer.ts
      src/test.test.ts

    > 1 | import { setupServer } from 'msw/node';
        | ^
      2 |
      3 | export const server = setupServer();
      4 |

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (src/testServer.ts:1:1)
      at Object.<anonymous> (src/test.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.042 s
Ran all test suites matching /.\/src\//i.
```

## Expected results

Import succeeds from within Jest.
