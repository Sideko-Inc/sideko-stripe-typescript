import {
  External$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference,
} from "./payment-method-configuration-update-body-giropay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyGiropay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGiropay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGiropay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGiropay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGiropay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGiropay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGiropay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGiropay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGiropay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGiropay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGiropay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyGiropay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyGiropay,
};
