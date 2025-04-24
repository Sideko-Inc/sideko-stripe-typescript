import {
  External$PaymentMethodConfigurationCreateBodyZipDisplayPreference,
  PaymentMethodConfigurationCreateBodyZipDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyZipDisplayPreference,
} from "./payment-method-configuration-create-body-zip-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
 */
export type PaymentMethodConfigurationCreateBodyZip = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyZipDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyZip without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyZip = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyZipDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyZip
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyZip: z.ZodType<
  PaymentMethodConfigurationCreateBodyZip, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyZipDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyZip
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyZip: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyZip, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyZip // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyZipDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyZip = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyZip,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyZip,
};
