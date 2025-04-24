import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
 */
export type PaymentIntentCreateBodyAutomaticPaymentMethods = {
  allowRedirects?: ("always" | "never") | undefined;
  enabled: boolean;
};

/**
 * @internal
 * PaymentIntentCreateBodyAutomaticPaymentMethods without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyAutomaticPaymentMethods = {
  allow_redirects?: ("always" | "never") | undefined;
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyAutomaticPaymentMethods
 */
const SchemaIn$PaymentIntentCreateBodyAutomaticPaymentMethods: z.ZodType<
  PaymentIntentCreateBodyAutomaticPaymentMethods, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redirects: "allowRedirects",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyAutomaticPaymentMethods
 */
const SchemaOut$PaymentIntentCreateBodyAutomaticPaymentMethods: z.ZodType<
  External$PaymentIntentCreateBodyAutomaticPaymentMethods, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyAutomaticPaymentMethods // the object to be transformed
> = z
  .object({
    allowRedirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedirects: "allow_redirects",
      enabled: "enabled",
    });
  });

export const Schemas$PaymentIntentCreateBodyAutomaticPaymentMethods = {
  in: SchemaIn$PaymentIntentCreateBodyAutomaticPaymentMethods,
  out: SchemaOut$PaymentIntentCreateBodyAutomaticPaymentMethods,
};
