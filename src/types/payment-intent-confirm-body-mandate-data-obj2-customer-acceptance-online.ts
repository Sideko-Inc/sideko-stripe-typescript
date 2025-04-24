import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
export type PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline = {
  ipAddress?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline =
  {
    ip_address?: string | undefined;
    user_agent?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline =
  {
    in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
    out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  };
