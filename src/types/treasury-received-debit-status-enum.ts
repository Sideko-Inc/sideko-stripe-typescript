/**
 * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
 */
export type TreasuryReceivedDebitStatusEnum = "failed" | "succeeded";
