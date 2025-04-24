import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceTransactionAchCreditTransferData = {
  /**
   * Customer data associated with the transfer.
   */
  customerData?: string | undefined;
  /**
   * Bank account fingerprint associated with the transfer.
   */
  fingerprint?: string | undefined;
  /**
   * Last 4 digits of the account number associated with the transfer.
   */
  last4?: string | undefined;
  /**
   * Routing number associated with the transfer.
   */
  routingNumber?: string | undefined;
};

/**
 * @internal
 * SourceTransactionAchCreditTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransactionAchCreditTransferData = {
  customer_data?: string | undefined;
  fingerprint?: string | undefined;
  last4?: string | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransactionAchCreditTransferData
 */
const SchemaIn$SourceTransactionAchCreditTransferData: z.ZodType<
  SourceTransactionAchCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_data: z.string().optional(),
    fingerprint: z.string().optional(),
    last4: z.string().optional(),
    routing_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_data: "customerData",
      fingerprint: "fingerprint",
      last4: "last4",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransactionAchCreditTransferData
 */
const SchemaOut$SourceTransactionAchCreditTransferData: z.ZodType<
  External$SourceTransactionAchCreditTransferData, // output type of this zod object
  z.ZodTypeDef,
  SourceTransactionAchCreditTransferData // the object to be transformed
> = z
  .object({
    customerData: z.string().optional(),
    fingerprint: z.string().optional(),
    last4: z.string().optional(),
    routingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerData: "customer_data",
      fingerprint: "fingerprint",
      last4: "last4",
      routingNumber: "routing_number",
    });
  });

export const Schemas$SourceTransactionAchCreditTransferData = {
  in: SchemaIn$SourceTransactionAchCreditTransferData,
  out: SchemaOut$SourceTransactionAchCreditTransferData,
};
