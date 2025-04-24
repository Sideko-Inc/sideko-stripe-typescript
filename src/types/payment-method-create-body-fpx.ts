import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
 */
export type PaymentMethodCreateBodyFpx = {
  bank:
    | "affin_bank"
    | "agrobank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_of_china"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
};

/**
 * @internal
 * PaymentMethodCreateBodyFpx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyFpx = {
  bank:
    | "affin_bank"
    | "agrobank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_of_china"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyFpx
 */
const SchemaIn$PaymentMethodCreateBodyFpx: z.ZodType<
  PaymentMethodCreateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank: z.enum([
      "affin_bank",
      "agrobank",
      "alliance_bank",
      "ambank",
      "bank_islam",
      "bank_muamalat",
      "bank_of_china",
      "bank_rakyat",
      "bsn",
      "cimb",
      "deutsche_bank",
      "hong_leong_bank",
      "hsbc",
      "kfh",
      "maybank2e",
      "maybank2u",
      "ocbc",
      "pb_enterprise",
      "public_bank",
      "rhb",
      "standard_chartered",
      "uob",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyFpx
 */
const SchemaOut$PaymentMethodCreateBodyFpx: z.ZodType<
  External$PaymentMethodCreateBodyFpx, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyFpx // the object to be transformed
> = z
  .object({
    bank: z.enum([
      "affin_bank",
      "agrobank",
      "alliance_bank",
      "ambank",
      "bank_islam",
      "bank_muamalat",
      "bank_of_china",
      "bank_rakyat",
      "bsn",
      "cimb",
      "deutsche_bank",
      "hong_leong_bank",
      "hsbc",
      "kfh",
      "maybank2e",
      "maybank2u",
      "ocbc",
      "pb_enterprise",
      "public_bank",
      "rhb",
      "standard_chartered",
      "uob",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

export const Schemas$PaymentMethodCreateBodyFpx = {
  in: SchemaIn$PaymentMethodCreateBodyFpx,
  out: SchemaOut$PaymentMethodCreateBodyFpx,
};
