import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataBoleto
 */
export type PaymentIntentCreateBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataBoleto
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataBoleto: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_id: "taxId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataBoleto
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataBoleto: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataBoleto = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataBoleto,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataBoleto,
};
