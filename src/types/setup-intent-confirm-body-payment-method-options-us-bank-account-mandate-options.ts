import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  };
