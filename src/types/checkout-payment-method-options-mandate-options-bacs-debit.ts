import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutPaymentMethodOptionsMandateOptionsBacsDebit = {
  /**
   * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
   */
  referencePrefix?: string | undefined;
};

/**
 * @internal
 * CheckoutPaymentMethodOptionsMandateOptionsBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit = {
  reference_prefix?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutPaymentMethodOptionsMandateOptionsBacsDebit
 */
const SchemaIn$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit: z.ZodType<
  CheckoutPaymentMethodOptionsMandateOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference_prefix: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference_prefix: "referencePrefix",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit
 */
const SchemaOut$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit: z.ZodType<
  External$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  CheckoutPaymentMethodOptionsMandateOptionsBacsDebit // the object to be transformed
> = z
  .object({
    referencePrefix: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit = {
  in: SchemaIn$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit,
  out: SchemaOut$CheckoutPaymentMethodOptionsMandateOptionsBacsDebit,
};
