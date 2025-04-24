import {
  External$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference,
  PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference,
} from "./payment-method-configuration-create-body-amazon-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
 */
export type PaymentMethodConfigurationCreateBodyAmazonPay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAmazonPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAmazonPay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAmazonPay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAmazonPay: z.ZodType<
  PaymentMethodConfigurationCreateBodyAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAmazonPay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAmazonPay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAmazonPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAmazonPay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAmazonPay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAmazonPay,
};
