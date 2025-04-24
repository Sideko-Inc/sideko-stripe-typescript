import {
  DeletedInvoice,
  External$DeletedInvoice,
  Schemas$DeletedInvoice,
} from "./deleted-invoice";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$InvoicesPaymentsInvoicePaymentAssociatedPayment,
  InvoicesPaymentsInvoicePaymentAssociatedPayment,
  Schemas$InvoicesPaymentsInvoicePaymentAssociatedPayment,
} from "./invoices-payments-invoice-payment-associated-payment";
import {
  External$InvoicesPaymentsInvoicePaymentStatusTransitions,
  InvoicesPaymentsInvoicePaymentStatusTransitions,
  Schemas$InvoicesPaymentsInvoicePaymentStatusTransitions,
} from "./invoices-payments-invoice-payment-status-transitions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The invoice payment object
 */
export type InvoicePayment = {
  /**
   * Amount that was actually paid for this invoice, in cents (or local equivalent). This field is null until the payment is `paid`. This amount can be less than the `amount_requested` if the PaymentIntent’s `amount_received` is not sufficient to pay all of the invoices that it is attached to.
   */
  amountPaid?: number | null | undefined;
  /**
   * Amount intended to be paid toward this invoice, in cents (or local equivalent)
   */
  amountRequested: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The invoice that was paid.
   */
  invoice: string | Invoice | DeletedInvoice;
  /**
   * Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. The PaymentIntent associated with the default payment can’t be edited or canceled directly.
   */
  isDefault: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "invoice_payment";
  payment: InvoicesPaymentsInvoicePaymentAssociatedPayment;
  /**
   * The status of the payment, one of `open`, `paid`, or `canceled`.
   */
  status: string;
  statusTransitions: InvoicesPaymentsInvoicePaymentStatusTransitions;
};

/**
 * @internal
 * InvoicePayment without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePayment = {
  amount_paid?: number | null | undefined;
  amount_requested: number;
  created: number;
  currency: string;
  id: string;
  invoice: string | External$Invoice | External$DeletedInvoice;
  is_default: boolean;
  livemode: boolean;
  object: "invoice_payment";
  payment: External$InvoicesPaymentsInvoicePaymentAssociatedPayment;
  status: string;
  status_transitions: External$InvoicesPaymentsInvoicePaymentStatusTransitions;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePayment
 */
const SchemaIn$InvoicePayment: z.ZodType<
  InvoicePayment, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_paid: z.number().int().nullable().optional(),
    amount_requested: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    invoice: z.union([
      z.string(),
      z.lazy(() => Schemas$Invoice.in),
      Schemas$DeletedInvoice.in,
    ]),
    is_default: z.boolean(),
    livemode: z.boolean(),
    object: z.enum(["invoice_payment"]),
    payment: z.lazy(
      () => Schemas$InvoicesPaymentsInvoicePaymentAssociatedPayment.in,
    ),
    status: z.string(),
    status_transitions:
      Schemas$InvoicesPaymentsInvoicePaymentStatusTransitions.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_paid: "amountPaid",
      amount_requested: "amountRequested",
      created: "created",
      currency: "currency",
      id: "id",
      invoice: "invoice",
      is_default: "isDefault",
      livemode: "livemode",
      object: "object",
      payment: "payment",
      status: "status",
      status_transitions: "statusTransitions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePayment
 */
const SchemaOut$InvoicePayment: z.ZodType<
  External$InvoicePayment, // output type of this zod object
  z.ZodTypeDef,
  InvoicePayment // the object to be transformed
> = z
  .object({
    amountPaid: z.number().int().nullable().optional(),
    amountRequested: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    invoice: z.union([
      z.string(),
      z.lazy(() => Schemas$Invoice.out),
      Schemas$DeletedInvoice.out,
    ]),
    isDefault: z.boolean(),
    livemode: z.boolean(),
    object: z.enum(["invoice_payment"]),
    payment: z.lazy(
      () => Schemas$InvoicesPaymentsInvoicePaymentAssociatedPayment.out,
    ),
    status: z.string(),
    statusTransitions:
      Schemas$InvoicesPaymentsInvoicePaymentStatusTransitions.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountPaid: "amount_paid",
      amountRequested: "amount_requested",
      created: "created",
      currency: "currency",
      id: "id",
      invoice: "invoice",
      isDefault: "is_default",
      livemode: "livemode",
      object: "object",
      payment: "payment",
      status: "status",
      statusTransitions: "status_transitions",
    });
  });

export const Schemas$InvoicePayment = {
  in: SchemaIn$InvoicePayment,
  out: SchemaOut$InvoicePayment,
};
