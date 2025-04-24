import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.
 *
 * Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
 */
export type SetupIntentCreateBodySingleUse = {
  amount: number;
  currency: string;
};

/**
 * @internal
 * SetupIntentCreateBodySingleUse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodySingleUse = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodySingleUse
 */
const SchemaIn$SetupIntentCreateBodySingleUse: z.ZodType<
  SetupIntentCreateBodySingleUse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodySingleUse
 */
const SchemaOut$SetupIntentCreateBodySingleUse: z.ZodType<
  External$SetupIntentCreateBodySingleUse, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodySingleUse // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

export const Schemas$SetupIntentCreateBodySingleUse = {
  in: SchemaIn$SetupIntentCreateBodySingleUse,
  out: SchemaOut$SetupIntentCreateBodySingleUse,
};
