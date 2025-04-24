import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0 = {
  confirmationNumber?: (string | string) | undefined;
  expiresAfterDays?: (number | string) | undefined;
  expiresAt?: (number | string) | undefined;
  productDescription?: (string | string) | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0 = {
  confirmation_number?: (string | string) | undefined;
  expires_after_days?: (number | string) | undefined;
  expires_at?: (number | string) | undefined;
  product_description?: (string | string) | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    confirmation_number: z.union([z.string(), z.string()]).optional(),
    expires_after_days: z.union([z.number().int(), z.string()]).optional(),
    expires_at: z.union([z.number().int(), z.string()]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmation_number: "confirmationNumber",
      expires_after_days: "expiresAfterDays",
      expires_at: "expiresAt",
      product_description: "productDescription",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0 // the object to be transformed
> = z
  .object({
    confirmationNumber: z.union([z.string(), z.string()]).optional(),
    expiresAfterDays: z.union([z.number().int(), z.string()]).optional(),
    expiresAt: z.union([z.number().int(), z.string()]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmationNumber: "confirmation_number",
      expiresAfterDays: "expires_after_days",
      expiresAt: "expires_at",
      productDescription: "product_description",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsKonbiniObj0,
};
