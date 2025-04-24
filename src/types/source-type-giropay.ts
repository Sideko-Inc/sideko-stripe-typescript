import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeGiropay
 */
export type SourceTypeGiropay = {
  bankCode?: string | null | undefined;
  bankName?: string | null | undefined;
  bic?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeGiropay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeGiropay = {
  bank_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  bic?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeGiropay
 */
const SchemaIn$SourceTypeGiropay: z.ZodType<
  SourceTypeGiropay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      bank_name: "bankName",
      bic: "bic",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeGiropay
 */
const SchemaOut$SourceTypeGiropay: z.ZodType<
  External$SourceTypeGiropay, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeGiropay // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      bankName: "bank_name",
      bic: "bic",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeGiropay = {
  in: SchemaIn$SourceTypeGiropay,
  out: SchemaOut$SourceTypeGiropay,
};
