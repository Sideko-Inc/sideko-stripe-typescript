import {
  External$IssuingSettlementUpdateBodyMetadata,
  IssuingSettlementUpdateBodyMetadata,
  Schemas$IssuingSettlementUpdateBodyMetadata,
} from "./issuing-settlement-update-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingSettlementUpdateBody
 */
export type IssuingSettlementUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingSettlementUpdateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (IssuingSettlementUpdateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingSettlementUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingSettlementUpdateBody = {
  expand?: string[] | undefined;
  metadata?: External$IssuingSettlementUpdateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$IssuingSettlementUpdateBodyMetadata | undefined)
    | External$IssuingSettlementUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingSettlementUpdateBody
 */
const SchemaIn$IssuingSettlementUpdateBody: z.ZodType<
  IssuingSettlementUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$IssuingSettlementUpdateBodyMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingSettlementUpdateBody
 */
const SchemaOut$IssuingSettlementUpdateBody: z.ZodType<
  External$IssuingSettlementUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingSettlementUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$IssuingSettlementUpdateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$IssuingSettlementUpdateBody = {
  in: SchemaIn$IssuingSettlementUpdateBody,
  out: SchemaOut$IssuingSettlementUpdateBody,
};
