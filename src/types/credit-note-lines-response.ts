import {
  CreditNoteLineItem,
  External$CreditNoteLineItem,
  Schemas$CreditNoteLineItem,
} from "./credit-note-line-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CreditNoteLinesResponse = {
  /**
   * Details about each object.
   */
  data: CreditNoteLineItem[];
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
 * CreditNoteLinesResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteLinesResponse = {
  data: External$CreditNoteLineItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteLinesResponse
 */
const SchemaIn$CreditNoteLinesResponse: z.ZodType<
  CreditNoteLinesResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CreditNoteLineItem.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteLinesResponse
 */
const SchemaOut$CreditNoteLinesResponse: z.ZodType<
  External$CreditNoteLinesResponse, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteLinesResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CreditNoteLineItem.out)),
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

export const Schemas$CreditNoteLinesResponse = {
  in: SchemaIn$CreditNoteLinesResponse,
  out: SchemaOut$CreditNoteLinesResponse,
};
