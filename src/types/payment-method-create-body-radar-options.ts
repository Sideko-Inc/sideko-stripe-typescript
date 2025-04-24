import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
 */
export type PaymentMethodCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyRadarOptions
 */
const SchemaIn$PaymentMethodCreateBodyRadarOptions: z.ZodType<
  PaymentMethodCreateBodyRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyRadarOptions
 */
const SchemaOut$PaymentMethodCreateBodyRadarOptions: z.ZodType<
  External$PaymentMethodCreateBodyRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$PaymentMethodCreateBodyRadarOptions = {
  in: SchemaIn$PaymentMethodCreateBodyRadarOptions,
  out: SchemaOut$PaymentMethodCreateBodyRadarOptions,
};
