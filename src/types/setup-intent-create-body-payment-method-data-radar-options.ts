import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataRadarOptions
 */
export type SetupIntentCreateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataRadarOptions,
};
