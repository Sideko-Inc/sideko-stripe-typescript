import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0 = {
  confirmationNumber?: (string | string) | undefined;
  expiresAfterDays?: (number | string) | undefined;
  expiresAt?: (number | string) | undefined;
  productDescription?: (string | string) | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0 = {
  confirmation_number?: (string | string) | undefined;
  expires_after_days?: (number | string) | undefined;
  expires_at?: (number | string) | undefined;
  product_description?: (string | string) | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKonbiniObj0,
};
