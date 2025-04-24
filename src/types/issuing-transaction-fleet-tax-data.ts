import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetTaxData = {
  /**
   * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
   */
  localAmountDecimal?: string | null | undefined;
  /**
   * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
   */
  nationalAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetTaxData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetTaxData = {
  local_amount_decimal?: string | null | undefined;
  national_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetTaxData
 */
const SchemaIn$IssuingTransactionFleetTaxData: z.ZodType<
  IssuingTransactionFleetTaxData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    local_amount_decimal: z.string().nullable().optional(),
    national_amount_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      local_amount_decimal: "localAmountDecimal",
      national_amount_decimal: "nationalAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetTaxData
 */
const SchemaOut$IssuingTransactionFleetTaxData: z.ZodType<
  External$IssuingTransactionFleetTaxData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetTaxData // the object to be transformed
> = z
  .object({
    localAmountDecimal: z.string().nullable().optional(),
    nationalAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      localAmountDecimal: "local_amount_decimal",
      nationalAmountDecimal: "national_amount_decimal",
    });
  });

export const Schemas$IssuingTransactionFleetTaxData = {
  in: SchemaIn$IssuingTransactionFleetTaxData,
  out: SchemaOut$IssuingTransactionFleetTaxData,
};
