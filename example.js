const KVM = require('./index')

const exampleContract = `
console.log('Hello World')
`

const contract = KVM.parseContract(exampleContract)
KVM.runContract(contract)