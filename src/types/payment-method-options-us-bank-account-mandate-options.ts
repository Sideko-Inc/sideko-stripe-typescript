import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsUsBankAccountMandateOptions = {
  /**
   * Mandate collection method
   */
  collectionMethod?: "paper" | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsUsBankAccountMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsUsBankAccountMandateOptions = {
  collection_method?: "paper" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaIn$PaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  PaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaOut$PaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  External$PaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsUsBankAccountMandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$PaymentMethodOptionsUsBankAccountMandateOptions = {
  in: SchemaIn$PaymentMethodOptionsUsBankAccountMandateOptions,
  out: SchemaOut$PaymentMethodOptionsUsBankAccountMandateOptions,
};
