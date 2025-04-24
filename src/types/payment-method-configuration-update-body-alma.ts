import {
  External$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference,
} from "./payment-method-configuration-update-body-alma-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
 */
export type PaymentMethodConfigurationUpdateBodyAlma = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAlma without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAlma = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAlma
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAlma: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAlma, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAlma
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAlma: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAlma, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAlma // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAlma = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAlma,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAlma,
};
