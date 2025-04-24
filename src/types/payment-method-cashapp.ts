import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCashapp = {
  /**
   * A unique and immutable identifier assigned by Cash App to every buyer.
   */
  buyerId?: string | null | undefined;
  /**
   * A public identifier for buyers using Cash App.
   */
  cashtag?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodCashapp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCashapp = {
  buyer_id?: string | null | undefined;
  cashtag?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCashapp
 */
const SchemaIn$PaymentMethodCashapp: z.ZodType<
  PaymentMethodCashapp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().nullable().optional(),
    cashtag: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
      cashtag: "cashtag",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCashapp
 */
const SchemaOut$PaymentMethodCashapp: z.ZodType<
  External$PaymentMethodCashapp, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCashapp // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
    cashtag: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
      cashtag: "cashtag",
    });
  });

export const Schemas$PaymentMethodCashapp = {
  in: SchemaIn$PaymentMethodCashapp,
  out: SchemaOut$PaymentMethodCashapp,
};
