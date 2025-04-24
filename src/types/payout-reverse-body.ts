import {
  External$PayoutReverseBodyMetadata,
  PayoutReverseBodyMetadata,
  Schemas$PayoutReverseBodyMetadata,
} from "./payout-reverse-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutReverseBody
 */
export type PayoutReverseBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PayoutReverseBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (PayoutReverseBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PayoutReverseBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutReverseBody = {
  expand?: string[] | undefined;
  metadata?: External$PayoutReverseBodyMetadata | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$PayoutReverseBodyMetadata | undefined)
    | External$PayoutReverseBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutReverseBody
 */
const SchemaIn$PayoutReverseBody: z.ZodType<
  PayoutReverseBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutReverseBodyMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutReverseBody
 */
const SchemaOut$PayoutReverseBody: z.ZodType<
  External$PayoutReverseBody, // output type of this zod object
  z.ZodTypeDef,
  PayoutReverseBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutReverseBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$PayoutReverseBody = {
  in: SchemaIn$PayoutReverseBody,
  out: SchemaOut$PayoutReverseBody,
};
