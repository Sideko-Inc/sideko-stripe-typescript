import {
  External$PayoutUpdateBodyMetadataObj0,
  PayoutUpdateBodyMetadataObj0,
  Schemas$PayoutUpdateBodyMetadataObj0,
} from "./payout-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutUpdateBody
 */
export type PayoutUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PayoutUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((PayoutUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PayoutUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutUpdateBody = {
  expand?: string[] | undefined;
  metadata?: (External$PayoutUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((External$PayoutUpdateBodyMetadataObj0 | string) | undefined)
    | External$PayoutUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutUpdateBody
 */
const SchemaIn$PayoutUpdateBody: z.ZodType<
  PayoutUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PayoutUpdateBodyMetadataObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutUpdateBody
 */
const SchemaOut$PayoutUpdateBody: z.ZodType<
  External$PayoutUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PayoutUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PayoutUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$PayoutUpdateBody = {
  in: SchemaIn$PayoutUpdateBody,
  out: SchemaOut$PayoutUpdateBody,
};
