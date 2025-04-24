import {
  External$IssuingDisputeUpdateBodyEvidence,
  IssuingDisputeUpdateBodyEvidence,
  Schemas$IssuingDisputeUpdateBodyEvidence,
} from "./issuing-dispute-update-body-evidence";
import {
  External$IssuingDisputeUpdateBodyMetadataObj0,
  IssuingDisputeUpdateBodyMetadataObj0,
  Schemas$IssuingDisputeUpdateBodyMetadataObj0,
} from "./issuing-dispute-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBody
 */
export type IssuingDisputeUpdateBody = {
  /**
   * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount?: number | undefined;
  /**
   * Evidence provided for the dispute.
   */
  evidence?: IssuingDisputeUpdateBodyEvidence | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (IssuingDisputeUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (IssuingDisputeUpdateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((IssuingDisputeUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBody = {
  amount?: number | undefined;
  evidence?: External$IssuingDisputeUpdateBodyEvidence | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingDisputeUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (External$IssuingDisputeUpdateBodyEvidence | undefined)
    | (string[] | undefined)
    | ((External$IssuingDisputeUpdateBodyMetadataObj0 | string) | undefined)
    | External$IssuingDisputeUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBody
 */
const SchemaIn$IssuingDisputeUpdateBody: z.ZodType<
  IssuingDisputeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    evidence: Schemas$IssuingDisputeUpdateBodyEvidence.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$IssuingDisputeUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBody
 */
const SchemaOut$IssuingDisputeUpdateBody: z.ZodType<
  External$IssuingDisputeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    evidence: Schemas$IssuingDisputeUpdateBodyEvidence.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$IssuingDisputeUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$IssuingDisputeUpdateBody = {
  in: SchemaIn$IssuingDisputeUpdateBody,
  out: SchemaOut$IssuingDisputeUpdateBody,
};
