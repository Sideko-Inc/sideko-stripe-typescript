import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedWebhookEndpoint = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "webhook_endpoint";
};

/**
 * @internal
 * DeletedWebhookEndpoint without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedWebhookEndpoint = {
  deleted: boolean;
  id: string;
  object: "webhook_endpoint";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedWebhookEndpoint
 */
const SchemaIn$DeletedWebhookEndpoint: z.ZodType<
  DeletedWebhookEndpoint, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["webhook_endpoint"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedWebhookEndpoint
 */
const SchemaOut$DeletedWebhookEndpoint: z.ZodType<
  External$DeletedWebhookEndpoint, // output type of this zod object
  z.ZodTypeDef,
  DeletedWebhookEndpoint // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["webhook_endpoint"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedWebhookEndpoint = {
  in: SchemaIn$DeletedWebhookEndpoint,
  out: SchemaOut$DeletedWebhookEndpoint,
};
