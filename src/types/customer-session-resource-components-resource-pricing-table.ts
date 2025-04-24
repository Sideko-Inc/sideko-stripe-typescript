import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains whether the pricing table is enabled.
 */
export type CustomerSessionResourceComponentsResourcePricingTable = {
  /**
   * Whether the pricing table is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * CustomerSessionResourceComponentsResourcePricingTable without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionResourceComponentsResourcePricingTable = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionResourceComponentsResourcePricingTable
 */
const SchemaIn$CustomerSessionResourceComponentsResourcePricingTable: z.ZodType<
  CustomerSessionResourceComponentsResourcePricingTable, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionResourceComponentsResourcePricingTable
 */
const SchemaOut$CustomerSessionResourceComponentsResourcePricingTable: z.ZodType<
  External$CustomerSessionResourceComponentsResourcePricingTable, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionResourceComponentsResourcePricingTable // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CustomerSessionResourceComponentsResourcePricingTable = {
  in: SchemaIn$CustomerSessionResourceComponentsResourcePricingTable,
  out: SchemaOut$CustomerSessionResourceComponentsResourcePricingTable,
};
