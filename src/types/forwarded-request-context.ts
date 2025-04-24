import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Metadata about the forwarded request.
 */
export type ForwardedRequestContext = {
  /**
   * The time it took in milliseconds for the destination endpoint to respond.
   */
  destinationDuration: number;
  /**
   * The IP address of the destination.
   */
  destinationIpAddress: string;
};

/**
 * @internal
 * ForwardedRequestContext without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardedRequestContext = {
  destination_duration: number;
  destination_ip_address: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardedRequestContext
 */
const SchemaIn$ForwardedRequestContext: z.ZodType<
  ForwardedRequestContext, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    destination_duration: z.number().int(),
    destination_ip_address: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      destination_duration: "destinationDuration",
      destination_ip_address: "destinationIpAddress",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardedRequestContext
 */
const SchemaOut$ForwardedRequestContext: z.ZodType<
  External$ForwardedRequestContext, // output type of this zod object
  z.ZodTypeDef,
  ForwardedRequestContext // the object to be transformed
> = z
  .object({
    destinationDuration: z.number().int(),
    destinationIpAddress: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      destinationDuration: "destination_duration",
      destinationIpAddress: "destination_ip_address",
    });
  });

export const Schemas$ForwardedRequestContext = {
  in: SchemaIn$ForwardedRequestContext,
  out: SchemaOut$ForwardedRequestContext,
};
