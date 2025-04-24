import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-disputed-transaction-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction =
  {
    customerAccountId?: (string | string) | undefined;
    customerDeviceFingerprint?: (string | string) | undefined;
    customerDeviceId?: (string | string) | undefined;
    customerEmailAddress?: (string | string) | undefined;
    customerPurchaseIp?: (string | string) | undefined;
    merchandiseOrServices?: ("merchandise" | "services") | undefined;
    productDescription?: (string | string) | undefined;
    shippingAddress?:
      | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress
      | undefined;
  };

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction =
  {
    customer_account_id?: (string | string) | undefined;
    customer_device_fingerprint?: (string | string) | undefined;
    customer_device_id?: (string | string) | undefined;
    customer_email_address?: (string | string) | undefined;
    customer_purchase_ip?: (string | string) | undefined;
    merchandise_or_services?: ("merchandise" | "services") | undefined;
    product_description?: (string | string) | undefined;
    shipping_address?:
      | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_account_id: z.union([z.string(), z.string()]).optional(),
    customer_device_fingerprint: z.union([z.string(), z.string()]).optional(),
    customer_device_id: z.union([z.string(), z.string()]).optional(),
    customer_email_address: z.union([z.string(), z.string()]).optional(),
    customer_purchase_ip: z.union([z.string(), z.string()]).optional(),
    merchandise_or_services: z.enum(["merchandise", "services"]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    shipping_address:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction // the object to be transformed
> = z
  .object({
    customerAccountId: z.union([z.string(), z.string()]).optional(),
    customerDeviceFingerprint: z.union([z.string(), z.string()]).optional(),
    customerDeviceId: z.union([z.string(), z.string()]).optional(),
    customerEmailAddress: z.union([z.string(), z.string()]).optional(),
    customerPurchaseIp: z.union([z.string(), z.string()]).optional(),
    merchandiseOrServices: z.enum(["merchandise", "services"]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    shippingAddress:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress.out.optional(),
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

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction =
  {
    in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
    out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
  };
