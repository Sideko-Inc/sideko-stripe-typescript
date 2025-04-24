import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsBlik = {
  /**
   * A unique and immutable identifier assigned by BLIK to every buyer.
   */
  buyerId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsBlik without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsBlik = {
  buyer_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsBlik
 */
const SchemaIn$PaymentMethodDetailsBlik: z.ZodType<
  PaymentMethodDetailsBlik, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsBlik
 */
const SchemaOut$PaymentMethodDetailsBlik: z.ZodType<
  External$PaymentMethodDetailsBlik, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsBlik // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
    });
  });

export const Schemas$PaymentMethodDetailsBlik = {
  in: SchemaIn$PaymentMethodDetailsBlik,
  out: SchemaOut$PaymentMethodDetailsBlik,
};
