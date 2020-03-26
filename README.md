# Cypress visual regression example (screenshot comparison)

[![Ashot](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/palmerhq/cypress-image-snapshot)
> "cypress-image-snapshot": "^3.1.1"

This repo an example of how to use visual regression (screenshot comparison) + cypress

![diff-example.png](diff-example.png)

#### TODO
- [x] integrate with Circle
- [x] add mochawesome html
    - [ ] add failed screenshot to mochawesome html
- [ ] play with `Threshold`
- [ ] make full screenshot
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
