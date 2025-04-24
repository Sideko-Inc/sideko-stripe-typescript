import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeP24
 */
export type SourceTypeP24 = {
  reference?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeP24 = {
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeP24
 */
const SchemaIn$SourceTypeP24: z.ZodType<
  SourceTypeP24, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeP24
 */
const SchemaOut$SourceTypeP24: z.ZodType<
  External$SourceTypeP24, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeP24 // the object to be transformed
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

export const Schemas$SourceTypeP24 = {
  in: SchemaIn$SourceTypeP24,
  out: SchemaOut$SourceTypeP24,
};
