export const HISTORY = [];

export function logTransfer(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
