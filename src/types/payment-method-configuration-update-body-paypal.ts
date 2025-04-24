import {
  External$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference,
  PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference,
} from "./payment-method-configuration-update-body-paypal-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyPaypal = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPaypal = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPaypal
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPaypal: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPaypal
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPaypal: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPaypal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPaypal // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPaypal = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyPaypal,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyPaypal,
};
