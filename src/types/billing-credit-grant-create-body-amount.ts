import {
  BillingCreditGrantCreateBodyAmountMonetary,
  External$BillingCreditGrantCreateBodyAmountMonetary,
  Schemas$BillingCreditGrantCreateBodyAmountMonetary,
} from "./billing-credit-grant-create-body-amount-monetary";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Amount of this credit grant.
 */
export type BillingCreditGrantCreateBodyAmount = {
  monetary?: BillingCreditGrantCreateBodyAmountMonetary | undefined;
  type: "monetary";
};

/**
 * @internal
 * BillingCreditGrantCreateBodyAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyAmount = {
  monetary?: External$BillingCreditGrantCreateBodyAmountMonetary | undefined;
  type: "monetary";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyAmount
 */
const SchemaIn$BillingCreditGrantCreateBodyAmount: z.ZodType<
  BillingCreditGrantCreateBodyAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    monetary: Schemas$BillingCreditGrantCreateBodyAmountMonetary.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyAmount
 */
const SchemaOut$BillingCreditGrantCreateBodyAmount: z.ZodType<
  External$BillingCreditGrantCreateBodyAmount, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyAmount // the object to be transformed
> = z
  .object({
    monetary: Schemas$BillingCreditGrantCreateBodyAmountMonetary.out.optional(),
    type: z.enum(["monetary"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      monetary: "monetary",
      type: "type",
    });
  });

export const Schemas$BillingCreditGrantCreateBodyAmount = {
  in: SchemaIn$BillingCreditGrantCreateBodyAmount,
  out: SchemaOut$BillingCreditGrantCreateBodyAmount,
};
