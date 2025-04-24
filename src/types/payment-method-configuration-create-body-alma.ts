import {
  External$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference,
  PaymentMethodConfigurationCreateBodyAlmaDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference,
} from "./payment-method-configuration-create-body-alma-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
 */
export type PaymentMethodConfigurationCreateBodyAlma = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAlmaDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAlma without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAlma = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAlma
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAlma: z.ZodType<
  PaymentMethodConfigurationCreateBodyAlma, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAlma
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAlma: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAlma, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAlma // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAlma = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAlma,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAlma,
};
