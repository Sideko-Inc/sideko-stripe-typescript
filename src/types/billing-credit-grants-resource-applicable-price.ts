import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceApplicablePrice = {
  /**
   * Unique identifier for the object.
   */
  id?: string | null | undefined;
};

/**
 * @internal
 * BillingCreditGrantsResourceApplicablePrice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceApplicablePrice = {
  id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceApplicablePrice
 */
const SchemaIn$BillingCreditGrantsResourceApplicablePrice: z.ZodType<
  BillingCreditGrantsResourceApplicablePrice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceApplicablePrice
 */
const SchemaOut$BillingCreditGrantsResourceApplicablePrice: z.ZodType<
  External$BillingCreditGrantsResourceApplicablePrice, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceApplicablePrice // the object to be transformed
> = z
  .object({
    id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

export const Schemas$BillingCreditGrantsResourceApplicablePrice = {
  in: SchemaIn$BillingCreditGrantsResourceApplicablePrice,
  out: SchemaOut$BillingCreditGrantsResourceApplicablePrice,
};
