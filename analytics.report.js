export function generateReport(transfer, impact) {
  console.log("----- Whale Activity Report -----");
  console.log("From:", transfer.from);
  console.log("To:", transfer.to);
  console.log("Amount:", transfer.amount);
  console.log("Remaining Balance:", transfer.remainingBalance);
  console.log("Impact Level:", impact.impactLevel);
  console.log("--------------------------------");
}
