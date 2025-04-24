import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  };
