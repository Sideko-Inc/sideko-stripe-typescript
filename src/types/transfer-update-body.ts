import {
  External$TransferUpdateBodyMetadataObj0,
  Schemas$TransferUpdateBodyMetadataObj0,
  TransferUpdateBodyMetadataObj0,
} from "./transfer-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransferUpdateBody
 */
export type TransferUpdateBody = {
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TransferUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | ((TransferUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TransferUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferUpdateBody = {
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?: (External$TransferUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | ((External$TransferUpdateBodyMetadataObj0 | string) | undefined)
    | External$TransferUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferUpdateBody
 */
const SchemaIn$TransferUpdateBody: z.ZodType<
  TransferUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransferUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferUpdateBody
 */
const SchemaOut$TransferUpdateBody: z.ZodType<
  External$TransferUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TransferUpdateBody // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransferUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$TransferUpdateBody = {
  in: SchemaIn$TransferUpdateBody,
  out: SchemaOut$TransferUpdateBody,
};
