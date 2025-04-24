import {
  DisputeUpdateBodyEvidence,
  External$DisputeUpdateBodyEvidence,
  Schemas$DisputeUpdateBodyEvidence,
} from "./dispute-update-body-evidence";
import {
  DisputeUpdateBodyMetadataObj0,
  External$DisputeUpdateBodyMetadataObj0,
  Schemas$DisputeUpdateBodyMetadataObj0,
} from "./dispute-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBody
 */
export type DisputeUpdateBody = {
  /**
   * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
   */
  evidence?: DisputeUpdateBodyEvidence | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (DisputeUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
   */
  submit?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (DisputeUpdateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((DisputeUpdateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * DisputeUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBody = {
  evidence?: External$DisputeUpdateBodyEvidence | undefined;
  expand?: string[] | undefined;
  metadata?: (External$DisputeUpdateBodyMetadataObj0 | string) | undefined;
  submit?: boolean | undefined;

  [additionalProperty: string]:
    | (External$DisputeUpdateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((External$DisputeUpdateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | External$DisputeUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBody
 */
const SchemaIn$DisputeUpdateBody: z.ZodType<
  DisputeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    evidence: Schemas$DisputeUpdateBodyEvidence.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$DisputeUpdateBodyMetadataObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBody
 */
const SchemaOut$DisputeUpdateBody: z.ZodType<
  External$DisputeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBody // the object to be transformed
> = z
  .object({
    evidence: Schemas$DisputeUpdateBodyEvidence.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$DisputeUpdateBodyMetadataObj0.out, z.string()])
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

export const Schemas$DisputeUpdateBody = {
  in: SchemaIn$DisputeUpdateBody,
  out: SchemaOut$DisputeUpdateBody,
};
