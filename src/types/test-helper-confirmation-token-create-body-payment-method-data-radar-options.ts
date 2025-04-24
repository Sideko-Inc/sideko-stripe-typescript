import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions =
  {
    session?: string | undefined;
  };

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions =
  {
    session?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataRadarOptions,
  };
