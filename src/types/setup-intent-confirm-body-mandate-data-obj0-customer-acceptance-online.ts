import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
export type SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline = {
  ipAddress: string;
  userAgent: string;
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    ip_address: string;
    user_agent: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    in: SchemaIn$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
    out: SchemaOut$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  };
