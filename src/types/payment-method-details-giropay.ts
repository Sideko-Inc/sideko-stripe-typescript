import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsGiropay = {
  /**
   * Bank code of bank associated with the bank account.
   */
  bankCode?: string | null | undefined;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string | null | undefined;
  /**
   * Bank Identifier Code of the bank associated with the bank account.
   */
  bic?: string | null | undefined;
  /**
   * Owner's verified full name. Values are verified or provided by Giropay directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   * Giropay rarely provides this information so the attribute is usually empty.
   */
  verifiedName?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsGiropay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsGiropay = {
  bank_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  bic?: string | null | undefined;
  verified_name?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsGiropay
 */
const SchemaIn$PaymentMethodDetailsGiropay: z.ZodType<
  PaymentMethodDetailsGiropay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    verified_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      bank_name: "bankName",
      bic: "bic",
      verified_name: "verifiedName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsGiropay
 */
const SchemaOut$PaymentMethodDetailsGiropay: z.ZodType<
  External$PaymentMethodDetailsGiropay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsGiropay // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    verifiedName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      bankName: "bank_name",
      bic: "bic",
      verifiedName: "verified_name",
    });
  });

export const Schemas$PaymentMethodDetailsGiropay = {
  in: SchemaIn$PaymentMethodDetailsGiropay,
  out: SchemaOut$PaymentMethodDetailsGiropay,
};
