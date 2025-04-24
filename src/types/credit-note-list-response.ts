import {
  CreditNote,
  External$CreditNote,
  Schemas$CreditNote,
} from "./credit-note";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CreditNoteListResponse = {
  data: CreditNote[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * CreditNoteListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteListResponse = {
  data: External$CreditNote[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteListResponse
 */
const SchemaIn$CreditNoteListResponse: z.ZodType<
  CreditNoteListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CreditNote.in)),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteListResponse
 */
const SchemaOut$CreditNoteListResponse: z.ZodType<
  External$CreditNoteListResponse, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CreditNote.out)),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$CreditNoteListResponse = {
  in: SchemaIn$CreditNoteListResponse,
  out: SchemaOut$CreditNoteListResponse,
};
