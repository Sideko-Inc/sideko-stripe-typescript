import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsPayoutsList
 */
export type AccountSessionsCreateBodyComponentsPayoutsList = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsPayoutsList without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsPayoutsList = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsPayoutsList
 */
const SchemaIn$AccountSessionsCreateBodyComponentsPayoutsList: z.ZodType<
  AccountSessionsCreateBodyComponentsPayoutsList, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsPayoutsList
 */
const SchemaOut$AccountSessionsCreateBodyComponentsPayoutsList: z.ZodType<
  External$AccountSessionsCreateBodyComponentsPayoutsList, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsPayoutsList // the object to be transformed
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

export const Schemas$AccountSessionsCreateBodyComponentsPayoutsList = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsPayoutsList,
  out: SchemaOut$AccountSessionsCreateBodyComponentsPayoutsList,
};
