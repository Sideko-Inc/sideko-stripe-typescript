import {
  CreditNoteUpdateBodyMetadata,
  External$CreditNoteUpdateBodyMetadata,
  Schemas$CreditNoteUpdateBodyMetadata,
} from "./credit-note-update-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNoteUpdateBody
 */
export type CreditNoteUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Credit note memo.
   */
  memo?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CreditNoteUpdateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (CreditNoteUpdateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CreditNoteUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteUpdateBody = {
  expand?: string[] | undefined;
  memo?: string | undefined;
  metadata?: External$CreditNoteUpdateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (External$CreditNoteUpdateBodyMetadata | undefined)
    | External$CreditNoteUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteUpdateBody
 */
const SchemaIn$CreditNoteUpdateBody: z.ZodType<
  CreditNoteUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNoteUpdateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      memo: "memo",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteUpdateBody
 */
const SchemaOut$CreditNoteUpdateBody: z.ZodType<
  External$CreditNoteUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNoteUpdateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      memo: "memo",
      metadata: "metadata",
    });
  });

export const Schemas$CreditNoteUpdateBody = {
  in: SchemaIn$CreditNoteUpdateBody,
  out: SchemaOut$CreditNoteUpdateBody,
};
