export function simulateTransfer(whale, target, amount) {
  console.log("Simulating whale transfer...");

  whale.balance -= amount;

  return {
    from: whale.address,
    to: target,
    amount,
    remainingBalance: whale.balance,
    txHash: "0xWHALETX123456789"
  };
}
