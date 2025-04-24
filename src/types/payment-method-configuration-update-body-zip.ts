import {
  External$PaymentMethodConfigurationUpdateBodyZipDisplayPreference,
  PaymentMethodConfigurationUpdateBodyZipDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyZipDisplayPreference,
} from "./payment-method-configuration-update-body-zip-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
 */
export type PaymentMethodConfigurationUpdateBodyZip = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyZipDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyZip without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyZip = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyZipDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyZip
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyZip: z.ZodType<
  PaymentMethodConfigurationUpdateBodyZip, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyZipDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyZip
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyZip: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyZip, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyZip // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyZipDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyZip = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyZip,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyZip,
};
