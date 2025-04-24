import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceTransactionGbpCreditTransferData = {
  /**
   * Bank account fingerprint associated with the Stripe owned bank account receiving the transfer.
   */
  fingerprint?: string | undefined;
  /**
   * The credit transfer rails the sender used to push this transfer. The possible rails are: Faster Payments, BACS, CHAPS, and wire transfers. Currently only Faster Payments is supported.
   */
  fundingMethod?: string | undefined;
  /**
   * Last 4 digits of sender account number associated with the transfer.
   */
  last4?: string | undefined;
  /**
   * Sender entered arbitrary information about the transfer.
   */
  reference?: string | undefined;
  /**
   * Sender account number associated with the transfer.
   */
  senderAccountNumber?: string | undefined;
  /**
   * Sender name associated with the transfer.
   */
  senderName?: string | undefined;
  /**
   * Sender sort code associated with the transfer.
   */
  senderSortCode?: string | undefined;
};

/**
 * @internal
 * SourceTransactionGbpCreditTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransactionGbpCreditTransferData = {
  fingerprint?: string | undefined;
  funding_method?: string | undefined;
  last4?: string | undefined;
  reference?: string | undefined;
  sender_account_number?: string | undefined;
  sender_name?: string | undefined;
  sender_sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransactionGbpCreditTransferData
 */
const SchemaIn$SourceTransactionGbpCreditTransferData: z.ZodType<
  SourceTransactionGbpCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fingerprint: z.string().optional(),
    funding_method: z.string().optional(),
    last4: z.string().optional(),
    reference: z.string().optional(),
    sender_account_number: z.string().optional(),
    sender_name: z.string().optional(),
    sender_sort_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      funding_method: "fundingMethod",
      last4: "last4",
      reference: "reference",
      sender_account_number: "senderAccountNumber",
      sender_name: "senderName",
      sender_sort_code: "senderSortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransactionGbpCreditTransferData
 */
const SchemaOut$SourceTransactionGbpCreditTransferData: z.ZodType<
  External$SourceTransactionGbpCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  SourceTransactionGbpCreditTransferData // the object to be transformed
> = z
  .object({
    fingerprint: z.string().optional(),
    fundingMethod: z.string().optional(),
    last4: z.string().optional(),
    reference: z.string().optional(),
    senderAccountNumber: z.string().optional(),
    senderName: z.string().optional(),
    senderSortCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      fundingMethod: "funding_method",
      last4: "last4",
      reference: "reference",
      senderAccountNumber: "sender_account_number",
      senderName: "sender_name",
      senderSortCode: "sender_sort_code",
    });
  });

export const Schemas$SourceTransactionGbpCreditTransferData = {
  in: SchemaIn$SourceTransactionGbpCreditTransferData,
  out: SchemaOut$SourceTransactionGbpCreditTransferData,
};
