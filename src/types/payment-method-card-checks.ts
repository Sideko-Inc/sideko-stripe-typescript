import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCardChecks = {
  /**
   * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressLine1Check?: string | null | undefined;
  /**
   * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressPostalCodeCheck?: string | null | undefined;
  /**
   * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  cvcCheck?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodCardChecks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCardChecks = {
  address_line1_check?: string | null | undefined;
  address_postal_code_check?: string | null | undefined;
  cvc_check?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCardChecks
 */
const SchemaIn$PaymentMethodCardChecks: z.ZodType<
  PaymentMethodCardChecks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address_line1_check: z.string().nullable().optional(),
    address_postal_code_check: z.string().nullable().optional(),
    cvc_check: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_line1_check: "addressLine1Check",
      address_postal_code_check: "addressPostalCodeCheck",
      cvc_check: "cvcCheck",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCardChecks
 */
const SchemaOut$PaymentMethodCardChecks: z.ZodType<
  External$PaymentMethodCardChecks, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCardChecks // the object to be transformed
> = z
  .object({
    addressLine1Check: z.string().nullable().optional(),
    addressPostalCodeCheck: z.string().nullable().optional(),
    cvcCheck: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressLine1Check: "address_line1_check",
      addressPostalCodeCheck: "address_postal_code_check",
      cvcCheck: "cvc_check",
    });
  });

export const Schemas$PaymentMethodCardChecks = {
  in: SchemaIn$PaymentMethodCardChecks,
  out: SchemaOut$PaymentMethodCardChecks,
};
