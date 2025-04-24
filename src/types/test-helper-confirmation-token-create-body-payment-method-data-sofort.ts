import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort =
  {
    country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSofort,
  };
