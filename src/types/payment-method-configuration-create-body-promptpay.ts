import {
  External$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference,
  PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference,
} from "./payment-method-configuration-create-body-promptpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyPromptpay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPromptpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPromptpay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPromptpay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPromptpay: z.ZodType<
  PaymentMethodConfigurationCreateBodyPromptpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPromptpay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPromptpay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPromptpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPromptpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPromptpay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyPromptpay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyPromptpay,
};
