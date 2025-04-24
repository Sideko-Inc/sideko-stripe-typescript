import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataRadarOptions
 */
export type SetupIntentConfirmBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataRadarOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataRadarOptions,
};
