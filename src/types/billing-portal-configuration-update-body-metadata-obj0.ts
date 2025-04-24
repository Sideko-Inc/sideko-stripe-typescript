import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyMetadataObj0
 */
export type BillingPortalConfigurationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$BillingPortalConfigurationUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyMetadataObj0
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyMetadataObj0: z.ZodType<
  BillingPortalConfigurationUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyMetadataObj0
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyMetadataObj0: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingPortalConfigurationUpdateBodyMetadataObj0 = {
  in: SchemaIn$BillingPortalConfigurationUpdateBodyMetadataObj0,
  out: SchemaOut$BillingPortalConfigurationUpdateBodyMetadataObj0,
};
