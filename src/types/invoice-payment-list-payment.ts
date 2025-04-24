import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The payment details of the invoice payments to return.
 */
export type InvoicePaymentListPayment = {
  paymentIntent?: string | undefined;
  type: "payment_intent";
};

/**
 * @internal
 * InvoicePaymentListPayment without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentListPayment = {
  payment_intent?: string | undefined;
  type: "payment_intent";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentListPayment
 */
const SchemaIn$InvoicePaymentListPayment: z.ZodType<
  InvoicePaymentListPayment, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_intent: z.string().optional(),
    type: z.enum(["payment_intent"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_intent: "paymentIntent",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentListPayment
 */
const SchemaOut$InvoicePaymentListPayment: z.ZodType<
  External$InvoicePaymentListPayment, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentListPayment // the object to be transformed
> = z
  .object({
    paymentIntent: z.string().optional(),
    type: z.enum(["payment_intent"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentIntent: "payment_intent",
      type: "type",
    });
  });

export const Schemas$InvoicePaymentListPayment = {
  in: SchemaIn$InvoicePaymentListPayment,
  out: SchemaOut$InvoicePaymentListPayment,
};
