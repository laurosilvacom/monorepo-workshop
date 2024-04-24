function calculateLeaves(branchCount) {
  return branchCount * 50
}

let branchCount = 100 // number of branches

console.log(`The tree has approximately: `, calculateLeaves(branchCount), ' leaves 🍃')
