import {
  External$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference,
  PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference,
} from "./payment-method-configuration-create-body-afterpay-clearpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
 */
export type PaymentMethodConfigurationCreateBodyAfterpayClearpay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAfterpayClearpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAfterpayClearpay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAfterpayClearpay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAfterpayClearpay: z.ZodType<
  PaymentMethodConfigurationCreateBodyAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAfterpayClearpay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAfterpayClearpay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAfterpayClearpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAfterpayClearpay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAfterpayClearpay,
};
