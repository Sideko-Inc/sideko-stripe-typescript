import {
  External$TransfersReversalUpdateBodyMetadataObj0,
  Schemas$TransfersReversalUpdateBodyMetadataObj0,
  TransfersReversalUpdateBodyMetadataObj0,
} from "./transfers-reversal-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransfersReversalUpdateBody
 */
export type TransfersReversalUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TransfersReversalUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((TransfersReversalUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TransfersReversalUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransfersReversalUpdateBody = {
  expand?: string[] | undefined;
  metadata?:
    | (External$TransfersReversalUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((External$TransfersReversalUpdateBodyMetadataObj0 | string) | undefined)
    | External$TransfersReversalUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransfersReversalUpdateBody
 */
const SchemaIn$TransfersReversalUpdateBody: z.ZodType<
  TransfersReversalUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransfersReversalUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransfersReversalUpdateBody
 */
const SchemaOut$TransfersReversalUpdateBody: z.ZodType<
  External$TransfersReversalUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TransfersReversalUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransfersReversalUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$TransfersReversalUpdateBody = {
  in: SchemaIn$TransfersReversalUpdateBody,
  out: SchemaOut$TransfersReversalUpdateBody,
};
