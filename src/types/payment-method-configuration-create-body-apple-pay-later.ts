import {
  External$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference,
  PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference,
} from "./payment-method-configuration-create-body-apple-pay-later-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
 */
export type PaymentMethodConfigurationCreateBodyApplePayLater = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyApplePayLater without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyApplePayLater = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyApplePayLater
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyApplePayLater: z.ZodType<
  PaymentMethodConfigurationCreateBodyApplePayLater, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyApplePayLater
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyApplePayLater: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyApplePayLater, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyApplePayLater // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyApplePayLater = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyApplePayLater,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyApplePayLater,
};
