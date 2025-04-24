import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsSamsungPay = {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsSamsungPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsSamsungPay = {
  buyer_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsSamsungPay
 */
const SchemaIn$PaymentMethodDetailsSamsungPay: z.ZodType<
  PaymentMethodDetailsSamsungPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsSamsungPay
 */
const SchemaOut$PaymentMethodDetailsSamsungPay: z.ZodType<
  External$PaymentMethodDetailsSamsungPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsSamsungPay // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
    });
  });

export const Schemas$PaymentMethodDetailsSamsungPay = {
  in: SchemaIn$PaymentMethodDetailsSamsungPay,
  out: SchemaOut$PaymentMethodDetailsSamsungPay,
};
