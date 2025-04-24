import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsTaxSettings
 */
export type AccountSessionsCreateBodyComponentsTaxSettings = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsTaxSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsTaxSettings = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsTaxSettings
 */
const SchemaIn$AccountSessionsCreateBodyComponentsTaxSettings: z.ZodType<
  AccountSessionsCreateBodyComponentsTaxSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsTaxSettings
 */
const SchemaOut$AccountSessionsCreateBodyComponentsTaxSettings: z.ZodType<
  External$AccountSessionsCreateBodyComponentsTaxSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsTaxSettings // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsTaxSettings = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsTaxSettings,
  out: SchemaOut$AccountSessionsCreateBodyComponentsTaxSettings,
};
