import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$InvoiceRenderingTemplateArchiveBody,
  InvoiceRenderingTemplateArchiveBody,
  Schemas$InvoiceRenderingTemplateArchiveBody,
} from "@sideko-inc/stripe/types/invoice-rendering-template-archive-body";
import {
  External$InvoiceRenderingTemplateUnarchiveBody,
  InvoiceRenderingTemplateUnarchiveBody,
  Schemas$InvoiceRenderingTemplateUnarchiveBody,
} from "@sideko-inc/stripe/types/invoice-rendering-template-unarchive-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  status?: ("active" | "archived") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "archived") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "archived"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "archived"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  template: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  version?: number | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  template: string;
  expand?: string[] | undefined;
  version?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    template: z.string(),
    expand: z.array(z.string()).optional(),
    version: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      template: "template",
      expand: "expand",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    template: z.string(),
    expand: z.array(z.string()).optional(),
    version: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      template: "template",
      expand: "expand",
      version: "version",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ArchiveRequest
 */
export type ArchiveRequest = {
  data?: InvoiceRenderingTemplateArchiveBody | undefined;
  template: string;
};

/**
 * @internal
 * ArchiveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ArchiveRequest = {
  data?: External$InvoiceRenderingTemplateArchiveBody | undefined;
  template: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ArchiveRequest
 */
const SchemaIn$ArchiveRequest: z.ZodType<
  ArchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceRenderingTemplateArchiveBody.in.optional(),
    template: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      template: "template",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ArchiveRequest
 */
const SchemaOut$ArchiveRequest: z.ZodType<
  External$ArchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  ArchiveRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceRenderingTemplateArchiveBody.out.optional(),
    template: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      template: "template",
    });
  });

export const Schemas$ArchiveRequest = {
  in: SchemaIn$ArchiveRequest,
  out: SchemaOut$ArchiveRequest,
};

/**
 * UnarchiveRequest
 */
export type UnarchiveRequest = {
  data?: InvoiceRenderingTemplateUnarchiveBody | undefined;
  template: string;
};

/**
 * @internal
 * UnarchiveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UnarchiveRequest = {
  data?: External$InvoiceRenderingTemplateUnarchiveBody | undefined;
  template: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UnarchiveRequest
 */
const SchemaIn$UnarchiveRequest: z.ZodType<
  UnarchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceRenderingTemplateUnarchiveBody.in.optional(),
    template: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      template: "template",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UnarchiveRequest
 */
const SchemaOut$UnarchiveRequest: z.ZodType<
  External$UnarchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  UnarchiveRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceRenderingTemplateUnarchiveBody.out.optional(),
    template: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      template: "template",
    });
  });

export const Schemas$UnarchiveRequest = {
  in: SchemaIn$UnarchiveRequest,
  out: SchemaOut$UnarchiveRequest,
};
