import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataBoleto
 */
export type SetupIntentCreateBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataBoleto
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataBoleto: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataBoleto
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataBoleto: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataBoleto = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataBoleto,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataBoleto,
};
