import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Only return ReceivedCredits described by the flow.
 */
export type TreasuryReceivedCreditListLinkedFlows = {
  sourceFlowType:
    | "credit_reversal"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "payout";
};

/**
 * @internal
 * TreasuryReceivedCreditListLinkedFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditListLinkedFlows = {
  source_flow_type:
    | "credit_reversal"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "payout";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditListLinkedFlows
 */
const SchemaIn$TreasuryReceivedCreditListLinkedFlows: z.ZodType<
  TreasuryReceivedCreditListLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    source_flow_type: z.enum([
      "credit_reversal",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "payout",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      source_flow_type: "sourceFlowType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditListLinkedFlows
 */
const SchemaOut$TreasuryReceivedCreditListLinkedFlows: z.ZodType<
  External$TreasuryReceivedCreditListLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditListLinkedFlows // the object to be transformed
> = z
  .object({
    sourceFlowType: z.enum([
      "credit_reversal",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "payout",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      sourceFlowType: "source_flow_type",
    });
  });

export const Schemas$TreasuryReceivedCreditListLinkedFlows = {
  in: SchemaIn$TreasuryReceivedCreditListLinkedFlows,
  out: SchemaOut$TreasuryReceivedCreditListLinkedFlows,
};
