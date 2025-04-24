import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collectionMethod?: "paper" | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    collection_method?: "paper" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions // the object to be transformed
> = z
  .object({
    collectionMethod: z.enum(["paper"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  };
