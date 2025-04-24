import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$PaymentPagesCheckoutSessionTaxId,
  PaymentPagesCheckoutSessionTaxId,
  Schemas$PaymentPagesCheckoutSessionTaxId,
} from "./payment-pages-checkout-session-tax-id";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomerDetails = {
  address?: Address | undefined;
  /**
   * The email associated with the Customer, if one exists, on the Checkout Session after a completed Checkout Session or at time of session expiry.
   * Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
   */
  email?: string | null | undefined;
  /**
   * The customer's name after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
   */
  name?: string | null | undefined;
  /**
   * The customer's phone number after a completed Checkout Session.
   */
  phone?: string | null | undefined;
  /**
   * The customer’s tax exempt status after a completed Checkout Session.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | null | undefined;
  /**
   * The customer’s tax IDs after a completed Checkout Session.
   */
  taxIds?: PaymentPagesCheckoutSessionTaxId[] | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomerDetails = {
  address?: External$Address | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  phone?: string | null | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | null | undefined;
  tax_ids?: External$PaymentPagesCheckoutSessionTaxId[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomerDetails
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomerDetails: z.ZodType<
  PaymentPagesCheckoutSessionCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).nullable().optional(),
    tax_ids: z
      .array(Schemas$PaymentPagesCheckoutSessionTaxId.in)
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
      tax_exempt: "taxExempt",
      tax_ids: "taxIds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomerDetails
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomerDetails: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomerDetails // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).nullable().optional(),
    taxIds: z
      .array(Schemas$PaymentPagesCheckoutSessionTaxId.out)
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
      taxExempt: "tax_exempt",
      taxIds: "tax_ids",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomerDetails = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomerDetails,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomerDetails,
};
