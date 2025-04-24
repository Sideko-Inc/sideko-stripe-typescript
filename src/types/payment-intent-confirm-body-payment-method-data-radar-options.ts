import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataRadarOptions
 */
export type PaymentIntentConfirmBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions,
};
