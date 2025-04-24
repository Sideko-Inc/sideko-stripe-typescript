import {
  External$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference,
  PaymentMethodConfigurationCreateBodyGiropayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference,
} from "./payment-method-configuration-create-body-giropay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyGiropay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyGiropayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGiropay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGiropay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGiropay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGiropay: z.ZodType<
  PaymentMethodConfigurationCreateBodyGiropay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGiropay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGiropay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGiropay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGiropay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGiropay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyGiropay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyGiropay,
};
