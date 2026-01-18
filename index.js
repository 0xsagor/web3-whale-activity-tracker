import { connectRPC } from "./rpc.client.js";
import { loadWhales } from "./whale.registry.js";
import { simulateTransfer } from "./transfer.engine.js";
import { analyzeImpact } from "./impact.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Whale Activity Tracker");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const whales = loadWhales();

const transfer = simulateTransfer(whales[0], "0xTARGET001", 10000);
const impact = analyzeImpact(transfer);

generateReport(transfer, impact);
