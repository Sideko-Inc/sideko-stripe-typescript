import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeEps
 */
export type SourceTypeEps = {
  reference?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeEps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeEps = {
  reference?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeEps
 */
const SchemaIn$SourceTypeEps: z.ZodType<
  SourceTypeEps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeEps
 */
const SchemaOut$SourceTypeEps: z.ZodType<
  External$SourceTypeEps, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeEps // the object to be transformed
> = z
  .object({
    reference: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeEps = {
  in: SchemaIn$SourceTypeEps,
  out: SchemaOut$SourceTypeEps,
};
