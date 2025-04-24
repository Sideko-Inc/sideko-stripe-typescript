import {
  External$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference,
  PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference,
} from "./payment-method-configuration-create-body-klarna-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
 */
export type PaymentMethodConfigurationCreateBodyKlarna = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyKlarna = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyKlarna
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyKlarna: z.ZodType<
  PaymentMethodConfigurationCreateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyKlarna
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyKlarna: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyKlarna // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyKlarna = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyKlarna,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyKlarna,
};
