import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedDebitsResourceDebitReversalLinkedFlows = {
  /**
   * Set if there is an Issuing dispute associated with the DebitReversal.
   */
  issuingDispute?: string | null | undefined;
};

/**
 * @internal
 * TreasuryReceivedDebitsResourceDebitReversalLinkedFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows = {
  issuing_dispute?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedDebitsResourceDebitReversalLinkedFlows
 */
const SchemaIn$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows: z.ZodType<
  TreasuryReceivedDebitsResourceDebitReversalLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    issuing_dispute: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuing_dispute: "issuingDispute",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows
 */
const SchemaOut$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows: z.ZodType<
  External$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedDebitsResourceDebitReversalLinkedFlows // the object to be transformed
> = z
  .object({
    issuingDispute: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuingDispute: "issuing_dispute",
    });
  });

export const Schemas$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows = {
  in: SchemaIn$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
  out: SchemaOut$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
};
