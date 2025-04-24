import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-prior-undisputed-transactions-item-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem =
  {
    charge: string;
    customerAccountId?: (string | string) | undefined;
    customerDeviceFingerprint?: (string | string) | undefined;
    customerDeviceId?: (string | string) | undefined;
    customerEmailAddress?: (string | string) | undefined;
    customerPurchaseIp?: (string | string) | undefined;
    productDescription?: (string | string) | undefined;
    shippingAddress?:
      | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress
      | undefined;
  };

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem =
  {
    charge: string;
    customer_account_id?: (string | string) | undefined;
    customer_device_fingerprint?: (string | string) | undefined;
    customer_device_id?: (string | string) | undefined;
    customer_email_address?: (string | string) | undefined;
    customer_purchase_ip?: (string | string) | undefined;
    product_description?: (string | string) | undefined;
    shipping_address?:
      | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.string(),
    customer_account_id: z.union([z.string(), z.string()]).optional(),
    customer_device_fingerprint: z.union([z.string(), z.string()]).optional(),
    customer_device_id: z.union([z.string(), z.string()]).optional(),
    customer_email_address: z.union([z.string(), z.string()]).optional(),
    customer_purchase_ip: z.union([z.string(), z.string()]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    shipping_address:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem // the object to be transformed
> = z
  .object({
    charge: z.string(),
    customerAccountId: z.union([z.string(), z.string()]).optional(),
    customerDeviceFingerprint: z.union([z.string(), z.string()]).optional(),
    customerDeviceId: z.union([z.string(), z.string()]).optional(),
    customerEmailAddress: z.union([z.string(), z.string()]).optional(),
    customerPurchaseIp: z.union([z.string(), z.string()]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    shippingAddress:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItemShippingAddress.out.optional(),
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

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem =
  {
    in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
    out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
  };
