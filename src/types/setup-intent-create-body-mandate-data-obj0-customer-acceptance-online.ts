import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
export type SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline = {
  ipAddress: string;
  userAgent: string;
};

/**
 * @internal
 * SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    ip_address: string;
    user_agent: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaIn$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string(),
    user_agent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaOut$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline // the object to be transformed
> = z
  .object({
    ipAddress: z.string(),
    userAgent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    });
  });

export const Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    in: SchemaIn$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
    out: SchemaOut$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  };
