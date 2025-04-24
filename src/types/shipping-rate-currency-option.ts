import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ShippingRateCurrencyOption = {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  amount: number;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior: "exclusive" | "inclusive" | "unspecified";
};

/**
 * @internal
 * ShippingRateCurrencyOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCurrencyOption = {
  amount: number;
  tax_behavior: "exclusive" | "inclusive" | "unspecified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCurrencyOption
 */
const SchemaIn$ShippingRateCurrencyOption: z.ZodType<
  ShippingRateCurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_behavior: "taxBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCurrencyOption
 */
const SchemaOut$ShippingRateCurrencyOption: z.ZodType<
  External$ShippingRateCurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCurrencyOption // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxBehavior: "tax_behavior",
    });
  });

export const Schemas$ShippingRateCurrencyOption = {
  in: SchemaIn$ShippingRateCurrencyOption,
  out: SchemaOut$ShippingRateCurrencyOption,
};
