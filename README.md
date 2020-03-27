# Cypress visual regression example (screenshot comparison)

[![NPM][npm-icon]][npm-url]

This repo an example of how to use visual regression (screenshot comparison) + cypress

![diff-example.png](diff-example.png)

#### TODO
- [x] integrate with Circle
- [x] add mochawesome html
    - [ ] add failed screenshot to mochawesome html report
- [ ] play with `Threshold` to make tests stable in circleic
- [ ] find the way of making full screenshot
```javascript
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
});
```

## CircleCI [![CircleCI](https://circleci.com/gh/Ebazhanov/cypress-visual-regression-example.svg?style=svg)](https://circleci.com/gh/Ebazhanov/cypress-visual-regression-example)
#### An example of screenshot diff [here in circleci job](https://20-248710227-gh.circle-artifacts.com/0/cypress/snapshots/failed.test.js/__diff_output__/Visual%20regression%20tests%20--%20should.diff.png)

<img src="https://monosnap.com/image/d9HHOwwOPESPmnhhz8XMNQtcXHV1fe"/>

[npm-icon]: https://nodei.co/npm/cypress-image-snapshot.svg?downloads=true
[npm-url]: https://www.npmjs.com/package/cypress-image-snapshot
