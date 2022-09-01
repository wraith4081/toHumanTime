# toHumanTime
It outputs the seconds data it receives in the format "xx days, xx hours, xx minutes and xx seconds".

## Examples
```js
fancyTimeFormat(100)
// '01 minute and 40 seconds'

fancyTimeFormat(52)
// '52 seconds'

fancyTimeFormat(16723)
// '04 hours, 38 minutes and 43 seconds'

fancyTimeFormat(283712)
// '03 days, 06 hours, 48 minutes and 32 seconds'

fancyTimeFormat(2143119)
// '24 days, 19 hours, 18 minutes and 39 seconds'

fancyTimeFormat(31931142)
// '369 days, 13 hours, 45 minutes and 42 seconds'
```

## Bugs
If second data is bigger than, 185542587187199; Code works like:
```js
const second = 185542587187200
const seconds = second % 185542587187199
// 1

fancyTimeFormat(seconds)

// so when u try enter bigger than 185542587187199, the code returns,

fancyTimeFormat(185542587187200)
// null
```
