/**
 * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
 */
export type TreasuryReceivedCreditStatusEnum = "failed" | "succeeded";
