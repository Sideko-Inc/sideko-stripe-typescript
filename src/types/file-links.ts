import { External$FileLink, FileLink, Schemas$FileLink } from "./file-link";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
 */
export type FileLinks = {
  /**
   * Details about each object.
   */
  data: FileLink[];
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
 * FileLinks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinks = {
  data: External$FileLink[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinks
 */
const SchemaIn$FileLinks: z.ZodType<
  FileLinks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FileLink.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinks
 */
const SchemaOut$FileLinks: z.ZodType<
  External$FileLinks, // output type of this zod object
  z.ZodTypeDef,
  FileLinks // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FileLink.out)),
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

export const Schemas$FileLinks = {
  in: SchemaIn$FileLinks,
  out: SchemaOut$FileLinks,
};
