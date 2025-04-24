import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
export type PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline = {
  ipAddress: string;
  userAgent: string;
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    ip_address: string;
    user_agent: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
    out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  };
