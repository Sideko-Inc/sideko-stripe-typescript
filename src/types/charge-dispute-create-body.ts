import {
  ChargeDisputeCreateBodyEvidence,
  External$ChargeDisputeCreateBodyEvidence,
  Schemas$ChargeDisputeCreateBodyEvidence,
} from "./charge-dispute-create-body-evidence";
import {
  ChargeDisputeCreateBodyMetadataObj0,
  External$ChargeDisputeCreateBodyMetadataObj0,
  Schemas$ChargeDisputeCreateBodyMetadataObj0,
} from "./charge-dispute-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeDisputeCreateBody
 */
export type ChargeDisputeCreateBody = {
  /**
   * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
   */
  evidence?: ChargeDisputeCreateBodyEvidence | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeDisputeCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
   */
  submit?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (ChargeDisputeCreateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((ChargeDisputeCreateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeDisputeCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeDisputeCreateBody = {
  evidence?: External$ChargeDisputeCreateBodyEvidence | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$ChargeDisputeCreateBodyMetadataObj0 | string)
    | undefined;
  submit?: boolean | undefined;

  [additionalProperty: string]:
    | (External$ChargeDisputeCreateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((External$ChargeDisputeCreateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | External$ChargeDisputeCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeDisputeCreateBody
 */
const SchemaIn$ChargeDisputeCreateBody: z.ZodType<
  ChargeDisputeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    evidence: Schemas$ChargeDisputeCreateBodyEvidence.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeDisputeCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    submit: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      submit: "submit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeDisputeCreateBody
 */
const SchemaOut$ChargeDisputeCreateBody: z.ZodType<
  External$ChargeDisputeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ChargeDisputeCreateBody // the object to be transformed
> = z
  .object({
    evidence: Schemas$ChargeDisputeCreateBodyEvidence.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeDisputeCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    submit: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      submit: "submit",
    });
  });

export const Schemas$ChargeDisputeCreateBody = {
  in: SchemaIn$ChargeDisputeCreateBody,
  out: SchemaOut$ChargeDisputeCreateBody,
};
