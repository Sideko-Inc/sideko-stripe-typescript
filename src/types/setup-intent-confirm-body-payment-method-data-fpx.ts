import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataFpx
 */
export type SetupIntentConfirmBodyPaymentMethodDataFpx = {
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
 * SetupIntentConfirmBodyPaymentMethodDataFpx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataFpx = {
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
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataFpx
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataFpx: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataFpx, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataFpx
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataFpx: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataFpx, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataFpx // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataFpx = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataFpx,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataFpx,
};
