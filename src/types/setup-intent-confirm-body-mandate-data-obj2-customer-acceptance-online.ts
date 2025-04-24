import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
export type SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline = {
  ipAddress?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline =
  {
    ip_address?: string | undefined;
    user_agent?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string().optional(),
    user_agent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline // the object to be transformed
> = z
  .object({
    ipAddress: z.string().optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    });
  });

export const Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline =
  {
    in: SchemaIn$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
    out: SchemaOut$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  };
