import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  };
