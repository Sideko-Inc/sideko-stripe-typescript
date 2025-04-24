import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
 */
export type PaymentMethodCreateBodyBoleto = {
  taxId: string;
};

/**
 * @internal
 * PaymentMethodCreateBodyBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyBoleto
 */
const SchemaIn$PaymentMethodCreateBodyBoleto: z.ZodType<
  PaymentMethodCreateBodyBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyBoleto
 */
const SchemaOut$PaymentMethodCreateBodyBoleto: z.ZodType<
  External$PaymentMethodCreateBodyBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentMethodCreateBodyBoleto = {
  in: SchemaIn$PaymentMethodCreateBodyBoleto,
  out: SchemaOut$PaymentMethodCreateBodyBoleto,
};
