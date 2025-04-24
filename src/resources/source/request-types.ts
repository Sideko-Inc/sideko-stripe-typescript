import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SourceCreateBody,
  Schemas$SourceCreateBody,
  SourceCreateBody,
} from "@sideko-inc/stripe/types/source-create-body";
import {
  External$SourceUpdateBody,
  Schemas$SourceUpdateBody,
  SourceUpdateBody,
} from "@sideko-inc/stripe/types/source-update-body";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  source: string;
  /**
   * The client secret of the source. Required if a publishable key is used to retrieve the source.
   */
  clientSecret?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  source: string;
  client_secret?: string | undefined;
  expand?: string[] | undefined;
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
    source: z.string(),
    client_secret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      source: "source",
      client_secret: "clientSecret",
      expand: "expand",
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
    source: z.string(),
    clientSecret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      source: "source",
      clientSecret: "client_secret",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: SourceCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$SourceCreateBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SourceCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SourceCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: SourceUpdateBody | undefined;
  source: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$SourceUpdateBody | undefined;
  source: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SourceUpdateBody.in.optional(),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      source: "source",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SourceUpdateBody.out.optional(),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      source: "source",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * VerifyRequest
 */
export type VerifyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The values needed to verify the source.
   */
  values: string[];
  source: string;
};

/**
 * @internal
 * VerifyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyRequest = {
  expand?: string[] | undefined;
  values: string[];
  source: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyRequest
 */
const SchemaIn$VerifyRequest: z.ZodType<
  VerifyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
      source: "source",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyRequest
 */
const SchemaOut$VerifyRequest: z.ZodType<
  External$VerifyRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
      source: "source",
    });
  });

export const Schemas$VerifyRequest = {
  in: SchemaIn$VerifyRequest,
  out: SchemaOut$VerifyRequest,
};
