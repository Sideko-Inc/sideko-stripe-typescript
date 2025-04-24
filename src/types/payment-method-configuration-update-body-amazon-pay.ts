import {
  External$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference,
} from "./payment-method-configuration-update-body-amazon-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
 */
export type PaymentMethodConfigurationUpdateBodyAmazonPay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAmazonPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAmazonPay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAmazonPay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAmazonPay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAmazonPay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAmazonPay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAmazonPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAmazonPay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAmazonPay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAmazonPay,
};
