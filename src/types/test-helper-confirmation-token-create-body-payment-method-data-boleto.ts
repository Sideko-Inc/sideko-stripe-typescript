import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto = {
  taxId: string;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto =
  {
    tax_id: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto // the object to be transformed
> = z
  .object({
    taxId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataBoleto,
  };
