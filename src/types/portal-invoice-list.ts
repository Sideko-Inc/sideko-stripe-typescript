import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalInvoiceList = {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * PortalInvoiceList without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalInvoiceList = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalInvoiceList
 */
const SchemaIn$PortalInvoiceList: z.ZodType<
  PortalInvoiceList, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalInvoiceList
 */
const SchemaOut$PortalInvoiceList: z.ZodType<
  External$PortalInvoiceList, // output type of this zod object
  z.ZodTypeDef,
  PortalInvoiceList // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PortalInvoiceList = {
  in: SchemaIn$PortalInvoiceList,
  out: SchemaOut$PortalInvoiceList,
};
