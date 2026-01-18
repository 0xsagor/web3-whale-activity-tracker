export function analyzeImpact(transfer) {
  const level = transfer.amount > 5000 ? "High" : "Normal";

  return {
    txHash: transfer.txHash,
    impactLevel: level
  };
}
