import {
  External$PaymentMethodConfigurationCreateBodyFpxDisplayPreference,
  PaymentMethodConfigurationCreateBodyFpxDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyFpxDisplayPreference,
} from "./payment-method-configuration-create-body-fpx-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
 */
export type PaymentMethodConfigurationCreateBodyFpx = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyFpxDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyFpx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyFpx = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyFpxDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyFpx
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyFpx: z.ZodType<
  PaymentMethodConfigurationCreateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyFpxDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyFpx
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyFpx: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyFpx // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyFpxDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyFpx = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyFpx,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyFpx,
};
