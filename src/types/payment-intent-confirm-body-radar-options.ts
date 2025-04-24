import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
 */
export type PaymentIntentConfirmBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyRadarOptions
 */
const SchemaIn$PaymentIntentConfirmBodyRadarOptions: z.ZodType<
  PaymentIntentConfirmBodyRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyRadarOptions
 */
const SchemaOut$PaymentIntentConfirmBodyRadarOptions: z.ZodType<
  External$PaymentIntentConfirmBodyRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentIntentConfirmBodyRadarOptions = {
  in: SchemaIn$PaymentIntentConfirmBodyRadarOptions,
  out: SchemaOut$PaymentIntentConfirmBodyRadarOptions,
};
