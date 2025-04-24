import {
  External$TerminalLocation,
  Schemas$TerminalLocation,
  TerminalLocation,
} from "./terminal-location";
import {
  External$TerminalReaderMetadata,
  Schemas$TerminalReaderMetadata,
  TerminalReaderMetadata,
} from "./terminal-reader-metadata";
import {
  External$TerminalReaderReaderResourceReaderAction,
  Schemas$TerminalReaderReaderResourceReaderAction,
  TerminalReaderReaderResourceReaderAction,
} from "./terminal-reader-reader-resource-reader-action";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Reader represents a physical device for accepting payment details.
 *
 * Related guide: [Connecting to a reader](https://stripe.com/docs/terminal/payments/connect-reader)
 */
export type TerminalReader = {
  /**
   * Represents an action performed by the reader
   */
  action?: TerminalReaderReaderResourceReaderAction | undefined;
  /**
   * The current software version of the reader.
   */
  deviceSwVersion?: string | null | undefined;
  /**
   * Type of reader, one of `bbpos_wisepad3`, `stripe_m2`, `stripe_s700`, `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, `simulated_wisepos_e`, or `mobile_phone_reader`.
   */
  deviceType:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "mobile_phone_reader"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "stripe_s700"
    | "verifone_P400";
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The local IP address of the reader.
   */
  ipAddress?: string | null | undefined;
  /**
   * Custom label given to the reader for easier identification.
   */
  label: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The location identifier of the reader.
   */
  location?: (string | TerminalLocation) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TerminalReaderMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "terminal.reader";
  /**
   * Serial number of the reader.
   */
  serialNumber: string;
  /**
   * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
   */
  status?: ("offline" | "online") | null | undefined;
};

/**
 * @internal
 * TerminalReader without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReader = {
  action?: External$TerminalReaderReaderResourceReaderAction | undefined;
  device_sw_version?: string | null | undefined;
  device_type:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "mobile_phone_reader"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "stripe_s700"
    | "verifone_P400";
  id: string;
  ip_address?: string | null | undefined;
  label: string;
  livemode: boolean;
  location?: (string | External$TerminalLocation) | undefined;
  metadata: External$TerminalReaderMetadata;
  object: "terminal.reader";
  serial_number: string;
  status?: ("offline" | "online") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReader
 */
const SchemaIn$TerminalReader: z.ZodType<
  TerminalReader, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    action: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceReaderAction.in.optional(),
    ),
    device_sw_version: z.string().nullable().optional(),
    device_type: z.enum([
      "bbpos_chipper2x",
      "bbpos_wisepad3",
      "bbpos_wisepos_e",
      "mobile_phone_reader",
      "simulated_wisepos_e",
      "stripe_m2",
      "stripe_s700",
      "verifone_P400",
    ]),
    id: z.string(),
    ip_address: z.string().nullable().optional(),
    label: z.string(),
    livemode: z.boolean(),
    location: z.union([z.string(), Schemas$TerminalLocation.in]).optional(),
    metadata: Schemas$TerminalReaderMetadata.in,
    object: z.enum(["terminal.reader"]),
    serial_number: z.string(),
    status: z.enum(["offline", "online"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      device_sw_version: "deviceSwVersion",
      device_type: "deviceType",
      id: "id",
      ip_address: "ipAddress",
      label: "label",
      livemode: "livemode",
      location: "location",
      metadata: "metadata",
      object: "object",
      serial_number: "serialNumber",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReader
 */
const SchemaOut$TerminalReader: z.ZodType<
  External$TerminalReader, // output type of this zod object
  z.ZodTypeDef,
  TerminalReader // the object to be transformed
> = z
  .object({
    action: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceReaderAction.out.optional(),
    ),
    deviceSwVersion: z.string().nullable().optional(),
    deviceType: z.enum([
      "bbpos_chipper2x",
      "bbpos_wisepad3",
      "bbpos_wisepos_e",
      "mobile_phone_reader",
      "simulated_wisepos_e",
      "stripe_m2",
      "stripe_s700",
      "verifone_P400",
    ]),
    id: z.string(),
    ipAddress: z.string().nullable().optional(),
    label: z.string(),
    livemode: z.boolean(),
    location: z.union([z.string(), Schemas$TerminalLocation.out]).optional(),
    metadata: Schemas$TerminalReaderMetadata.out,
    object: z.enum(["terminal.reader"]),
    serialNumber: z.string(),
    status: z.enum(["offline", "online"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      deviceSwVersion: "device_sw_version",
      deviceType: "device_type",
      id: "id",
      ipAddress: "ip_address",
      label: "label",
      livemode: "livemode",
      location: "location",
      metadata: "metadata",
      object: "object",
      serialNumber: "serial_number",
      status: "status",
    });
  });

export const Schemas$TerminalReader = {
  in: SchemaIn$TerminalReader,
  out: SchemaOut$TerminalReader,
};
