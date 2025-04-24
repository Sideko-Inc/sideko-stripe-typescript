import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSessionCreateBodyComponentsPricingTable
 */
export type CustomerSessionCreateBodyComponentsPricingTable = {
  enabled: boolean;
};

/**
 * @internal
 * CustomerSessionCreateBodyComponentsPricingTable without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBodyComponentsPricingTable = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBodyComponentsPricingTable
 */
const SchemaIn$CustomerSessionCreateBodyComponentsPricingTable: z.ZodType<
  CustomerSessionCreateBodyComponentsPricingTable, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBodyComponentsPricingTable
 */
const SchemaOut$CustomerSessionCreateBodyComponentsPricingTable: z.ZodType<
  External$CustomerSessionCreateBodyComponentsPricingTable, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBodyComponentsPricingTable // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CustomerSessionCreateBodyComponentsPricingTable = {
  in: SchemaIn$CustomerSessionCreateBodyComponentsPricingTable,
  out: SchemaOut$CustomerSessionCreateBodyComponentsPricingTable,
};
