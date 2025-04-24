import {
  External$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference,
  PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference,
} from "./payment-method-configuration-create-body-pay-by-bank-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
 */
export type PaymentMethodConfigurationCreateBodyPayByBank = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPayByBank without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPayByBank = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPayByBank
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPayByBank: z.ZodType<
  PaymentMethodConfigurationCreateBodyPayByBank, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPayByBank
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPayByBank: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPayByBank, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPayByBank // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPayByBank = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyPayByBank,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyPayByBank,
};
