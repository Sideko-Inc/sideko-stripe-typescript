import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionPaymentMethodReuseAgreement = {
  /**
   * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
   *
   * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
   */
  position: "auto" | "hidden";
};

/**
 * @internal
 * PaymentPagesCheckoutSessionPaymentMethodReuseAgreement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement = {
  position: "auto" | "hidden";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionPaymentMethodReuseAgreement
 */
const SchemaIn$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement: z.ZodType<
  PaymentPagesCheckoutSessionPaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement
 */
const SchemaOut$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement: z.ZodType<
  External$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionPaymentMethodReuseAgreement // the object to be transformed
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement = {
  in: SchemaIn$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement,
  out: SchemaOut$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement,
};
