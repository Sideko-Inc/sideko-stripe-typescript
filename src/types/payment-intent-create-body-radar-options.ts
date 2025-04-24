import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
 */
export type PaymentIntentCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyRadarOptions
 */
const SchemaIn$PaymentIntentCreateBodyRadarOptions: z.ZodType<
  PaymentIntentCreateBodyRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyRadarOptions
 */
const SchemaOut$PaymentIntentCreateBodyRadarOptions: z.ZodType<
  External$PaymentIntentCreateBodyRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentIntentCreateBodyRadarOptions = {
  in: SchemaIn$PaymentIntentCreateBodyRadarOptions,
  out: SchemaOut$PaymentIntentCreateBodyRadarOptions,
};
