import {
  External$PaymentIntentNextActionKonbiniStores,
  PaymentIntentNextActionKonbiniStores,
  Schemas$PaymentIntentNextActionKonbiniStores,
} from "./payment-intent-next-action-konbini-stores";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionKonbini = {
  /**
   * The timestamp at which the pending Konbini payment expires.
   */
  expiresAt: number;
  /**
   * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
   */
  hostedVoucherUrl?: string | null | undefined;
  stores: PaymentIntentNextActionKonbiniStores;
};

/**
 * @internal
 * PaymentIntentNextActionKonbini without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionKonbini = {
  expires_at: number;
  hosted_voucher_url?: string | null | undefined;
  stores: External$PaymentIntentNextActionKonbiniStores;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionKonbini
 */
const SchemaIn$PaymentIntentNextActionKonbini: z.ZodType<
  PaymentIntentNextActionKonbini, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_at: z.number().int(),
    hosted_voucher_url: z.string().nullable().optional(),
    stores: Schemas$PaymentIntentNextActionKonbiniStores.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_at: "expiresAt",
      hosted_voucher_url: "hostedVoucherUrl",
      stores: "stores",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionKonbini
 */
const SchemaOut$PaymentIntentNextActionKonbini: z.ZodType<
  External$PaymentIntentNextActionKonbini, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionKonbini // the object to be transformed
> = z
  .object({
    expiresAt: z.number().int(),
    hostedVoucherUrl: z.string().nullable().optional(),
    stores: Schemas$PaymentIntentNextActionKonbiniStores.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAt: "expires_at",
      hostedVoucherUrl: "hosted_voucher_url",
      stores: "stores",
    });
  });

export const Schemas$PaymentIntentNextActionKonbini = {
  in: SchemaIn$PaymentIntentNextActionKonbini,
  out: SchemaOut$PaymentIntentNextActionKonbini,
};
