import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateUsBankAccount = {
  /**
   * Mandate collection method
   */
  collectionMethod?: "paper" | undefined;
};

/**
 * @internal
 * MandateUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateUsBankAccount = {
  collection_method?: "paper" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateUsBankAccount
 */
const SchemaIn$MandateUsBankAccount: z.ZodType<
  MandateUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    collection_method: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collection_method: "collectionMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateUsBankAccount
 */
const SchemaOut$MandateUsBankAccount: z.ZodType<
  External$MandateUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  MandateUsBankAccount // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$MandateUsBankAccount = {
  in: SchemaIn$MandateUsBankAccount,
  out: SchemaOut$MandateUsBankAccount,
};
