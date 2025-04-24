import {
  DisputeTransactionShippingAddress,
  External$DisputeTransactionShippingAddress,
  Schemas$DisputeTransactionShippingAddress,
} from "./dispute-transaction-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeVisaCompellingEvidence3DisputedTransaction = {
  /**
   * User Account ID used to log into business platform. Must be recognizable by the user.
   */
  customerAccountId?: string | null | undefined;
  /**
   * Unique identifier of the cardholder’s device derived from a combination of at least two hardware and software attributes. Must be at least 20 characters.
   */
  customerDeviceFingerprint?: string | null | undefined;
  /**
   * Unique identifier of the cardholder’s device such as a device serial number (e.g., International Mobile Equipment Identity [IMEI]). Must be at least 15 characters.
   */
  customerDeviceId?: string | null | undefined;
  /**
   * The email address of the customer.
   */
  customerEmailAddress?: string | null | undefined;
  /**
   * The IP address that the customer used when making the purchase.
   */
  customerPurchaseIp?: string | null | undefined;
  /**
   * Categorization of disputed payment.
   */
  merchandiseOrServices?: ("merchandise" | "services") | null | undefined;
  /**
   * A description of the product or service that was sold.
   */
  productDescription?: string | null | undefined;
  shippingAddress?: DisputeTransactionShippingAddress | undefined;
};

/**
 * @internal
 * DisputeVisaCompellingEvidence3DisputedTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeVisaCompellingEvidence3DisputedTransaction = {
  customer_account_id?: string | null | undefined;
  customer_device_fingerprint?: string | null | undefined;
  customer_device_id?: string | null | undefined;
  customer_email_address?: string | null | undefined;
  customer_purchase_ip?: string | null | undefined;
  merchandise_or_services?: ("merchandise" | "services") | null | undefined;
  product_description?: string | null | undefined;
  shipping_address?: External$DisputeTransactionShippingAddress | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeVisaCompellingEvidence3DisputedTransaction
 */
const SchemaIn$DisputeVisaCompellingEvidence3DisputedTransaction: z.ZodType<
  DisputeVisaCompellingEvidence3DisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_account_id: z.string().nullable().optional(),
    customer_device_fingerprint: z.string().nullable().optional(),
    customer_device_id: z.string().nullable().optional(),
    customer_email_address: z.string().nullable().optional(),
    customer_purchase_ip: z.string().nullable().optional(),
    merchandise_or_services: z
      .enum(["merchandise", "services"])
      .nullable()
      .optional(),
    product_description: z.string().nullable().optional(),
    shipping_address: Schemas$DisputeTransactionShippingAddress.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_account_id: "customerAccountId",
      customer_device_fingerprint: "customerDeviceFingerprint",
      customer_device_id: "customerDeviceId",
      customer_email_address: "customerEmailAddress",
      customer_purchase_ip: "customerPurchaseIp",
      merchandise_or_services: "merchandiseOrServices",
      product_description: "productDescription",
      shipping_address: "shippingAddress",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeVisaCompellingEvidence3DisputedTransaction
 */
const SchemaOut$DisputeVisaCompellingEvidence3DisputedTransaction: z.ZodType<
  External$DisputeVisaCompellingEvidence3DisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  DisputeVisaCompellingEvidence3DisputedTransaction // the object to be transformed
> = z
  .object({
    customerAccountId: z.string().nullable().optional(),
    customerDeviceFingerprint: z.string().nullable().optional(),
    customerDeviceId: z.string().nullable().optional(),
    customerEmailAddress: z.string().nullable().optional(),
    customerPurchaseIp: z.string().nullable().optional(),
    merchandiseOrServices: z
      .enum(["merchandise", "services"])
      .nullable()
      .optional(),
    productDescription: z.string().nullable().optional(),
    shippingAddress: Schemas$DisputeTransactionShippingAddress.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAccountId: "customer_account_id",
      customerDeviceFingerprint: "customer_device_fingerprint",
      customerDeviceId: "customer_device_id",
      customerEmailAddress: "customer_email_address",
      customerPurchaseIp: "customer_purchase_ip",
      merchandiseOrServices: "merchandise_or_services",
      productDescription: "product_description",
      shippingAddress: "shipping_address",
    });
  });

export const Schemas$DisputeVisaCompellingEvidence3DisputedTransaction = {
  in: SchemaIn$DisputeVisaCompellingEvidence3DisputedTransaction,
  out: SchemaOut$DisputeVisaCompellingEvidence3DisputedTransaction,
};
