import {
  External$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference,
  PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference,
} from "./payment-method-configuration-create-body-mobilepay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyMobilepay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyMobilepay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyMobilepay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyMobilepay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyMobilepay: z.ZodType<
  PaymentMethodConfigurationCreateBodyMobilepay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyMobilepay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyMobilepay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyMobilepay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyMobilepay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyMobilepay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyMobilepay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyMobilepay,
};
