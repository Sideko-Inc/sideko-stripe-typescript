import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ClimateOrderUpdateBodyBeneficiaryObj0
 */
export type ClimateOrderUpdateBodyBeneficiaryObj0 = {
  publicName: string | string;
};

/**
 * @internal
 * ClimateOrderUpdateBodyBeneficiaryObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrderUpdateBodyBeneficiaryObj0 = {
  public_name: string | string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrderUpdateBodyBeneficiaryObj0
 */
const SchemaIn$ClimateOrderUpdateBodyBeneficiaryObj0: z.ZodType<
  ClimateOrderUpdateBodyBeneficiaryObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    public_name: z.union([z.string(), z.string()]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      public_name: "publicName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrderUpdateBodyBeneficiaryObj0
 */
const SchemaOut$ClimateOrderUpdateBodyBeneficiaryObj0: z.ZodType<
  External$ClimateOrderUpdateBodyBeneficiaryObj0, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrderUpdateBodyBeneficiaryObj0 // the object to be transformed
> = z
  .object({
    publicName: z.union([z.string(), z.string()]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      publicName: "public_name",
    });
  });

export const Schemas$ClimateOrderUpdateBodyBeneficiaryObj0 = {
  in: SchemaIn$ClimateOrderUpdateBodyBeneficiaryObj0,
  out: SchemaOut$ClimateOrderUpdateBodyBeneficiaryObj0,
};
