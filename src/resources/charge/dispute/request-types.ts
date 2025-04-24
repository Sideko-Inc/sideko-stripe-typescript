import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeDisputeCloseBody,
  External$ChargeDisputeCloseBody,
  Schemas$ChargeDisputeCloseBody,
} from "@sideko-inc/stripe/types/charge-dispute-close-body";
import {
  ChargeDisputeCreateBody,
  External$ChargeDisputeCreateBody,
  Schemas$ChargeDisputeCreateBody,
} from "@sideko-inc/stripe/types/charge-dispute-create-body";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  charge: string;
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
  charge: string;
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
  data?: ChargeDisputeCreateBody | undefined;
  charge: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$ChargeDisputeCreateBody | undefined;
  charge: string;
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
    data: Schemas$ChargeDisputeCreateBody.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
    data: Schemas$ChargeDisputeCreateBody.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CloseRequest
 */
export type CloseRequest = {
  data?: ChargeDisputeCloseBody | undefined;
  charge: string;
};

/**
 * @internal
 * CloseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CloseRequest = {
  data?: External$ChargeDisputeCloseBody | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CloseRequest
 */
const SchemaIn$CloseRequest: z.ZodType<
  CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ChargeDisputeCloseBody.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CloseRequest
 */
const SchemaOut$CloseRequest: z.ZodType<
  External$CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  CloseRequest // the object to be transformed
> = z
  .object({
    data: Schemas$ChargeDisputeCloseBody.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$CloseRequest = {
  in: SchemaIn$CloseRequest,
  out: SchemaOut$CloseRequest,
};
