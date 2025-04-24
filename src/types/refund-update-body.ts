import {
  External$RefundUpdateBodyMetadataObj0,
  RefundUpdateBodyMetadataObj0,
  Schemas$RefundUpdateBodyMetadataObj0,
} from "./refund-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RefundUpdateBody
 */
export type RefundUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (RefundUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((RefundUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * RefundUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundUpdateBody = {
  expand?: string[] | undefined;
  metadata?: (External$RefundUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((External$RefundUpdateBodyMetadataObj0 | string) | undefined)
    | External$RefundUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundUpdateBody
 */
const SchemaIn$RefundUpdateBody: z.ZodType<
  RefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$RefundUpdateBodyMetadataObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundUpdateBody
 */
const SchemaOut$RefundUpdateBody: z.ZodType<
  External$RefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  RefundUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$RefundUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$RefundUpdateBody = {
  in: SchemaIn$RefundUpdateBody,
  out: SchemaOut$RefundUpdateBody,
};
