import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataRadarOptions
 */
export type PaymentIntentCreateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataRadarOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataRadarOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataRadarOptions = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataRadarOptions,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataRadarOptions,
};
