import {
  External$PaymentMethodConfigurationCreateBodyBillieDisplayPreference,
  PaymentMethodConfigurationCreateBodyBillieDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyBillieDisplayPreference,
} from "./payment-method-configuration-create-body-billie-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export type PaymentMethodConfigurationCreateBodyBillie = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyBillieDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBillie without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBillie = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyBillieDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBillie
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBillie: z.ZodType<
  PaymentMethodConfigurationCreateBodyBillie, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyBillieDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBillie
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBillie: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBillie, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBillie // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyBillieDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBillie = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyBillie,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyBillie,
};
