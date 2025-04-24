import {
  External$InvoiceRenderingTemplateMetadata,
  InvoiceRenderingTemplateMetadata,
  Schemas$InvoiceRenderingTemplateMetadata,
} from "./invoice-rendering-template-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Invoice Rendering Templates are used to configure how invoices are rendered on surfaces like the PDF. Invoice Rendering Templates
 * can be created from within the Dashboard, and they can be used over the API when creating invoices.
 */
export type InvoiceRenderingTemplate = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: InvoiceRenderingTemplateMetadata | null | undefined;
  /**
   * A brief description of the template, hidden from customers
   */
  nickname?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "invoice_rendering_template";
  /**
   * The status of the template, one of `active` or `archived`.
   */
  status: "active" | "archived";
  /**
   * Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering
   */
  version: number;
};

/**
 * @internal
 * InvoiceRenderingTemplate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceRenderingTemplate = {
  created: number;
  id: string;
  livemode: boolean;
  metadata?: External$InvoiceRenderingTemplateMetadata | null | undefined;
  nickname?: string | null | undefined;
  object: "invoice_rendering_template";
  status: "active" | "archived";
  version: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceRenderingTemplate
 */
const SchemaIn$InvoiceRenderingTemplate: z.ZodType<
  InvoiceRenderingTemplate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceRenderingTemplateMetadata.in.nullable().optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["invoice_rendering_template"]),
    status: z.enum(["active", "archived"]),
    version: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      status: "status",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceRenderingTemplate
 */
const SchemaOut$InvoiceRenderingTemplate: z.ZodType<
  External$InvoiceRenderingTemplate, // output type of this zod object
  z.ZodTypeDef,
  InvoiceRenderingTemplate // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceRenderingTemplateMetadata.out
      .nullable()
      .optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["invoice_rendering_template"]),
    status: z.enum(["active", "archived"]),
    version: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      status: "status",
      version: "version",
    });
  });

export const Schemas$InvoiceRenderingTemplate = {
  in: SchemaIn$InvoiceRenderingTemplate,
  out: SchemaOut$InvoiceRenderingTemplate,
};
