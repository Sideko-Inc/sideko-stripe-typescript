import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataMetadata
 */
export type InvoiceCreateBodyShippingCostShippingRateDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataMetadata = {
  [additionalProperty: string]:
    | External$InvoiceCreateBodyShippingCostShippingRateDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataMetadata
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataMetadata: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataMetadata
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataMetadata: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataMetadata = {
  in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataMetadata,
  out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataMetadata,
};
