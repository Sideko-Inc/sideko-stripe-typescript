import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataBoleto
 */
export type SetupIntentUpdateBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataBoleto
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBoleto: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataBoleto
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBoleto: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataBoleto = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBoleto,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBoleto,
};
