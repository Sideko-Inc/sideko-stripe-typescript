import {
  External$TerminalLocation,
  Schemas$TerminalLocation,
  TerminalLocation,
} from "./terminal-location";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalLocationListResponse = {
  data: TerminalLocation[];
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
 * TerminalLocationListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationListResponse = {
  data: External$TerminalLocation[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationListResponse
 */
const SchemaIn$TerminalLocationListResponse: z.ZodType<
  TerminalLocationListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TerminalLocation.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationListResponse
 */
const SchemaOut$TerminalLocationListResponse: z.ZodType<
  External$TerminalLocationListResponse, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationListResponse // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TerminalLocation.out),
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

export const Schemas$TerminalLocationListResponse = {
  in: SchemaIn$TerminalLocationListResponse,
  out: SchemaOut$TerminalLocationListResponse,
};
