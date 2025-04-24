import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  };
