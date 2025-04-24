import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsKakaoPay = {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsKakaoPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsKakaoPay = {
  buyer_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsKakaoPay
 */
const SchemaIn$PaymentMethodDetailsKakaoPay: z.ZodType<
  PaymentMethodDetailsKakaoPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsKakaoPay
 */
const SchemaOut$PaymentMethodDetailsKakaoPay: z.ZodType<
  External$PaymentMethodDetailsKakaoPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsKakaoPay // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
    });
  });

export const Schemas$PaymentMethodDetailsKakaoPay = {
  in: SchemaIn$PaymentMethodDetailsKakaoPay,
  out: SchemaOut$PaymentMethodDetailsKakaoPay,
};
