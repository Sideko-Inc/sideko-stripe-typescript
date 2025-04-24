import {
  External$InvoiceRenderingTemplate,
  InvoiceRenderingTemplate,
  Schemas$InvoiceRenderingTemplate,
} from "./invoice-rendering-template";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceRenderingTemplateListResponse = {
  /**
   * Details about each object.
   */
  data: InvoiceRenderingTemplate[];
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
 * InvoiceRenderingTemplateListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceRenderingTemplateListResponse = {
  data: External$InvoiceRenderingTemplate[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceRenderingTemplateListResponse
 */
const SchemaIn$InvoiceRenderingTemplateListResponse: z.ZodType<
  InvoiceRenderingTemplateListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$InvoiceRenderingTemplate.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceRenderingTemplateListResponse
 */
const SchemaOut$InvoiceRenderingTemplateListResponse: z.ZodType<
  External$InvoiceRenderingTemplateListResponse, // output type of this zod object
  z.ZodTypeDef,
  InvoiceRenderingTemplateListResponse // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$InvoiceRenderingTemplate.out),
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

export const Schemas$InvoiceRenderingTemplateListResponse = {
  in: SchemaIn$InvoiceRenderingTemplateListResponse,
  out: SchemaOut$InvoiceRenderingTemplateListResponse,
};
