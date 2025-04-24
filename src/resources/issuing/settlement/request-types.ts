import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingSettlementUpdateBody,
  IssuingSettlementUpdateBody,
  Schemas$IssuingSettlementUpdateBody,
} from "@sideko-inc/stripe/types/issuing-settlement-update-body";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  settlement: string;
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
  settlement: string;
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
    settlement: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settlement: "settlement",
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
    settlement: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settlement: "settlement",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: IssuingSettlementUpdateBody | undefined;
  settlement: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingSettlementUpdateBody | undefined;
  settlement: string;
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
    data: Schemas$IssuingSettlementUpdateBody.in.optional(),
    settlement: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      settlement: "settlement",
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
    data: Schemas$IssuingSettlementUpdateBody.out.optional(),
    settlement: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      settlement: "settlement",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
