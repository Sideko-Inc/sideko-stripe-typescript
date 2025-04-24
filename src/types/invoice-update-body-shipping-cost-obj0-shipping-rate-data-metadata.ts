import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata =
  {
    [additionalProperty: string]:
      | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata,
  };
