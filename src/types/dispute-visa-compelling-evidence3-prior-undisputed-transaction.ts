import {
  DisputeTransactionShippingAddress,
  External$DisputeTransactionShippingAddress,
  Schemas$DisputeTransactionShippingAddress,
} from "./dispute-transaction-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeVisaCompellingEvidence3PriorUndisputedTransaction = {
  /**
   * Stripe charge ID for the Visa Compelling Evidence 3.0 eligible prior charge.
   */
  charge: string;
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
   * A description of the product or service that was sold.
   */
  productDescription?: string | null | undefined;
  shippingAddress?: DisputeTransactionShippingAddress | undefined;
};

/**
 * @internal
 * DisputeVisaCompellingEvidence3PriorUndisputedTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeVisaCompellingEvidence3PriorUndisputedTransaction =
  {
    charge: string;
    customer_account_id?: string | null | undefined;
    customer_device_fingerprint?: string | null | undefined;
    customer_device_id?: string | null | undefined;
    customer_email_address?: string | null | undefined;
    customer_purchase_ip?: string | null | undefined;
    product_description?: string | null | undefined;
    shipping_address?: External$DisputeTransactionShippingAddress | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeVisaCompellingEvidence3PriorUndisputedTransaction
 */
const SchemaIn$DisputeVisaCompellingEvidence3PriorUndisputedTransaction: z.ZodType<
  DisputeVisaCompellingEvidence3PriorUndisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.string(),
    customer_account_id: z.string().nullable().optional(),
    customer_device_fingerprint: z.string().nullable().optional(),
    customer_device_id: z.string().nullable().optional(),
    customer_email_address: z.string().nullable().optional(),
    customer_purchase_ip: z.string().nullable().optional(),
    product_description: z.string().nullable().optional(),
    shipping_address: Schemas$DisputeTransactionShippingAddress.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      customer_account_id: "customerAccountId",
      customer_device_fingerprint: "customerDeviceFingerprint",
      customer_device_id: "customerDeviceId",
      customer_email_address: "customerEmailAddress",
      customer_purchase_ip: "customerPurchaseIp",
      product_description: "productDescription",
      shipping_address: "shippingAddress",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeVisaCompellingEvidence3PriorUndisputedTransaction
 */
const SchemaOut$DisputeVisaCompellingEvidence3PriorUndisputedTransaction: z.ZodType<
  External$DisputeVisaCompellingEvidence3PriorUndisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  DisputeVisaCompellingEvidence3PriorUndisputedTransaction // the object to be transformed
> = z
  .object({
    charge: z.string(),
    customerAccountId: z.string().nullable().optional(),
    customerDeviceFingerprint: z.string().nullable().optional(),
    customerDeviceId: z.string().nullable().optional(),
    customerEmailAddress: z.string().nullable().optional(),
    customerPurchaseIp: z.string().nullable().optional(),
    productDescription: z.string().nullable().optional(),
    shippingAddress: Schemas$DisputeTransactionShippingAddress.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      customerAccountId: "customer_account_id",
      customerDeviceFingerprint: "customer_device_fingerprint",
      customerDeviceId: "customer_device_id",
      customerEmailAddress: "customer_email_address",
      customerPurchaseIp: "customer_purchase_ip",
      productDescription: "product_description",
      shippingAddress: "shipping_address",
    });
  });

export const Schemas$DisputeVisaCompellingEvidence3PriorUndisputedTransaction =
  {
    in: SchemaIn$DisputeVisaCompellingEvidence3PriorUndisputedTransaction,
    out: SchemaOut$DisputeVisaCompellingEvidence3PriorUndisputedTransaction,
  };
