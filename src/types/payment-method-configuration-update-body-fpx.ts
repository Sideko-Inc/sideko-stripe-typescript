import {
  External$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference,
  PaymentMethodConfigurationUpdateBodyFpxDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference,
} from "./payment-method-configuration-update-body-fpx-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyFpx = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyFpxDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyFpx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyFpx = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyFpx
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyFpx: z.ZodType<
  PaymentMethodConfigurationUpdateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyFpx
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyFpx: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyFpx // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyFpx = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyFpx,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyFpx,
};
