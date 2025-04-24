import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string | null | undefined;
  /**
   * Date when the product was received.
   */
  receivedAt?: number | null | undefined;
  /**
   * Description of the cardholder's attempt to return the product.
   */
  returnDescription?: string | null | undefined;
  /**
   * Result of cardholder's attempt to return the product.
   */
  returnStatus?: ("merchant_rejected" | "successful") | null | undefined;
  /**
   * Date when the product was returned or attempted to be returned.
   */
  returnedAt?: number | null | undefined;
};

/**
 * @internal
 * IssuingDisputeMerchandiseNotAsDescribedEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  explanation?: string | null | undefined;
  received_at?: number | null | undefined;
  return_description?: string | null | undefined;
  return_status?: ("merchant_rejected" | "successful") | null | undefined;
  returned_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeMerchandiseNotAsDescribedEvidence
 */
const SchemaIn$IssuingDisputeMerchandiseNotAsDescribedEvidence: z.ZodType<
  IssuingDisputeMerchandiseNotAsDescribedEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    explanation: z.string().nullable().optional(),
    received_at: z.number().int().nullable().optional(),
    return_description: z.string().nullable().optional(),
    return_status: z
      .enum(["merchant_rejected", "successful"])
      .nullable()
      .optional(),
    returned_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      explanation: "explanation",
      received_at: "receivedAt",
      return_description: "returnDescription",
      return_status: "returnStatus",
      returned_at: "returnedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeMerchandiseNotAsDescribedEvidence
 */
const SchemaOut$IssuingDisputeMerchandiseNotAsDescribedEvidence: z.ZodType<
  External$IssuingDisputeMerchandiseNotAsDescribedEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeMerchandiseNotAsDescribedEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    explanation: z.string().nullable().optional(),
    receivedAt: z.number().int().nullable().optional(),
    returnDescription: z.string().nullable().optional(),
    returnStatus: z
      .enum(["merchant_rejected", "successful"])
      .nullable()
      .optional(),
    returnedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      explanation: "explanation",
      receivedAt: "received_at",
      returnDescription: "return_description",
      returnStatus: "return_status",
      returnedAt: "returned_at",
    });
  });

export const Schemas$IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  in: SchemaIn$IssuingDisputeMerchandiseNotAsDescribedEvidence,
  out: SchemaOut$IssuingDisputeMerchandiseNotAsDescribedEvidence,
};
