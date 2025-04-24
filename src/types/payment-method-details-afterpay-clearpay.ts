import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAfterpayClearpay = {
  /**
   * The Afterpay order ID associated with this payment intent.
   */
  orderId?: string | null | undefined;
  /**
   * Order identifier shown to the merchant in Afterpay’s online portal.
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAfterpayClearpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAfterpayClearpay = {
  order_id?: string | null | undefined;
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAfterpayClearpay
 */
const SchemaIn$PaymentMethodDetailsAfterpayClearpay: z.ZodType<
  PaymentMethodDetailsAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    order_id: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      order_id: "orderId",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAfterpayClearpay
 */
const SchemaOut$PaymentMethodDetailsAfterpayClearpay: z.ZodType<
  External$PaymentMethodDetailsAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAfterpayClearpay // the object to be transformed
> = z
  .object({
    orderId: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orderId: "order_id",
      reference: "reference",
    });
  });

export const Schemas$PaymentMethodDetailsAfterpayClearpay = {
  in: SchemaIn$PaymentMethodDetailsAfterpayClearpay,
  out: SchemaOut$PaymentMethodDetailsAfterpayClearpay,
};
