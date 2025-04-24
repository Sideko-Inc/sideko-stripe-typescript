import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaypalSellerProtection = {
  /**
   * An array of conditions that are covered for the transaction, if applicable.
   */
  disputeCategories?:
    | ("fraudulent" | "product_not_received")[]
    | null
    | undefined;
  /**
   * Indicates whether the transaction is eligible for PayPal's seller protection.
   */
  status: "eligible" | "not_eligible" | "partially_eligible";
};

/**
 * @internal
 * PaypalSellerProtection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaypalSellerProtection = {
  dispute_categories?:
    | ("fraudulent" | "product_not_received")[]
    | null
    | undefined;
  status: "eligible" | "not_eligible" | "partially_eligible";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaypalSellerProtection
 */
const SchemaIn$PaypalSellerProtection: z.ZodType<
  PaypalSellerProtection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dispute_categories: z
      .array(z.enum(["fraudulent", "product_not_received"]))
      .nullable()
      .optional(),
    status: z.enum(["eligible", "not_eligible", "partially_eligible"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dispute_categories: "disputeCategories",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaypalSellerProtection
 */
const SchemaOut$PaypalSellerProtection: z.ZodType<
  External$PaypalSellerProtection, // output type of this zod object
  z.ZodTypeDef,
  PaypalSellerProtection // the object to be transformed
> = z
  .object({
    disputeCategories: z
      .array(z.enum(["fraudulent", "product_not_received"]))
      .nullable()
      .optional(),
    status: z.enum(["eligible", "not_eligible", "partially_eligible"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputeCategories: "dispute_categories",
      status: "status",
    });
  });

export const Schemas$PaypalSellerProtection = {
  in: SchemaIn$PaypalSellerProtection,
  out: SchemaOut$PaypalSellerProtection,
};
