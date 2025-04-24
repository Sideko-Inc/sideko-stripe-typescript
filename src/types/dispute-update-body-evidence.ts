import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
 */
export type DisputeUpdateBodyEvidence = {
  accessActivityLog?: string | undefined;
  billingAddress?: string | undefined;
  cancellationPolicy?: string | undefined;
  cancellationPolicyDisclosure?: string | undefined;
  cancellationRebuttal?: string | undefined;
  customerCommunication?: string | undefined;
  customerEmailAddress?: string | undefined;
  customerName?: string | undefined;
  customerPurchaseIp?: string | undefined;
  customerSignature?: string | undefined;
  duplicateChargeDocumentation?: string | undefined;
  duplicateChargeExplanation?: string | undefined;
  duplicateChargeId?: string | undefined;
  enhancedEvidence?:
    | (DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 | string)
    | undefined;
  productDescription?: string | undefined;
  receipt?: string | undefined;
  refundPolicy?: string | undefined;
  refundPolicyDisclosure?: string | undefined;
  refundRefusalExplanation?: string | undefined;
  serviceDate?: string | undefined;
  serviceDocumentation?: string | undefined;
  shippingAddress?: string | undefined;
  shippingCarrier?: string | undefined;
  shippingDate?: string | undefined;
  shippingDocumentation?: string | undefined;
  shippingTrackingNumber?: string | undefined;
  uncategorizedFile?: string | undefined;
  uncategorizedText?: string | undefined;
};

/**
 * @internal
 * DisputeUpdateBodyEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidence = {
  access_activity_log?: string | undefined;
  billing_address?: string | undefined;
  cancellation_policy?: string | undefined;
  cancellation_policy_disclosure?: string | undefined;
  cancellation_rebuttal?: string | undefined;
  customer_communication?: string | undefined;
  customer_email_address?: string | undefined;
  customer_name?: string | undefined;
  customer_purchase_ip?: string | undefined;
  customer_signature?: string | undefined;
  duplicate_charge_documentation?: string | undefined;
  duplicate_charge_explanation?: string | undefined;
  duplicate_charge_id?: string | undefined;
  enhanced_evidence?:
    | (External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 | string)
    | undefined;
  product_description?: string | undefined;
  receipt?: string | undefined;
  refund_policy?: string | undefined;
  refund_policy_disclosure?: string | undefined;
  refund_refusal_explanation?: string | undefined;
  service_date?: string | undefined;
  service_documentation?: string | undefined;
  shipping_address?: string | undefined;
  shipping_carrier?: string | undefined;
  shipping_date?: string | undefined;
  shipping_documentation?: string | undefined;
  shipping_tracking_number?: string | undefined;
  uncategorized_file?: string | undefined;
  uncategorized_text?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidence
 */
const SchemaIn$DisputeUpdateBodyEvidence: z.ZodType<
  DisputeUpdateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    access_activity_log: z.string().optional(),
    billing_address: z.string().optional(),
    cancellation_policy: z.string().optional(),
    cancellation_policy_disclosure: z.string().optional(),
    cancellation_rebuttal: z.string().optional(),
    customer_communication: z.string().optional(),
    customer_email_address: z.string().optional(),
    customer_name: z.string().optional(),
    customer_purchase_ip: z.string().optional(),
    customer_signature: z.string().optional(),
    duplicate_charge_documentation: z.string().optional(),
    duplicate_charge_explanation: z.string().optional(),
    duplicate_charge_id: z.string().optional(),
    enhanced_evidence: z
      .union([
        Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0.in,
        z.string(),
      ])
      .optional(),
    product_description: z.string().optional(),
    receipt: z.string().optional(),
    refund_policy: z.string().optional(),
    refund_policy_disclosure: z.string().optional(),
    refund_refusal_explanation: z.string().optional(),
    service_date: z.string().optional(),
    service_documentation: z.string().optional(),
    shipping_address: z.string().optional(),
    shipping_carrier: z.string().optional(),
    shipping_date: z.string().optional(),
    shipping_documentation: z.string().optional(),
    shipping_tracking_number: z.string().optional(),
    uncategorized_file: z.string().optional(),
    uncategorized_text: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidence
 */
const SchemaOut$DisputeUpdateBodyEvidence: z.ZodType<
  External$DisputeUpdateBodyEvidence, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidence // the object to be transformed
> = z
  .object({
    accessActivityLog: z.string().optional(),
    billingAddress: z.string().optional(),
    cancellationPolicy: z.string().optional(),
    cancellationPolicyDisclosure: z.string().optional(),
    cancellationRebuttal: z.string().optional(),
    customerCommunication: z.string().optional(),
    customerEmailAddress: z.string().optional(),
    customerName: z.string().optional(),
    customerPurchaseIp: z.string().optional(),
    customerSignature: z.string().optional(),
    duplicateChargeDocumentation: z.string().optional(),
    duplicateChargeExplanation: z.string().optional(),
    duplicateChargeId: z.string().optional(),
    enhancedEvidence: z
      .union([
        Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0.out,
        z.string(),
      ])
      .optional(),
    productDescription: z.string().optional(),
    receipt: z.string().optional(),
    refundPolicy: z.string().optional(),
    refundPolicyDisclosure: z.string().optional(),
    refundRefusalExplanation: z.string().optional(),
    serviceDate: z.string().optional(),
    serviceDocumentation: z.string().optional(),
    shippingAddress: z.string().optional(),
    shippingCarrier: z.string().optional(),
    shippingDate: z.string().optional(),
    shippingDocumentation: z.string().optional(),
    shippingTrackingNumber: z.string().optional(),
    uncategorizedFile: z.string().optional(),
    uncategorizedText: z.string().optional(),
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

export const Schemas$DisputeUpdateBodyEvidence = {
  in: SchemaIn$DisputeUpdateBodyEvidence,
  out: SchemaOut$DisputeUpdateBodyEvidence,
};
