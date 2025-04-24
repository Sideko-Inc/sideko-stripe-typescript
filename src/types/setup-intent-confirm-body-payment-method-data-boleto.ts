import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataBoleto
 */
export type SetupIntentConfirmBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataBoleto = {
  tax_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataBoleto
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBoleto: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataBoleto
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBoleto: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataBoleto = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBoleto,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBoleto,
};
