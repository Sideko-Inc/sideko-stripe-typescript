import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type CreditNoteUpdateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CreditNoteUpdateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteUpdateBodyMetadata = {
  [additionalProperty: string]:
    | External$CreditNoteUpdateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteUpdateBodyMetadata
 */
const SchemaIn$CreditNoteUpdateBodyMetadata: z.ZodType<
  CreditNoteUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteUpdateBodyMetadata
 */
const SchemaOut$CreditNoteUpdateBodyMetadata: z.ZodType<
  External$CreditNoteUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteUpdateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CreditNoteUpdateBodyMetadata = {
  in: SchemaIn$CreditNoteUpdateBodyMetadata,
  out: SchemaOut$CreditNoteUpdateBodyMetadata,
};
