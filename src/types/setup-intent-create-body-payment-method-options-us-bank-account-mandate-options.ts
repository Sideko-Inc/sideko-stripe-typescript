import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
export type SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  };
