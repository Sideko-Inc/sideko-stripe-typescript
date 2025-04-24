import {
  CheckoutSessionCreateBodyAutomaticTaxLiability,
  External$CheckoutSessionCreateBodyAutomaticTaxLiability,
  Schemas$CheckoutSessionCreateBodyAutomaticTaxLiability,
} from "./checkout-session-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.
 */
export type CheckoutSessionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: CheckoutSessionCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$CheckoutSessionCreateBodyAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyAutomaticTax
 */
const SchemaIn$CheckoutSessionCreateBodyAutomaticTax: z.ZodType<
  CheckoutSessionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CheckoutSessionCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyAutomaticTax
 */
const SchemaOut$CheckoutSessionCreateBodyAutomaticTax: z.ZodType<
  External$CheckoutSessionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CheckoutSessionCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$CheckoutSessionCreateBodyAutomaticTax = {
  in: SchemaIn$CheckoutSessionCreateBodyAutomaticTax,
  out: SchemaOut$CheckoutSessionCreateBodyAutomaticTax,
};
