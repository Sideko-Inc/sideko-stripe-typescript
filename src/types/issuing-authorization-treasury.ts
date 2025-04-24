import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationTreasury = {
  /**
   * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
   */
  receivedCredits: string[];
  /**
   * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
   */
  receivedDebits: string[];
  /**
   * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
   */
  transaction?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationTreasury = {
  received_credits: string[];
  received_debits: string[];
  transaction?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationTreasury
 */
const SchemaIn$IssuingAuthorizationTreasury: z.ZodType<
  IssuingAuthorizationTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    received_credits: z.array(z.string()),
    received_debits: z.array(z.string()),
    transaction: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      received_credits: "receivedCredits",
      received_debits: "receivedDebits",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationTreasury
 */
const SchemaOut$IssuingAuthorizationTreasury: z.ZodType<
  External$IssuingAuthorizationTreasury, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationTreasury // the object to be transformed
> = z
  .object({
    receivedCredits: z.array(z.string()),
    receivedDebits: z.array(z.string()),
    transaction: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      receivedCredits: "received_credits",
      receivedDebits: "received_debits",
      transaction: "transaction",
    });
  });

export const Schemas$IssuingAuthorizationTreasury = {
  in: SchemaIn$IssuingAuthorizationTreasury,
  out: SchemaOut$IssuingAuthorizationTreasury,
};
