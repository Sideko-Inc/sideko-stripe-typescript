import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteFinalizeBody
 */
export type QuoteFinalizeBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * QuoteFinalizeBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteFinalizeBody = {
  expand?: string[] | undefined;
  expires_at?: number | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | External$QuoteFinalizeBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteFinalizeBody
 */
const SchemaIn$QuoteFinalizeBody: z.ZodType<
  QuoteFinalizeBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteFinalizeBody
 */
const SchemaOut$QuoteFinalizeBody: z.ZodType<
  External$QuoteFinalizeBody, // output type of this zod object
  z.ZodTypeDef,
  QuoteFinalizeBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
    });
  });

export const Schemas$QuoteFinalizeBody = {
  in: SchemaIn$QuoteFinalizeBody,
  out: SchemaOut$QuoteFinalizeBody,
};
