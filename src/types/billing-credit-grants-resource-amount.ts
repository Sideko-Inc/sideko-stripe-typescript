import {
  BillingCreditGrantsResourceMonetaryAmount,
  External$BillingCreditGrantsResourceMonetaryAmount,
  Schemas$BillingCreditGrantsResourceMonetaryAmount,
} from "./billing-credit-grants-resource-monetary-amount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceAmount = {
  monetary?: BillingCreditGrantsResourceMonetaryAmount | undefined;
  /**
   * The type of this amount. We currently only support `monetary` billing credits.
   */
  type: "monetary";
};

/**
 * @internal
 * BillingCreditGrantsResourceAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceAmount = {
  monetary?: External$BillingCreditGrantsResourceMonetaryAmount | undefined;
  type: "monetary";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceAmount
 */
const SchemaIn$BillingCreditGrantsResourceAmount: z.ZodType<
  BillingCreditGrantsResourceAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    monetary: Schemas$BillingCreditGrantsResourceMonetaryAmount.in.optional(),
    type: z.enum(["monetary"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      monetary: "monetary",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceAmount
 */
const SchemaOut$BillingCreditGrantsResourceAmount: z.ZodType<
  External$BillingCreditGrantsResourceAmount, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceAmount // the object to be transformed
> = z
  .object({
    monetary: Schemas$BillingCreditGrantsResourceMonetaryAmount.out.optional(),
    type: z.enum(["monetary"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      monetary: "monetary",
      type: "type",
    });
  });

export const Schemas$BillingCreditGrantsResourceAmount = {
  in: SchemaIn$BillingCreditGrantsResourceAmount,
  out: SchemaOut$BillingCreditGrantsResourceAmount,
};
