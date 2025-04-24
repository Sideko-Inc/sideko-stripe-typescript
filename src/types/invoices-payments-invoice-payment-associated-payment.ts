import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesPaymentsInvoicePaymentAssociatedPayment = {
  /**
   * ID of the successful charge for this payment when `type` is `charge`.
   */
  charge?: (string | Charge) | undefined;
  /**
   * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  /**
   * Type of payment object associated with this invoice payment.
   */
  type: "charge" | "payment_intent";
};

/**
 * @internal
 * InvoicesPaymentsInvoicePaymentAssociatedPayment without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesPaymentsInvoicePaymentAssociatedPayment = {
  charge?: (string | External$Charge) | undefined;
  payment_intent?: (string | External$PaymentIntent) | undefined;
  type: "charge" | "payment_intent";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesPaymentsInvoicePaymentAssociatedPayment
 */
const SchemaIn$InvoicesPaymentsInvoicePaymentAssociatedPayment: z.ZodType<
  InvoicesPaymentsInvoicePaymentAssociatedPayment, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]).optional(),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    type: z.enum(["charge", "payment_intent"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      payment_intent: "paymentIntent",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesPaymentsInvoicePaymentAssociatedPayment
 */
const SchemaOut$InvoicesPaymentsInvoicePaymentAssociatedPayment: z.ZodType<
  External$InvoicesPaymentsInvoicePaymentAssociatedPayment, // output type of this zod object
  z.ZodTypeDef,
  InvoicesPaymentsInvoicePaymentAssociatedPayment // the object to be transformed
> = z
  .object({
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]).optional(),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    type: z.enum(["charge", "payment_intent"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      paymentIntent: "payment_intent",
      type: "type",
    });
  });

export const Schemas$InvoicesPaymentsInvoicePaymentAssociatedPayment = {
  in: SchemaIn$InvoicesPaymentsInvoicePaymentAssociatedPayment,
  out: SchemaOut$InvoicesPaymentsInvoicePaymentAssociatedPayment,
};
