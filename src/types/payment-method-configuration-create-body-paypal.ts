import {
  External$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference,
  PaymentMethodConfigurationCreateBodyPaypalDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference,
} from "./payment-method-configuration-create-body-paypal-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
 */
export type PaymentMethodConfigurationCreateBodyPaypal = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyPaypalDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPaypal = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPaypal
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPaypal: z.ZodType<
  PaymentMethodConfigurationCreateBodyPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPaypal
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPaypal: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPaypal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPaypal // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPaypal = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyPaypal,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyPaypal,
};
