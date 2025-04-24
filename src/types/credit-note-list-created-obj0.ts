import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNoteListCreatedObj0
 */
export type CreditNoteListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * CreditNoteListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteListCreatedObj0
 */
const SchemaIn$CreditNoteListCreatedObj0: z.ZodType<
  CreditNoteListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteListCreatedObj0
 */
const SchemaOut$CreditNoteListCreatedObj0: z.ZodType<
  External$CreditNoteListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$CreditNoteListCreatedObj0 = {
  in: SchemaIn$CreditNoteListCreatedObj0,
  out: SchemaOut$CreditNoteListCreatedObj0,
};
