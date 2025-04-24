import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataBoleto
 */
export type PaymentIntentConfirmBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataBoleto
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataBoleto: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataBoleto
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataBoleto: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataBoleto = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataBoleto,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataBoleto,
};
