const KVM = require('./index')

const exampleContract = `
function helloWorld() {
  console.log('Hello World')
}
`
const contract = KVM.parseContract(exampleContract)
console.log(contract)
