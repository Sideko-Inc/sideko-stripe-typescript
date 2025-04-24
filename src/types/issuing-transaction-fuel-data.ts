import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFuelData = {
  /**
   * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
   */
  industryProductCode?: string | null | undefined;
  /**
   * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
   */
  quantityDecimal?: string | null | undefined;
  /**
   * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
   */
  type: string;
  /**
   * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
   */
  unit: string;
  /**
   * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
   */
  unitCostDecimal: string;
};

/**
 * @internal
 * IssuingTransactionFuelData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFuelData = {
  industry_product_code?: string | null | undefined;
  quantity_decimal?: string | null | undefined;
  type: string;
  unit: string;
  unit_cost_decimal: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFuelData
 */
const SchemaIn$IssuingTransactionFuelData: z.ZodType<
  IssuingTransactionFuelData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    industry_product_code: z.string().nullable().optional(),
    quantity_decimal: z.string().nullable().optional(),
    type: z.string(),
    unit: z.string(),
    unit_cost_decimal: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industry_product_code: "industryProductCode",
      quantity_decimal: "quantityDecimal",
      type: "type",
      unit: "unit",
      unit_cost_decimal: "unitCostDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFuelData
 */
const SchemaOut$IssuingTransactionFuelData: z.ZodType<
  External$IssuingTransactionFuelData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFuelData // the object to be transformed
> = z
  .object({
    industryProductCode: z.string().nullable().optional(),
    quantityDecimal: z.string().nullable().optional(),
    type: z.string(),
    unit: z.string(),
    unitCostDecimal: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industryProductCode: "industry_product_code",
      quantityDecimal: "quantity_decimal",
      type: "type",
      unit: "unit",
      unitCostDecimal: "unit_cost_decimal",
    });
  });

export const Schemas$IssuingTransactionFuelData = {
  in: SchemaIn$IssuingTransactionFuelData,
  out: SchemaOut$IssuingTransactionFuelData,
};
