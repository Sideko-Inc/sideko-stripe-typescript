import {
  External$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference,
  PaymentMethodConfigurationUpdateBodyBillieDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference,
} from "./payment-method-configuration-update-body-billie-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export type PaymentMethodConfigurationUpdateBodyBillie = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyBillieDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBillie without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBillie = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBillie
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBillie: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBillie, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBillie
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBillie: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBillie, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBillie // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBillie = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyBillie,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyBillie,
};
