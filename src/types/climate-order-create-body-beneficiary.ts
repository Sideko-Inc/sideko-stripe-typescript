import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
 */
export type ClimateOrderCreateBodyBeneficiary = {
  publicName: string;
};

/**
 * @internal
 * ClimateOrderCreateBodyBeneficiary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrderCreateBodyBeneficiary = {
  public_name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrderCreateBodyBeneficiary
 */
const SchemaIn$ClimateOrderCreateBodyBeneficiary: z.ZodType<
  ClimateOrderCreateBodyBeneficiary, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrderCreateBodyBeneficiary
 */
const SchemaOut$ClimateOrderCreateBodyBeneficiary: z.ZodType<
  External$ClimateOrderCreateBodyBeneficiary, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrderCreateBodyBeneficiary // the object to be transformed
> = z
  .object({
    publicName: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      publicName: "public_name",
    });
  });

export const Schemas$ClimateOrderCreateBodyBeneficiary = {
  in: SchemaIn$ClimateOrderCreateBodyBeneficiary,
  out: SchemaOut$ClimateOrderCreateBodyBeneficiary,
};
