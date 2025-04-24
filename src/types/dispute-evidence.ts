import {
  DisputeEnhancedEvidence,
  External$DisputeEnhancedEvidence,
  Schemas$DisputeEnhancedEvidence,
} from "./dispute-enhanced-evidence";
import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEvidence = {
  /**
   * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
   */
  accessActivityLog?: string | null | undefined;
  /**
   * The billing address provided by the customer.
   */
  billingAddress?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
   */
  cancellationPolicy?: (string | File) | undefined;
  /**
   * An explanation of how and when the customer was shown your refund policy prior to purchase.
   */
  cancellationPolicyDisclosure?: string | null | undefined;
  /**
   * A justification for why the customer's subscription was not canceled.
   */
  cancellationRebuttal?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
   */
  customerCommunication?: (string | File) | undefined;
  /**
   * The email address of the customer.
   */
  customerEmailAddress?: string | null | undefined;
  /**
   * The name of the customer.
   */
  customerName?: string | null | undefined;
  /**
   * The IP address that the customer used when making the purchase.
   */
  customerPurchaseIp?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
   */
  customerSignature?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
   */
  duplicateChargeDocumentation?: (string | File) | undefined;
  /**
   * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
   */
  duplicateChargeExplanation?: string | null | undefined;
  /**
   * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
   */
  duplicateChargeId?: string | null | undefined;
  enhancedEvidence: DisputeEnhancedEvidence;
  /**
   * A description of the product or service that was sold.
   */
  productDescription?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
   */
  receipt?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
   */
  refundPolicy?: (string | File) | undefined;
  /**
   * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
   */
  refundPolicyDisclosure?: string | null | undefined;
  /**
   * A justification for why the customer is not entitled to a refund.
   */
  refundRefusalExplanation?: string | null | undefined;
  /**
   * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
   */
  serviceDate?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
   */
  serviceDocumentation?: (string | File) | undefined;
  /**
   * The address to which a physical product was shipped. You should try to include as complete address information as possible.
   */
  shippingAddress?: string | null | undefined;
  /**
   * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
   */
  shippingCarrier?: string | null | undefined;
  /**
   * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
   */
  shippingDate?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
   */
  shippingDocumentation?: (string | File) | undefined;
  /**
   * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
   */
  shippingTrackingNumber?: string | null | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
   */
  uncategorizedFile?: (string | File) | undefined;
  /**
   * Any additional evidence or statements.
   */
  uncategorizedText?: string | null | undefined;
};

/**
 * @internal
 * DisputeEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEvidence = {
  access_activity_log?: string | null | undefined;
  billing_address?: string | null | undefined;
  cancellation_policy?: (string | External$File) | undefined;
  cancellation_policy_disclosure?: string | null | undefined;
  cancellation_rebuttal?: string | null | undefined;
  customer_communication?: (string | External$File) | undefined;
  customer_email_address?: string | null | undefined;
  customer_name?: string | null | undefined;
  customer_purchase_ip?: string | null | undefined;
  customer_signature?: (string | External$File) | undefined;
  duplicate_charge_documentation?: (string | External$File) | undefined;
  duplicate_charge_explanation?: string | null | undefined;
  duplicate_charge_id?: string | null | undefined;
  enhanced_evidence: External$DisputeEnhancedEvidence;
  product_description?: string | null | undefined;
  receipt?: (string | External$File) | undefined;
  refund_policy?: (string | External$File) | undefined;
  refund_policy_disclosure?: string | null | undefined;
  refund_refusal_explanation?: string | null | undefined;
  service_date?: string | null | undefined;
  service_documentation?: (string | External$File) | undefined;
  shipping_address?: string | null | undefined;
  shipping_carrier?: string | null | undefined;
  shipping_date?: string | null | undefined;
  shipping_documentation?: (string | External$File) | undefined;
  shipping_tracking_number?: string | null | undefined;
  uncategorized_file?: (string | External$File) | undefined;
  uncategorized_text?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEvidence
 */
const SchemaIn$DisputeEvidence: z.ZodType<
  DisputeEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    access_activity_log: z.string().nullable().optional(),
    billing_address: z.string().nullable().optional(),
    cancellation_policy: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    cancellation_policy_disclosure: z.string().nullable().optional(),
    cancellation_rebuttal: z.string().nullable().optional(),
    customer_communication: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    customer_email_address: z.string().nullable().optional(),
    customer_name: z.string().nullable().optional(),
    customer_purchase_ip: z.string().nullable().optional(),
    customer_signature: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    duplicate_charge_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    duplicate_charge_explanation: z.string().nullable().optional(),
    duplicate_charge_id: z.string().nullable().optional(),
    enhanced_evidence: Schemas$DisputeEnhancedEvidence.in,
    product_description: z.string().nullable().optional(),
    receipt: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    refund_policy: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    refund_policy_disclosure: z.string().nullable().optional(),
    refund_refusal_explanation: z.string().nullable().optional(),
    service_date: z.string().nullable().optional(),
    service_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    shipping_address: z.string().nullable().optional(),
    shipping_carrier: z.string().nullable().optional(),
    shipping_date: z.string().nullable().optional(),
    shipping_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    shipping_tracking_number: z.string().nullable().optional(),
    uncategorized_file: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    uncategorized_text: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      access_activity_log: "accessActivityLog",
      billing_address: "billingAddress",
      cancellation_policy: "cancellationPolicy",
      cancellation_policy_disclosure: "cancellationPolicyDisclosure",
      cancellation_rebuttal: "cancellationRebuttal",
      customer_communication: "customerCommunication",
      customer_email_address: "customerEmailAddress",
      customer_name: "customerName",
      customer_purchase_ip: "customerPurchaseIp",
      customer_signature: "customerSignature",
      duplicate_charge_documentation: "duplicateChargeDocumentation",
      duplicate_charge_explanation: "duplicateChargeExplanation",
      duplicate_charge_id: "duplicateChargeId",
      enhanced_evidence: "enhancedEvidence",
      product_description: "productDescription",
      receipt: "receipt",
      refund_policy: "refundPolicy",
      refund_policy_disclosure: "refundPolicyDisclosure",
      refund_refusal_explanation: "refundRefusalExplanation",
      service_date: "serviceDate",
      service_documentation: "serviceDocumentation",
      shipping_address: "shippingAddress",
      shipping_carrier: "shippingCarrier",
      shipping_date: "shippingDate",
      shipping_documentation: "shippingDocumentation",
      shipping_tracking_number: "shippingTrackingNumber",
      uncategorized_file: "uncategorizedFile",
      uncategorized_text: "uncategorizedText",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEvidence
 */
const SchemaOut$DisputeEvidence: z.ZodType<
  External$DisputeEvidence, // output type of this zod object
  z.ZodTypeDef,
  DisputeEvidence // the object to be transformed
> = z
  .object({
    accessActivityLog: z.string().nullable().optional(),
    billingAddress: z.string().nullable().optional(),
    cancellationPolicy: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    cancellationPolicyDisclosure: z.string().nullable().optional(),
    cancellationRebuttal: z.string().nullable().optional(),
    customerCommunication: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    customerEmailAddress: z.string().nullable().optional(),
    customerName: z.string().nullable().optional(),
    customerPurchaseIp: z.string().nullable().optional(),
    customerSignature: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    duplicateChargeDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    duplicateChargeExplanation: z.string().nullable().optional(),
    duplicateChargeId: z.string().nullable().optional(),
    enhancedEvidence: Schemas$DisputeEnhancedEvidence.out,
    productDescription: z.string().nullable().optional(),
    receipt: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    refundPolicy: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    refundPolicyDisclosure: z.string().nullable().optional(),
    refundRefusalExplanation: z.string().nullable().optional(),
    serviceDate: z.string().nullable().optional(),
    serviceDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    shippingAddress: z.string().nullable().optional(),
    shippingCarrier: z.string().nullable().optional(),
    shippingDate: z.string().nullable().optional(),
    shippingDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    shippingTrackingNumber: z.string().nullable().optional(),
    uncategorizedFile: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    uncategorizedText: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accessActivityLog: "access_activity_log",
      billingAddress: "billing_address",
      cancellationPolicy: "cancellation_policy",
      cancellationPolicyDisclosure: "cancellation_policy_disclosure",
      cancellationRebuttal: "cancellation_rebuttal",
      customerCommunication: "customer_communication",
      customerEmailAddress: "customer_email_address",
      customerName: "customer_name",
      customerPurchaseIp: "customer_purchase_ip",
      customerSignature: "customer_signature",
      duplicateChargeDocumentation: "duplicate_charge_documentation",
      duplicateChargeExplanation: "duplicate_charge_explanation",
      duplicateChargeId: "duplicate_charge_id",
      enhancedEvidence: "enhanced_evidence",
      productDescription: "product_description",
      receipt: "receipt",
      refundPolicy: "refund_policy",
      refundPolicyDisclosure: "refund_policy_disclosure",
      refundRefusalExplanation: "refund_refusal_explanation",
      serviceDate: "service_date",
      serviceDocumentation: "service_documentation",
      shippingAddress: "shipping_address",
      shippingCarrier: "shipping_carrier",
      shippingDate: "shipping_date",
      shippingDocumentation: "shipping_documentation",
      shippingTrackingNumber: "shipping_tracking_number",
      uncategorizedFile: "uncategorized_file",
      uncategorizedText: "uncategorized_text",
    });
  });

export const Schemas$DisputeEvidence = {
  in: SchemaIn$DisputeEvidence,
  out: SchemaOut$DisputeEvidence,
};
