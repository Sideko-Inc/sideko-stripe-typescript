import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataRadarOptions
 */
export type SetupIntentUpdateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataRadarOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataRadarOptions,
};
