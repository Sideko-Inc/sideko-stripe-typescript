import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ClimateRemovalsBeneficiary = {
  /**
   * Publicly displayable name for the end beneficiary of carbon removal.
   */
  publicName: string;
};

/**
 * @internal
 * ClimateRemovalsBeneficiary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateRemovalsBeneficiary = {
  public_name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateRemovalsBeneficiary
 */
const SchemaIn$ClimateRemovalsBeneficiary: z.ZodType<
  ClimateRemovalsBeneficiary, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    public_name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      public_name: "publicName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateRemovalsBeneficiary
 */
const SchemaOut$ClimateRemovalsBeneficiary: z.ZodType<
  External$ClimateRemovalsBeneficiary, // output type of this zod object
  z.ZodTypeDef,
  ClimateRemovalsBeneficiary // the object to be transformed
> = z
  .object({
    publicName: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      publicName: "public_name",
    });
  });

export const Schemas$ClimateRemovalsBeneficiary = {
  in: SchemaIn$ClimateRemovalsBeneficiary,
  out: SchemaOut$ClimateRemovalsBeneficiary,
};
