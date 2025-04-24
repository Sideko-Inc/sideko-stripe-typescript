import {
  External$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference,
} from "./payment-method-configuration-update-body-promptpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyPromptpay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPromptpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPromptpay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPromptpay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPromptpay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPromptpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPromptpay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPromptpay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPromptpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPromptpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPromptpay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyPromptpay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyPromptpay,
};
