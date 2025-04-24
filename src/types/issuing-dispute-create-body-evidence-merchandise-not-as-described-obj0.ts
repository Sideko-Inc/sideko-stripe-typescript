import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0
 */
export type IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  receivedAt?: (number | string) | undefined;
  returnDescription?: (string | string) | undefined;
  returnStatus?: ("merchant_rejected" | "successful") | undefined;
  returnedAt?: (number | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 =
  {
    additional_documentation?: (string | string) | undefined;
    explanation?: (string | string) | undefined;
    received_at?: (number | string) | undefined;
    return_description?: (string | string) | undefined;
    return_status?: ("merchant_rejected" | "successful") | undefined;
    returned_at?: (number | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    received_at: z.union([z.number().int(), z.string()]).optional(),
    return_description: z.union([z.string(), z.string()]).optional(),
    return_status: z.enum(["merchant_rejected", "successful"]).optional(),
    returned_at: z.union([z.number().int(), z.string()]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    receivedAt: z.union([z.number().int(), z.string()]).optional(),
    returnDescription: z.union([z.string(), z.string()]).optional(),
    returnStatus: z.enum(["merchant_rejected", "successful"]).optional(),
    returnedAt: z.union([z.number().int(), z.string()]).optional(),
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

export const Schemas$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0 =
  {
    in: SchemaIn$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0,
    out: SchemaOut$IssuingDisputeCreateBodyEvidenceMerchandiseNotAsDescribedObj0,
  };
