import {
  External$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference,
  PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference,
} from "./payment-method-configuration-update-body-pay-by-bank-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
 */
export type PaymentMethodConfigurationUpdateBodyPayByBank = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPayByBank without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPayByBank = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPayByBank
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPayByBank: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPayByBank, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPayByBank
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPayByBank: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPayByBank, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPayByBank // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPayByBank = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyPayByBank,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyPayByBank,
};
