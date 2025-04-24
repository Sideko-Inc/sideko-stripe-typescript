import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataRadarOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions,
};
