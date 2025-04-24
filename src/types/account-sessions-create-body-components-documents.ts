import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsDocuments
 */
export type AccountSessionsCreateBodyComponentsDocuments = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsDocuments = {
  enabled: boolean;
  features?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsDocuments
 */
const SchemaIn$AccountSessionsCreateBodyComponentsDocuments: z.ZodType<
  AccountSessionsCreateBodyComponentsDocuments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsDocuments
 */
const SchemaOut$AccountSessionsCreateBodyComponentsDocuments: z.ZodType<
  External$AccountSessionsCreateBodyComponentsDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsDocuments // the object to be transformed
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

export const Schemas$AccountSessionsCreateBodyComponentsDocuments = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsDocuments,
  out: SchemaOut$AccountSessionsCreateBodyComponentsDocuments,
};
