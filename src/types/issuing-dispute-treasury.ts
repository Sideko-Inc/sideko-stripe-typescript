import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeTreasury = {
  /**
   * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
   */
  debitReversal?: string | null | undefined;
  /**
   * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
   */
  receivedDebit: string;
};

/**
 * @internal
 * IssuingDisputeTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeTreasury = {
  debit_reversal?: string | null | undefined;
  received_debit: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeTreasury
 */
const SchemaIn$IssuingDisputeTreasury: z.ZodType<
  IssuingDisputeTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    debit_reversal: z.string().nullable().optional(),
    received_debit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debit_reversal: "debitReversal",
      received_debit: "receivedDebit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeTreasury
 */
const SchemaOut$IssuingDisputeTreasury: z.ZodType<
  External$IssuingDisputeTreasury, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeTreasury // the object to be transformed
> = z
  .object({
    debitReversal: z.string().nullable().optional(),
    receivedDebit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitReversal: "debit_reversal",
      receivedDebit: "received_debit",
    });
  });

export const Schemas$IssuingDisputeTreasury = {
  in: SchemaIn$IssuingDisputeTreasury,
  out: SchemaOut$IssuingDisputeTreasury,
};
