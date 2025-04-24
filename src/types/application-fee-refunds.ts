import { External$FeeRefund, FeeRefund, Schemas$FeeRefund } from "./fee-refund";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A list of refunds that have been applied to the fee.
 */
export type ApplicationFeeRefunds = {
  /**
   * Details about each object.
   */
  data: FeeRefund[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * ApplicationFeeRefunds without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefunds = {
  data: External$FeeRefund[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefunds
 */
const SchemaIn$ApplicationFeeRefunds: z.ZodType<
  ApplicationFeeRefunds, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FeeRefund.in)),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefunds
 */
const SchemaOut$ApplicationFeeRefunds: z.ZodType<
  External$ApplicationFeeRefunds, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefunds // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FeeRefund.out)),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$ApplicationFeeRefunds = {
  in: SchemaIn$ApplicationFeeRefunds,
  out: SchemaOut$ApplicationFeeRefunds,
};
