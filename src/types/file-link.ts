import { External$File, File, Schemas$File } from "./file";
import {
  External$FileLinkMetadata,
  FileLinkMetadata,
  Schemas$FileLinkMetadata,
} from "./file-link-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * To share the contents of a `File` object with non-Stripe users, you can
 * create a `FileLink`. `FileLink`s contain a URL that you can use to
 * retrieve the contents of the file without authentication.
 */
export type FileLink = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Returns if the link is already expired.
   */
  expired: boolean;
  /**
   * Time that the link expires.
   */
  expiresAt?: number | null | undefined;
  /**
   * The file object this link points to.
   */
  file: string | File;
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
  metadata: FileLinkMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "file_link";
  /**
   * The publicly accessible URL to download the file.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * FileLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLink = {
  created: number;
  expired: boolean;
  expires_at?: number | null | undefined;
  file: string | External$File;
  id: string;
  livemode: boolean;
  metadata: External$FileLinkMetadata;
  object: "file_link";
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLink
 */
const SchemaIn$FileLink: z.ZodType<
  FileLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    expired: z.boolean(),
    expires_at: z.number().int().nullable().optional(),
    file: z.union([z.string(), z.lazy(() => Schemas$File.in)]),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$FileLinkMetadata.in,
    object: z.enum(["file_link"]),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expired: "expired",
      expires_at: "expiresAt",
      file: "file",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLink
 */
const SchemaOut$FileLink: z.ZodType<
  External$FileLink, // output type of this zod object
  z.ZodTypeDef,
  FileLink // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    expired: z.boolean(),
    expiresAt: z.number().int().nullable().optional(),
    file: z.union([z.string(), z.lazy(() => Schemas$File.out)]),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$FileLinkMetadata.out,
    object: z.enum(["file_link"]),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expired: "expired",
      expiresAt: "expires_at",
      file: "file",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      url: "url",
    });
  });

export const Schemas$FileLink = {
  in: SchemaIn$FileLink,
  out: SchemaOut$FileLink,
};
