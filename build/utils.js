exports.camel = function (str, splitStr) {
  splitStr = splitStr || '.'
  str = '' + str
  return str.split(splitStr).reduce(function (c, a) {
    return c + a[ 0 ].toUpperCase() + a.slice(1, a.length)
  })
}