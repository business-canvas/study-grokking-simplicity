// action
function figurePayout(affiliate) {
  const owed = affiliate.sales * affiliate.commision
  if (owed > 1000) {
    sendPayout(affiliate.bank_code, owed)
  }
}

// action
function affiliatePayout(affiliates) {
  for (let a = 0; a < affiliates.length; a++) {
    // action
    figurePayout(affiliates[a])
  }
}

// action
function main(affiliates) {
  // action
  affiliatePayout(affiliates)
}
