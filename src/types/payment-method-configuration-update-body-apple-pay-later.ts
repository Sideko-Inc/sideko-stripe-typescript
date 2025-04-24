import {
  External$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference,
  PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference,
} from "./payment-method-configuration-update-body-apple-pay-later-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
 */
export type PaymentMethodConfigurationUpdateBodyApplePayLater = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyApplePayLater without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyApplePayLater = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyApplePayLater
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayLater: z.ZodType<
  PaymentMethodConfigurationUpdateBodyApplePayLater, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyApplePayLater
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayLater: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyApplePayLater, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyApplePayLater // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyApplePayLater = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayLater,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayLater,
};
