import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourcePaymentMethodReuseAgreement = {
  /**
   * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
   *
   * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
   */
  position: "auto" | "hidden";
};

/**
 * @internal
 * PaymentLinksResourcePaymentMethodReuseAgreement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourcePaymentMethodReuseAgreement = {
  position: "auto" | "hidden";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourcePaymentMethodReuseAgreement
 */
const SchemaIn$PaymentLinksResourcePaymentMethodReuseAgreement: z.ZodType<
  PaymentLinksResourcePaymentMethodReuseAgreement, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourcePaymentMethodReuseAgreement
 */
const SchemaOut$PaymentLinksResourcePaymentMethodReuseAgreement: z.ZodType<
  External$PaymentLinksResourcePaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourcePaymentMethodReuseAgreement // the object to be transformed
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

export const Schemas$PaymentLinksResourcePaymentMethodReuseAgreement = {
  in: SchemaIn$PaymentLinksResourcePaymentMethodReuseAgreement,
  out: SchemaOut$PaymentLinksResourcePaymentMethodReuseAgreement,
};
