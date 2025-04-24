import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * WebhookEndpointsCreateBodyMetadataObj0
 */
export type WebhookEndpointsCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * WebhookEndpointsCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$WebhookEndpointsCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$WebhookEndpointsCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object WebhookEndpointsCreateBodyMetadataObj0
 */
const SchemaIn$WebhookEndpointsCreateBodyMetadataObj0: z.ZodType<
  WebhookEndpointsCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$WebhookEndpointsCreateBodyMetadataObj0
 */
const SchemaOut$WebhookEndpointsCreateBodyMetadataObj0: z.ZodType<
  External$WebhookEndpointsCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  WebhookEndpointsCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$WebhookEndpointsCreateBodyMetadataObj0 = {
  in: SchemaIn$WebhookEndpointsCreateBodyMetadataObj0,
  out: SchemaOut$WebhookEndpointsCreateBodyMetadataObj0,
};
