import {
  External$PaymentMethodConfigResourceDisplayPreference,
  PaymentMethodConfigResourceDisplayPreference,
  Schemas$PaymentMethodConfigResourceDisplayPreference,
} from "./payment-method-config-resource-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodConfigResourcePaymentMethodProperties = {
  /**
   * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
   */
  available: boolean;
  displayPreference: PaymentMethodConfigResourceDisplayPreference;
};

/**
 * @internal
 * PaymentMethodConfigResourcePaymentMethodProperties without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigResourcePaymentMethodProperties = {
  available: boolean;
  display_preference: External$PaymentMethodConfigResourceDisplayPreference;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigResourcePaymentMethodProperties
 */
const SchemaIn$PaymentMethodConfigResourcePaymentMethodProperties: z.ZodType<
  PaymentMethodConfigResourcePaymentMethodProperties, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: z.boolean(),
    display_preference: Schemas$PaymentMethodConfigResourceDisplayPreference.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigResourcePaymentMethodProperties
 */
const SchemaOut$PaymentMethodConfigResourcePaymentMethodProperties: z.ZodType<
  External$PaymentMethodConfigResourcePaymentMethodProperties, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigResourcePaymentMethodProperties // the object to be transformed
> = z
  .object({
    available: z.boolean(),
    displayPreference: Schemas$PaymentMethodConfigResourceDisplayPreference.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigResourcePaymentMethodProperties = {
  in: SchemaIn$PaymentMethodConfigResourcePaymentMethodProperties,
  out: SchemaOut$PaymentMethodConfigResourcePaymentMethodProperties,
};
