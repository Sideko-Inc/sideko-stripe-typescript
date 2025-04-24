import {
  External$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference,
} from "./payment-method-configuration-update-body-afterpay-clearpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
 */
export type PaymentMethodConfigurationUpdateBodyAfterpayClearpay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAfterpayClearpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAfterpayClearpay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAfterpayClearpay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAfterpayClearpay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAfterpayClearpay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAfterpayClearpay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAfterpayClearpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAfterpayClearpay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAfterpayClearpay,
};
