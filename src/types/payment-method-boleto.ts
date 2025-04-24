import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodBoleto = {
  /**
   * Uniquely identifies the customer tax id (CNPJ or CPF)
   */
  taxId: string;
};

/**
 * @internal
 * PaymentMethodBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodBoleto
 */
const SchemaIn$PaymentMethodBoleto: z.ZodType<
  PaymentMethodBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodBoleto
 */
const SchemaOut$PaymentMethodBoleto: z.ZodType<
  External$PaymentMethodBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$PaymentMethodBoleto = {
  in: SchemaIn$PaymentMethodBoleto,
  out: SchemaOut$PaymentMethodBoleto,
};
