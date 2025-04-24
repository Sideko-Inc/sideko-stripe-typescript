import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionTreasury = {
  /**
   * The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund
   */
  receivedCredit?: string | null | undefined;
  /**
   * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture
   */
  receivedDebit?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionTreasury = {
  received_credit?: string | null | undefined;
  received_debit?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionTreasury
 */
const SchemaIn$IssuingTransactionTreasury: z.ZodType<
  IssuingTransactionTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    received_credit: z.string().nullable().optional(),
    received_debit: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      received_credit: "receivedCredit",
      received_debit: "receivedDebit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionTreasury
 */
const SchemaOut$IssuingTransactionTreasury: z.ZodType<
  External$IssuingTransactionTreasury, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionTreasury // the object to be transformed
> = z
  .object({
    receivedCredit: z.string().nullable().optional(),
    receivedDebit: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      receivedCredit: "received_credit",
      receivedDebit: "received_debit",
    });
  });

export const Schemas$IssuingTransactionTreasury = {
  in: SchemaIn$IssuingTransactionTreasury,
  out: SchemaOut$IssuingTransactionTreasury,
};
