import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * WebhookEndpointsUpdateBodyMetadataObj0
 */
export type WebhookEndpointsUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * WebhookEndpointsUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$WebhookEndpointsUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$WebhookEndpointsUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object WebhookEndpointsUpdateBodyMetadataObj0
 */
const SchemaIn$WebhookEndpointsUpdateBodyMetadataObj0: z.ZodType<
  WebhookEndpointsUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$WebhookEndpointsUpdateBodyMetadataObj0
 */
const SchemaOut$WebhookEndpointsUpdateBodyMetadataObj0: z.ZodType<
  External$WebhookEndpointsUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  WebhookEndpointsUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$WebhookEndpointsUpdateBodyMetadataObj0 = {
  in: SchemaIn$WebhookEndpointsUpdateBodyMetadataObj0,
  out: SchemaOut$WebhookEndpointsUpdateBodyMetadataObj0,
};
