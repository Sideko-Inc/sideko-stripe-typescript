import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
 */
export type ChargeCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * @internal
 * ChargeCreateBodyRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyRadarOptions
 */
const SchemaIn$ChargeCreateBodyRadarOptions: z.ZodType<
  ChargeCreateBodyRadarOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyRadarOptions
 */
const SchemaOut$ChargeCreateBodyRadarOptions: z.ZodType<
  External$ChargeCreateBodyRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$ChargeCreateBodyRadarOptions = {
  in: SchemaIn$ChargeCreateBodyRadarOptions,
  out: SchemaOut$ChargeCreateBodyRadarOptions,
};
