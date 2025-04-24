import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantCreateBodyAmountMonetary
 */
export type BillingCreditGrantCreateBodyAmountMonetary = {
  currency: string;
  value: number;
};

/**
 * @internal
 * BillingCreditGrantCreateBodyAmountMonetary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyAmountMonetary = {
  currency: string;
  value: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyAmountMonetary
 */
const SchemaIn$BillingCreditGrantCreateBodyAmountMonetary: z.ZodType<
  BillingCreditGrantCreateBodyAmountMonetary, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyAmountMonetary
 */
const SchemaOut$BillingCreditGrantCreateBodyAmountMonetary: z.ZodType<
  External$BillingCreditGrantCreateBodyAmountMonetary, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyAmountMonetary // the object to be transformed
> = z
  .object({
    currency: z.string(),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      value: "value",
    });
  });

export const Schemas$BillingCreditGrantCreateBodyAmountMonetary = {
  in: SchemaIn$BillingCreditGrantCreateBodyAmountMonetary,
  out: SchemaOut$BillingCreditGrantCreateBodyAmountMonetary,
};
