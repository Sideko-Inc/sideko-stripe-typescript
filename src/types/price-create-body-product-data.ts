import {
  External$PriceCreateBodyProductDataMetadata,
  PriceCreateBodyProductDataMetadata,
  Schemas$PriceCreateBodyProductDataMetadata,
} from "./price-create-body-product-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * These fields can be used to create a new product that this price will belong to.
 */
export type PriceCreateBodyProductData = {
  active?: boolean | undefined;
  id?: string | undefined;
  metadata?: PriceCreateBodyProductDataMetadata | undefined;
  name: string;
  statementDescriptor?: string | undefined;
  taxCode?: string | undefined;
  unitLabel?: string | undefined;
};

/**
 * @internal
 * PriceCreateBodyProductData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyProductData = {
  active?: boolean | undefined;
  id?: string | undefined;
  metadata?: External$PriceCreateBodyProductDataMetadata | undefined;
  name: string;
  statement_descriptor?: string | undefined;
  tax_code?: string | undefined;
  unit_label?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyProductData
 */
const SchemaIn$PriceCreateBodyProductData: z.ZodType<
  PriceCreateBodyProductData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    id: z.string().optional(),
    metadata: Schemas$PriceCreateBodyProductDataMetadata.in.optional(),
    name: z.string(),
    statement_descriptor: z.string().optional(),
    tax_code: z.string().optional(),
    unit_label: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      metadata: "metadata",
      name: "name",
      statement_descriptor: "statementDescriptor",
      tax_code: "taxCode",
      unit_label: "unitLabel",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyProductData
 */
const SchemaOut$PriceCreateBodyProductData: z.ZodType<
  External$PriceCreateBodyProductData, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyProductData // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    id: z.string().optional(),
    metadata: Schemas$PriceCreateBodyProductDataMetadata.out.optional(),
    name: z.string(),
    statementDescriptor: z.string().optional(),
    taxCode: z.string().optional(),
    unitLabel: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      metadata: "metadata",
      name: "name",
      statementDescriptor: "statement_descriptor",
      taxCode: "tax_code",
      unitLabel: "unit_label",
    });
  });

export const Schemas$PriceCreateBodyProductData = {
  in: SchemaIn$PriceCreateBodyProductData,
  out: SchemaOut$PriceCreateBodyProductData,
};
