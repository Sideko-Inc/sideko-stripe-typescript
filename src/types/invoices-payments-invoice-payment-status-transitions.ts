import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesPaymentsInvoicePaymentStatusTransitions = {
  /**
   * The time that the payment was canceled.
   */
  canceledAt?: number | null | undefined;
  /**
   * The time that the payment succeeded.
   */
  paidAt?: number | null | undefined;
};

/**
 * @internal
 * InvoicesPaymentsInvoicePaymentStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesPaymentsInvoicePaymentStatusTransitions = {
  canceled_at?: number | null | undefined;
  paid_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesPaymentsInvoicePaymentStatusTransitions
 */
const SchemaIn$InvoicesPaymentsInvoicePaymentStatusTransitions: z.ZodType<
  InvoicesPaymentsInvoicePaymentStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled_at: z.number().int().nullable().optional(),
    paid_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled_at: "canceledAt",
      paid_at: "paidAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesPaymentsInvoicePaymentStatusTransitions
 */
const SchemaOut$InvoicesPaymentsInvoicePaymentStatusTransitions: z.ZodType<
  External$InvoicesPaymentsInvoicePaymentStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  InvoicesPaymentsInvoicePaymentStatusTransitions // the object to be transformed
> = z
  .object({
    canceledAt: z.number().int().nullable().optional(),
    paidAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceledAt: "canceled_at",
      paidAt: "paid_at",
    });
  });

export const Schemas$InvoicesPaymentsInvoicePaymentStatusTransitions = {
  in: SchemaIn$InvoicesPaymentsInvoicePaymentStatusTransitions,
  out: SchemaOut$InvoicesPaymentsInvoicePaymentStatusTransitions,
};
