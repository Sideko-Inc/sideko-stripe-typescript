import {
  External$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference,
} from "./payment-method-configuration-update-body-mobilepay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyMobilepay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyMobilepay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyMobilepay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyMobilepay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyMobilepay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyMobilepay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyMobilepay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyMobilepay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyMobilepay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyMobilepay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyMobilepay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyMobilepay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyMobilepay,
};
