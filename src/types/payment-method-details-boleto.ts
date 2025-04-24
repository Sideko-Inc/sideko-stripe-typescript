import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsBoleto = {
  /**
   * The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers)
   */
  taxId: string;
};

/**
 * @internal
 * PaymentMethodDetailsBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsBoleto
 */
const SchemaIn$PaymentMethodDetailsBoleto: z.ZodType<
  PaymentMethodDetailsBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsBoleto
 */
const SchemaOut$PaymentMethodDetailsBoleto: z.ZodType<
  External$PaymentMethodDetailsBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentMethodDetailsBoleto = {
  in: SchemaIn$PaymentMethodDetailsBoleto,
  out: SchemaOut$PaymentMethodDetailsBoleto,
};
