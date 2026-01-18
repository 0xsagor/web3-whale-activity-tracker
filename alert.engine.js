export function triggerAlert(impact) {
  if (impact.impactLevel === "High") {
    console.log("ALERT: High impact whale transaction detected");
  }
}
