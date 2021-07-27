const bytenode = require('./src/bytenode')
const vm2 = require('vm2')

function parseContract (sourceCode) {
  return bytenode.compileCode(sourceCode)
}

function runContract (byteCode) {
  const vm = new vm2.NodeVM({
    require: {
      context: 'sandbox',
      external: true,
      import: [ './src/bytenode' ],
      builtin: [ 'v8', 'vm', 'fs', 'path', 'module', 'child_process' ],
      root: "./"
    },
    env: { byteCode: Buffer.from(byteCode) }
  })

  return vm.run(`(bytenode.runBytecode(process.env.byteCode))`)
}

module.exports = { parseContract, runContract }