import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods = {
  /**
   * Type of registration in `country`.
   */
  type: "standard";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods =
  {
    type: "standard";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods,
  };
