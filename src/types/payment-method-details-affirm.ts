import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAffirm = {
  /**
   * The Affirm transaction ID associated with this payment.
   */
  transactionId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAffirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAffirm = {
  transaction_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAffirm
 */
const SchemaIn$PaymentMethodDetailsAffirm: z.ZodType<
  PaymentMethodDetailsAffirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    transaction_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction_id: "transactionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAffirm
 */
const SchemaOut$PaymentMethodDetailsAffirm: z.ZodType<
  External$PaymentMethodDetailsAffirm, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAffirm // the object to be transformed
> = z
  .object({
    transactionId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionId: "transaction_id",
    });
  });

export const Schemas$PaymentMethodDetailsAffirm = {
  in: SchemaIn$PaymentMethodDetailsAffirm,
  out: SchemaOut$PaymentMethodDetailsAffirm,
};
