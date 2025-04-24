import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenDevice = {
  /**
   * An obfuscated ID derived from the device ID.
   */
  deviceFingerprint?: string | undefined;
  /**
   * The IP address of the device at provisioning time.
   */
  ipAddress?: string | undefined;
  /**
   * The geographic latitude/longitude coordinates of the device at provisioning time. The format is [+-]decimal/[+-]decimal.
   */
  location?: string | undefined;
  /**
   * The name of the device used for tokenization.
   */
  name?: string | undefined;
  /**
   * The phone number of the device used for tokenization.
   */
  phoneNumber?: string | undefined;
  /**
   * The type of device used for tokenization.
   */
  type?: ("other" | "phone" | "watch") | undefined;
};

/**
 * @internal
 * IssuingNetworkTokenDevice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenDevice = {
  device_fingerprint?: string | undefined;
  ip_address?: string | undefined;
  location?: string | undefined;
  name?: string | undefined;
  phone_number?: string | undefined;
  type?: ("other" | "phone" | "watch") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenDevice
 */
const SchemaIn$IssuingNetworkTokenDevice: z.ZodType<
  IssuingNetworkTokenDevice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    device_fingerprint: z.string().optional(),
    ip_address: z.string().optional(),
    location: z.string().optional(),
    name: z.string().optional(),
    phone_number: z.string().optional(),
    type: z.enum(["other", "phone", "watch"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      device_fingerprint: "deviceFingerprint",
      ip_address: "ipAddress",
      location: "location",
      name: "name",
      phone_number: "phoneNumber",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenDevice
 */
const SchemaOut$IssuingNetworkTokenDevice: z.ZodType<
  External$IssuingNetworkTokenDevice, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenDevice // the object to be transformed
> = z
  .object({
    deviceFingerprint: z.string().optional(),
    ipAddress: z.string().optional(),
    location: z.string().optional(),
    name: z.string().optional(),
    phoneNumber: z.string().optional(),
    type: z.enum(["other", "phone", "watch"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deviceFingerprint: "device_fingerprint",
      ipAddress: "ip_address",
      location: "location",
      name: "name",
      phoneNumber: "phone_number",
      type: "type",
    });
  });

export const Schemas$IssuingNetworkTokenDevice = {
  in: SchemaIn$IssuingNetworkTokenDevice,
  out: SchemaOut$IssuingNetworkTokenDevice,
};
