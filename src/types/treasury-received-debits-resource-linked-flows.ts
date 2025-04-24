import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedDebitsResourceLinkedFlows = {
  /**
   * The DebitReversal created as a result of this ReceivedDebit being reversed.
   */
  debitReversal?: string | null | undefined;
  /**
   * Set if the ReceivedDebit is associated with an InboundTransfer's return of funds.
   */
  inboundTransfer?: string | null | undefined;
  /**
   * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
   */
  issuingAuthorization?: string | null | undefined;
  /**
   * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
   */
  issuingTransaction?: string | null | undefined;
  /**
   * Set if the ReceivedDebit was created due to a [Payout](https://stripe.com/docs/api#payouts) object.
   */
  payout?: string | null | undefined;
};

/**
 * @internal
 * TreasuryReceivedDebitsResourceLinkedFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedDebitsResourceLinkedFlows = {
  debit_reversal?: string | null | undefined;
  inbound_transfer?: string | null | undefined;
  issuing_authorization?: string | null | undefined;
  issuing_transaction?: string | null | undefined;
  payout?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedDebitsResourceLinkedFlows
 */
const SchemaIn$TreasuryReceivedDebitsResourceLinkedFlows: z.ZodType<
  TreasuryReceivedDebitsResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    debit_reversal: z.string().nullable().optional(),
    inbound_transfer: z.string().nullable().optional(),
    issuing_authorization: z.string().nullable().optional(),
    issuing_transaction: z.string().nullable().optional(),
    payout: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debit_reversal: "debitReversal",
      inbound_transfer: "inboundTransfer",
      issuing_authorization: "issuingAuthorization",
      issuing_transaction: "issuingTransaction",
      payout: "payout",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedDebitsResourceLinkedFlows
 */
const SchemaOut$TreasuryReceivedDebitsResourceLinkedFlows: z.ZodType<
  External$TreasuryReceivedDebitsResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedDebitsResourceLinkedFlows // the object to be transformed
> = z
  .object({
    debitReversal: z.string().nullable().optional(),
    inboundTransfer: z.string().nullable().optional(),
    issuingAuthorization: z.string().nullable().optional(),
    issuingTransaction: z.string().nullable().optional(),
    payout: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitReversal: "debit_reversal",
      inboundTransfer: "inbound_transfer",
      issuingAuthorization: "issuing_authorization",
      issuingTransaction: "issuing_transaction",
      payout: "payout",
    });
  });

export const Schemas$TreasuryReceivedDebitsResourceLinkedFlows = {
  in: SchemaIn$TreasuryReceivedDebitsResourceLinkedFlows,
  out: SchemaOut$TreasuryReceivedDebitsResourceLinkedFlows,
};
