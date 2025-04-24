import {
  External$IssuingCardApplePay,
  IssuingCardApplePay,
  Schemas$IssuingCardApplePay,
} from "./issuing-card-apple-pay";
import {
  External$IssuingCardGooglePay,
  IssuingCardGooglePay,
  Schemas$IssuingCardGooglePay,
} from "./issuing-card-google-pay";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardWallets = {
  applePay: IssuingCardApplePay;
  googlePay: IssuingCardGooglePay;
  /**
   * Unique identifier for a card used with digital wallets
   */
  primaryAccountIdentifier?: string | null | undefined;
};

/**
 * @internal
 * IssuingCardWallets without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardWallets = {
  apple_pay: External$IssuingCardApplePay;
  google_pay: External$IssuingCardGooglePay;
  primary_account_identifier?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardWallets
 */
const SchemaIn$IssuingCardWallets: z.ZodType<
  IssuingCardWallets, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apple_pay: Schemas$IssuingCardApplePay.in,
    google_pay: Schemas$IssuingCardGooglePay.in,
    primary_account_identifier: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apple_pay: "applePay",
      google_pay: "googlePay",
      primary_account_identifier: "primaryAccountIdentifier",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardWallets
 */
const SchemaOut$IssuingCardWallets: z.ZodType<
  External$IssuingCardWallets, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardWallets // the object to be transformed
> = z
  .object({
    applePay: Schemas$IssuingCardApplePay.out,
    googlePay: Schemas$IssuingCardGooglePay.out,
    primaryAccountIdentifier: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applePay: "apple_pay",
      googlePay: "google_pay",
      primaryAccountIdentifier: "primary_account_identifier",
    });
  });

export const Schemas$IssuingCardWallets = {
  in: SchemaIn$IssuingCardWallets,
  out: SchemaOut$IssuingCardWallets,
};
