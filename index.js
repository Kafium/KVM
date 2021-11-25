const vm2 = require('vm2')

function parseContract (sourceCode) {
  return Buffer.from(sourceCode).toString('base64')
}

function runContract (contract) {
  const vm = new vm2.NodeVM({
    env: { 
      executer: contract.executer,
      amount: contract.amount
    }
  })

  return vm.run(Buffer.from(contract.code, 'base64').toString())
}

module.exports = { parseContract, runContract }