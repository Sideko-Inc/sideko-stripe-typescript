import {
  ClimateSupplier,
  External$ClimateSupplier,
  Schemas$ClimateSupplier,
} from "./climate-supplier";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type V1ClimateSuppliersListResponse = {
  data: ClimateSupplier[];
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
 * V1ClimateSuppliersListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$V1ClimateSuppliersListResponse = {
  data: External$ClimateSupplier[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object V1ClimateSuppliersListResponse
 */
const SchemaIn$V1ClimateSuppliersListResponse: z.ZodType<
  V1ClimateSuppliersListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ClimateSupplier.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$V1ClimateSuppliersListResponse
 */
const SchemaOut$V1ClimateSuppliersListResponse: z.ZodType<
  External$V1ClimateSuppliersListResponse, // output type of this zod object
  z.ZodTypeDef,
  V1ClimateSuppliersListResponse // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ClimateSupplier.out),
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

export const Schemas$V1ClimateSuppliersListResponse = {
  in: SchemaIn$V1ClimateSuppliersListResponse,
  out: SchemaOut$V1ClimateSuppliersListResponse,
};
