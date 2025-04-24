import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataBoleto
 */
export type PaymentIntentUpdateBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataBoleto
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBoleto: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataBoleto
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBoleto: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataBoleto = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBoleto,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBoleto,
};
