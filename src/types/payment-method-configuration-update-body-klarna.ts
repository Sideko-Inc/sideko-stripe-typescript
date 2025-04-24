import {
  External$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference,
  PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference,
} from "./payment-method-configuration-update-body-klarna-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyKlarna = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyKlarna = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyKlarna
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyKlarna: z.ZodType<
  PaymentMethodConfigurationUpdateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyKlarna
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyKlarna: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyKlarna // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyKlarna = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyKlarna,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyKlarna,
};
